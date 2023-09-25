

const Banner = () => {
    return (
        
      <div>
        <div className="hero h-[500px] opacity-5 relative" style={{backgroundImage: 'url(https://i.ibb.co/jHMHLry/Rectangle-4281.png)'}}>
        
        </div>
      
        <div className=" absolute bottom-[400px] lg:bottom-[500px] md:left-[250px] lg:left-[600px]">
        <h1 className=" font-bold text-black text-[18px] md:text-[25px] lg:text-[35px]  mb-[30px]">I Grow By Helping People In Need</h1>
         
          <div className="lg:ml-[100px]  ">
          <input className=" rounded-[2px] px-[15px] lg:px-[40px] py-[5px] border-[1px] border-black" type="text" name="" id="" />
          <input className=" rounded-[2px] font-semibold text-white bg-[#FF444A] px-[15px] py-[7px]" type="submit" value="Submit" />
          </div>
        </div>
      </div>
        
    );
};

export default Banner;