import React from 'react';
import Performance from './Performance';
import Calender from './Calender';

const CalenderView = () => {
  return (
    <div className="container-tarif mx-auto my-8 md:flex gap-3">
      <div className="md:w-[30%]">
        <Performance />
      </div>
      <div className="md:w-[70%]">
        <Calender />
      </div>
    </div>
  );
};

export default CalenderView;
