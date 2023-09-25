import { Link } from "react-router-dom";

const Donationdata = ({ donation }) => {

    console.log(donation);
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-[100px]">
            {
                donation.map(data => (
<Link to={`/card/${data.id}`}>
 <div style={{ background: `${data.Card_bg_color}` }} className="card  bg-base-100 shadow-xl">
  <figure><img className="w-full h-[200px]" src={data.Picture} alt="" /></figure>
  <div className="card-body">
  <h2 style={{color: `${data.Text_button_bg_color}`}} className="card-title text-[]">{data.Title}</h2>
  <h1 style={{ background: `${data.Category_bg_Color}`, color: `${data.Text_button_bg_color}` }} className="card-title w-[110px] border-[2px] px-[10px] ">{data.Category}</h1>
<p style={{color: `${data.Text_button_bg_color}`}}>Price: ${data.Price}</p>
</div>
</div></Link>
                ))
            }
        </div>
    );
};

export default Donationdata;