import { Card, CardBody, Typography } from '@material-tailwind/react';
import React from 'react';
import { AiOutlineDollar, AiOutlineStar } from 'react-icons/ai';
import win_loss_img from '../../images/win&loss.png';
const Overview = () => {
  return (
    <div className=" mt-7 grid gap-5 lg:grid-cols-4 container mx-auto">
      <Card className="w-full md:mb-0 mb-3 shadow-lg">
        <CardBody className="flex items-center gap-5">
          <div className=" w-[70px] h-[70px]  bg-secondary grid place-items-center bg-opacity-[0.10000000149011612] rounded-full ">
            <AiOutlineDollar color="#00D880" size={35} />
          </div>
          <div>
            <Typography className=" text-xl font-normal text-black  ">
              Net P&L
            </Typography>
            <Typography className=" pt-2 text-3xl sm:text-4xl font-semibold text-black">
              20%
            </Typography>
          </div>
        </CardBody>
      </Card>

      <Card className="w-full md:mb-0 mb-3 shadow-lg">
        <CardBody className="flex items-center gap-5">
          <div className="w-[70px] h-[70px]  bg-cyan grid place-items-center bg-opacity-[0.10000000149011612] rounded-full">
            <AiOutlineDollar color="#03E3FC" size={35} />
          </div>
          <div>
            <Typography className=" text-xl font-normal ">Balance</Typography>
            <Typography className="text-3xl sm:text-4xl pt-2  font-semibold text-black">
              $120,000
            </Typography>
          </div>
        </CardBody>
      </Card>

      <Card className="w-full md:mb-0 mb-3 shadow-lg">
        <CardBody className="flex items-center gap-5">
          <div className="">
            <div className="w-[70px] h-[70px]  bg-[#FFAB34] grid place-items-center bg-opacity-[0.10000000149011612] rounded-full">
              <img className="w-[40px]" src={win_loss_img} alt="ratio" />
            </div>
          </div>
          <div className="w-full">
            <Typography className=" text-xl font-normal  mb-2">
              Avg Win/Loss
            </Typography>
            <div className="flex gap-1  items-center justify-between">
              <div className="w-[60%]  rounded-l-[5px]   bg-primary h-[25px]"></div>

              <div className="w-[40%] rounded-r-[5px] bg-red h-[25px]"></div>
            </div>
            <div className="w-full pt-2 flex items-center justify-between">
              <Typography className="  text-xs font-normal text-black">
                +$2200
              </Typography>
              <Typography className="  text-xs font-normal text-black">
                -$500
              </Typography>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card className="w-full md:mb-0 mb-3 shadow-lg">
        <CardBody className="flex items-center gap-5">
          <div className="w-[70px] h-[70px]  bg-[#7367FF] grid place-items-center bg-opacity-[0.10000000149011612] rounded-full">
            <AiOutlineStar color="#7367FF" size={35} />
          </div>
          <div>
            <Typography className=" text-xl font-normal ">Win Rate</Typography>
            <Typography className="text-3xl pt-2  sm:text-4xl font-semibold text-black">
              45%
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Overview;
