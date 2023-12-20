import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { UserData } from '@/app/data';
import { Content } from 'next/font/google';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  
  plugins: {
    legend: {
      display : false
    },
    title: {
      display: false,
    },
    tooltip: {
        callbacks: {
            label: function(context : any) {
                let label = context.dataset.label || '';

                if (label) {
                    label += ': ';
                }
                if (context.parsed.y !== null) {
                    label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                }
                return label;
            },
            title : function(context : any){
                return '';
            },
            labelColor: function(context : any) {
                return {
                    backgroundColor: 'rgb(255, 0, 0)'
                }
            },
        },
        backgroundColor: 'hsl(25, 47%, 15%)',
        displayColors: false,
        yAlign : 'bottom',

        },
    },
    scales: {
        x: {
            border : {
                display : false
            },  
            grid: {
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            }
          },
        y : {
            display : false
        },
    }
}


const labels = UserData.map((data)=>data.day);

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: UserData.map((data)=>data.amount),
      backgroundColor: ['hsl(10, 79%, 65%)','hsl(10, 79%, 65%)',"hsl(186, 34%, 60%)",'hsl(10, 79%, 65%)','hsl(10, 79%, 65%)','hsl(10, 79%, 65%)','hsl(10, 79%, 65%)'],
      hoverBackgroundColor : ['hsl(10, 79%, 75%)','hsl(10, 79%, 75%)',"hsl(186, 34%, 75%)",'hsl(10, 79%, 75%)','hsl(10, 79%, 75%)','hsl(10, 79%, 75%)','hsl(10, 79%, 75%)'],
      borderRadius: 5,
      borderSkipped: false,
    },
    
  ],
  
  
};

export default function BarChart() {
  return <Bar  options={options} data={data} />;
}
