import React, { useState } from 'react';
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';


import DetailsCard from '../components/DetailsCard';

import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import AreaChart from '../components/AreaChart';
import HeatMapChart from '../components/HeatMap';

import TextInput from '../components/TextInput';
import SelectInput from '../components/SelectInput';

const getUserDetails = gql`
  query($UID:ID!){
    GetUserById(user_id:$UID ) {
      _id
      name
      email
    }
  }
`;

function HomeScreen() {

  const { loading, error, data } = useQuery(getUserDetails,{variables:{
    UID:JSON.parse(localStorage.getItem('user'))._id
  }});

  const [currentChart, setcurrentChart] = useState('bar');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    console.log(data)

  return (
    <div className="mx-10 my-10 space-y-10">
      <div className="shadow-md rounded-md flex p-8 space-x-4 items-center bg-gray-100 dark:bg-gray-800">
        <Formik
          className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded flex"
          initialValues={{
            gender: '',
            fromDate: '',
            toDate: '',
          }}
          validationSchema={Yup.object({
            gender: Yup.string().required('Required'),
            fromDate: Yup.date().required('Required'),
            toDate: Yup.date().required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            //
            console.log(values);
          }}
        >
          <Form className="flex space-x-4 items-center">
            <div className="-mx-3 md:flex mb-6">
              <SelectInput
                label="Gender"
                name="gender"
                options={[
                  { value: 'm', name: 'Male' },
                  { value: 'f', name: 'Female' },
                  { value: 'na', name: 'Not Known' },
                ]}
              />
            </div>
            <div className="-mx-3 md:flex mb-6">
              <SelectInput
                label="Location"
                name="location"
                options={[
                  { value: 'KA', name: 'Karnataka' },
                  { value: 'MH', name: 'Maharastra' },
                  { value: 'GA', name: 'Goa' },
                ]}
              />
            </div>
            <div className="-mx-3 md:flex mb-6">
              <SelectInput
                label="Age"
                name="age"
                options={[
                  { value: '10', name: '10' },
                  { value: '20', name: '20' },
                  { value: '30', name: '30' },
                ]}
              />
            </div>
            <div className="-mx-3 md:flex mb-6">
              <SelectInput
                label="Status"
                name="status"
                options={[
                  { value: 'active', name: 'Active' },
                  { value: 'recovered', name: 'Recovered' },
                  { value: 'deceased', name: 'Deceased' },
                ]}
              />
            </div>
            <div className="-mx-3 md:flex mb-6">
              <TextInput label="From Date" name="fromDate" type="date" />
            </div>
            <div className="-mx-3 md:flex mb-6">
              <TextInput label="To Date" name="toDate" type="date" />
            </div>
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Apply Filter
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="flex space-x-10">
        <div className="flex space-x-4 w-1/3">
          <DetailsCard title="ACTIVE" value="485555" />
          <DetailsCard title="RECOVERED" value="548658" />
          <DetailsCard title="DECEASED" value="56248" />
        </div>
        <div className="flex space-x-4 w-2/3">
          <DetailsCard title="Month to Date Active cases" value="522" />
          <DetailsCard title="Last Month Active cases" value="6522" />
          <DetailsCard title="Estimated Month end Active cases" value="5565" />
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 shadow-lg p-2 rounded-md">
        <div className="flex justify-between">
          <div className="p-2 dark:text-gray-100">Toll Sumarry</div>
          <div className="p-2 space-x-2">
            <select
              onChange={(e) => setcurrentChart(e.target.value)}
              className="border-none bg-white p-2 rounded-md"
            >
              <option value="bar">Bar Chart</option>
              <option value="line">Line Chart</option>
              <option value="area">Area Chart</option>
              <option value="heatmap">Heatmap Chart</option>
            </select>
          </div>
        </div>
        <div className="space-y-10">
          {currentChart === 'bar' && <BarChart />}
          {currentChart === 'line' && <LineChart />}
          {currentChart === 'area' && <AreaChart />}
          {currentChart === 'heatmap' && <HeatMapChart />}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
