import Banner from "../component/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Donationdata from "../component/Donationdata/Donationdata";

const Home = () => {

const donation = useLoaderData();
console.log(donation);

    return (
        <div>
        <Banner></Banner>
        <Donationdata donation={donation}></Donationdata>
        </div>
    );
};

export default Home;