import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '../provider/ThemeProvider';

function HeatMapChart() {
  const theme = useTheme();
  let x = {
    series: [
      {
        name: 'Active',
        data: [44, 55, 41, 67, 22, 43, 32, 46, 8, 33],
      },
      {
        name: 'Recovered',
        data: [13, 23, 20, 8, 13, 27, 32, 46, 8, 33],
      },
      {
        name: 'Deceased',
        data: [11, 17, 15, 15, 21, 14, 32, 46, 8, 33],
      },
    ],
    options: {
      theme: {
        mode: theme.theme === 'dark' ? 'dark' : 'light',
      },
      chart: {
        type: 'heatmap',
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          borderRadius: 8,
          horizontal: false,
        },
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '01/01/2020 GMT',
          '01/02/2020 GMT',
          '01/03/2020 GMT',
          '01/04/2020 GMT',
          '01/05/2020 GMT',
          '01/06/2020 GMT',
          '01/07/2020 GMT',
          '01/08/2020 GMT',
          '01/09/2020 GMT',
          '01/10/2020 GMT',
          '01/11/2020 GMT',
          '01/12/2020 GMT',
          '01/13/2020 GMT',
          '01/14/2020 GMT',
          '01/15/2020 GMT',
          '01/16/2020 GMT',
          '01/17/2020 GMT',
          '01/18/2020 GMT',
          '01/19/2020 GMT',
          '01/20/2020 GMT',
          '01/21/2020 GMT',
          '01/22/2020 GMT',
          '01/23/2020 GMT',
          '01/24/2020 GMT',
        ],
        style: {
          colors: '#ffffff',
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
        },
      },
      legend: {
        position: 'right',
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
    },
  };

  return (
    <Chart options={x.options} series={x.series} type="heatmap" height={550} />
  );
}

export default HeatMapChart;
