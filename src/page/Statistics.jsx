import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Legend } from 'recharts';
import {Link} from 'react-router-dom'




function PieChartComponent() {

  const [myDonation, setmyDonation] = useState([])
  const [totalDonation, settotalDonation] = useState(0)
  const [remainingDonation, setremainingDonation] = useState(0)
  const [nodata, setnodata] = useState(false)

  const [data, setdata] = useState([])

  useEffect(() => {

    const donationItem = JSON.parse(localStorage.getItem('donations'))

if(donationItem){
  setmyDonation(donationItem);

  const sum = donationItem.length
  const totalpercent = parseFloat(((sum / 12) * 100).toFixed(2));

  const remainingpercent = Math.abs(totalpercent - 100);

  const data = [
    { name: 'Your Donation', value: totalpercent, fill: '#00C49F' },
    { name: 'Total Donation', value: remainingpercent, fill: '#FF444A' }


  ];

  settotalDonation(totalpercent);
  setremainingDonation(remainingpercent);

  setdata(data);
}
else{
  setnodata('ok')
}



  }, [])
  return (
    <div>
      {
        nodata ? <div>
          <p className='text-[40px] text-center text-red-500'>Please go home page and add some donation</p>
          <Link to = '/'>
            <button className= 'px-[20px] py-[15px] bg-red-500 rounded-xl text-white font-semibold ml-[570px]'>Go to home</button>
          </Link>
        </div> : <div className='flex justify-center'><PieChart width={400} height={400}>
          <Pie dataKey="value" data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label={({ percent }) => `${(percent * 100).toFixed(2)}%`
          } />
          <Legend />
        </PieChart></div>
      }
    </div>
  );
}

export default PieChartComponent;