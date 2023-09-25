import Navbar from "../navbar/Navbar";
import {Outlet} from "react-router-dom"


const Root = () => {
    return (
        <div className="lg:max-w-[1300px] mx-auto ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;