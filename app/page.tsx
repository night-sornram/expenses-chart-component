"use client"
import Image from 'next/image'
import React from 'react';
import BarChart  from '@/components/BarChart';

export default function Home() {
  return(
    <div className=' flex-col w-screen h-screen flex justify-center items-center bg-custom-500'>
      <div className=' flex flex-row justify-between bg-custom-100 p-5 rounded-xl w-11/12  min-[475px]:w-[450px]'>
        <div className=' text-white flex flex-col'>
          <div className=' text-sm'>
            My Balance
          </div>
          <div className=' font-bold text-2xl'>
            $921.48
          </div>
        </div>
        <Image
        width={72}
        height={48}
        alt='logo'
        src={"/logo.svg"}/>
      </div>
      <div className=' flex flex-col justify-between bg-white mt-5 p-5 rounded-xl  w-11/12  min-[475px]:w-[450px]'>
        <div className=' text-custom-300 font-bold text-lg min-[475px]:text-2xl'>
          Spending - Last 7 Days
        </div>
        <div className=' flex justify-center items-center w-auto h-auto bg-white relative'>
          <BarChart />
        </div>
        <hr className=' mt-5 w-11/12  min-[475px]:w-[400px] h-[2px]  bg-custom-500 border-0' />
        <div className=' w-full mt-5 flex flex-row items-end justify-between'>
          <div className=' flex flex-col'>
            <div className=' text-xs min-[475px]:text-sm text-custom-400'> 
              Total this month  
            </div>
            <div className=' font-bold text-xl min-[475px]:text-3xl text-custom-300'>
              $478.33
            </div>
          </div>
          <div className=' text-custom-400 text-sm flex flex-col'>
            <div className=' font-bold text-xs min-[475px]:text-base text-custom-300 text-end'>
              +2.4%  
            </div>
            <div className=' text-xs min-[475px]:text-base'>
              from last month
            </div>
          </div>

        </div>
      </div>
    </div>
  
  
  )
}
  
