import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
           <div className="flex justify-between items-center py-[30px]">
            <img className=" w-[100px] lg:w-[170px]" src="https://i.ibb.co/wsZftnR/Logo.png" alt="" />

            <div className="flex gap-[10px] lg:gap-[20px] text-[12px] lg:text-[25px]">
            <NavLink to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
  }
>
 Home
</NavLink>
            <NavLink to="/donation"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
  }
>
Donation
</NavLink>
            <NavLink to="/statistics"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
  }
>
Statistics
</NavLink>
            </div>
           </div>
        </div>
    );
};

export default Navbar;