

const Banner = () => {
    return (
        
        <div className="hero h-[500px]" style={{backgroundImage: 'url(https://i.ibb.co/khbj52q/happy-group-volunteers-holding-clothes-donation-boxes-white-background-30886862.jpg'}}>
        <div className=" bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
          <h1 className=" font-semibold text-black text-[18px] md:text-[25px] lg:text-[35px]  mb-[30px]">I Grow By Helping People In Need</h1>
           
            <input className=" rounded-[2px] px-[15px] lg:px-[40px] py-[5px]" type="text" name="" id="" />
            <input className=" rounded-[2px] font-semibold text-white bg-[#FF444A] px-[15px] py-[5px]" type="submit" value="Submit" />
          </div>
        </div>
      </div>
    );
};

export default Banner;