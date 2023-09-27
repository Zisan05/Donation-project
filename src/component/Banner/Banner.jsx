import { useEffect, useState } from "react";


const Banner = ({donation}) => {

const [searchValue, setSearchValue] = useState()



const handlSearch = e => {

  e.preventDefault();

console.log(e.target.name.value);
setSearchValue(e.target.name.value);

}

    return (
        
      <div>
        <div className="hero h-[500px] opacity-5 relative" style={{backgroundImage: 'url(https://i.ibb.co/jHMHLry/Rectangle-4281.png)'}}>
        
        </div>
      
        <div className=" absolute bottom-[400px] lg:bottom-[500px] md:left-[250px] lg:left-[600px]">
        <h1 className=" font-bold text-black text-[18px] md:text-[25px] lg:text-[35px]  mb-[30px]">I Grow By Helping People In Need</h1>
         
          <div className="lg:ml-[100px]  ">
          <form onSubmit={handlSearch}>
          <input className=" rounded-[2px] px-[15px] lg:px-[40px] py-[5px] border-[1px] border-black" type="text" name="name" id="" />
          <button className=" rounded-[2px] font-semibold text-white bg-[#FF444A] px-[15px] py-[7px]">Submit</button>
          </form>
          </div>
        </div>
      </div>
        
    );
};

export default Banner;