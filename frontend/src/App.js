import React, { useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Signin from './screens/Signin';
import Signup from './screens/Signup';

import { useAuth } from './provider/AuthProvider';
import HomeScreen from './screens/HomeScreen';

const base_url = 'http://localhost:8080';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
  });

  axios.interceptors.request.use(
    (config) => {
      const { origin } = new URL(config.url);
      const allowedOrigins = [base_url];
      const token = localStorage.getItem('accessToken');
      if (allowedOrigins.includes(origin)) {
        config.headers.authorization = `Bearer ${token}`;
      }
      console.log(config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      console.log(error);
      const originalRequest = error.config;
      let refreshToken = localStorage.getItem('refreshToken');
      if (
        refreshToken &&
        error.response.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        return axios
          .post(`${base_url}/auth/refreshToken`, {
            refreshToken: refreshToken,
          })
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              localStorage.setItem('accessToken', res.access.token);
              localStorage.setItem('refreshToken', res.refresh.token);
              return axios(originalRequest);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return Promise.reject(error);
    }
  );

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="bg-white dark:bg-gray-900 min-h-screen">
          <Navbar />
          <Switch>
            <Route path="/register">
              <Signup />
            </Route>
            <Route path="/login">
              <Signin />
            </Route>
            <PrivateRoute path="/">
              <HomeScreen />
            </PrivateRoute>
            {/* <Route path="/">
              <HomeScreen />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !auth.isLoggedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
