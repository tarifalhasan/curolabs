import { Typography } from '@material-tailwind/react';
import React from 'react';

const Objective = () => {
  const objectiveData = [
    { title: 'Trading Days', value: '9/10' },
    { title: 'Max Daily Loss', value: '-2%' },
    { title: 'Max Loss', value: '-4%' },
    { title: 'Profit Target', value: '+20%' },
  ];
  return (
    <div className="card shadow-lg p-3 rounded-lg bg-white h-[365px]">
      <h4 className="text-[20px]  font-semibold mb-4">Trading Objectives</h4>
      {objectiveData.map((data, index) => {
        return (
          <div key={index} className="flex items-center mb-4 ">
            <div className="w-[50%] rounded-md h-[59px] p-2  bg-primary bg-opacity-[0.10000000149011612] text-[18px] flex items-center justify-between">
              <span className="font-[500]">{data.title}</span>{' '}
              <span className="font-[600]">:</span>
            </div>
            <div className="w-[50%] flex items-center p-2 h-[59px] bg-[rgb(247,248,253)] text-[18px]">
              {data.value}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Objective;
