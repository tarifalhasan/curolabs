import { Typography } from '@material-tailwind/react';
import React from 'react';
import Chart from 'react-apexcharts';

const ChartView = () => {
  const options = {
    chart: {
      height: 350,
      type: 'area',
    },
    colors: ['#00f496', '#ff3737'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 2,
      dashArray: 0,
    },
    lagends: {
      position: 'top',
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    },
    yaxis: {
      min: 90,
      max: 115,
      tickAmount: 5,
      labels: {
        formatter: function (value) {
          return '$' + value + 'K';
        },
      },
    },
    title: {
      text: 'Balance',
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '24px',
        color: '#000',
        fontWeight: 600,
      },
    },
  };
  const series = [
    {
      name: 'Balance',
      data: [90, 100, 95, 105, 109, 97, 99, 91, 93, 92, 106, 99, 107, 92],
    },
    {
      name: 'Equity',
      data: [105, 90, 99, 109, 100, 95, 97, 91, 97, 99, 105, 93, 91, 105],
    },
  ];

  return (
    <div className="card shadow-lg bg-white rounded-lg py-3">
      <Chart options={options} series={series} type="area" height={327} />
    </div>
  );
};

export default ChartView;
