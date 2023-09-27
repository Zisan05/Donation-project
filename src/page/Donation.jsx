import { useEffect, useState } from "react";
import CardInfo from "../component/CardInfo/CardInfo";
import {Link} from "react-router-dom"

const Donation = () => {

    const [donation,setdonation] =  useState([])
    const [nofound,setnofound] = useState(false)

    const [datalength , setdatalength] = useState(4);


    useEffect( () => {
        const donationItem = JSON.parse(localStorage.getItem('donations'))
        if(donationItem){
            setdonation(donationItem);
        }
        else{
            setnofound('You do not add any donation')
        }

    },[])


    
    
    return (
        <div>
            { 
            nofound ? <div>
                <p className="text-[40px] text-center mt-[300px] ">{nofound}</p>
                <Link to = '/'>
            <button className="px-[20px] py-[15px] bg-red-500 rounded-xl text-white font-semibold ml-[570px]">Go to home</button>
          </Link>
            </div>
            
            
             :
            (
                <div>
                

           { <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {
                donation.slice(0,datalength).map(card =><CardInfo key ={card.id} card = {card}></CardInfo> )
            }
           <div className={datalength === donation.length && 'hidden'}>
           <button onClick={() => setdatalength(donation.length)} className="bg-[#009444] text-white px-[20px] py-[10px] relative left-[120px] md:left-[250px] lg:left-[620px] rounded-[5px] ">See all</button>
           </div>
           </div> }
            </div>
            ) 
            }
            
        </div>
    );
};

export default Donation;