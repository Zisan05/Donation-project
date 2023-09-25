
const Cards = ({card}) => {

    const {Picture, Title, Description, Price, Text_button_bg_color} = card;

    return (
        <div>
            <div>
 <div className="mt-10"> 
 <img className="w-full h-[500px]" src={Picture}alt="" />
  </div>
     <div className="h-[96px] bg-[#0B0B0B80] relative bottom-24">
     <div className="absolute top-[30%] left-10">
     <button style={{ backgroundColor:Text_button_bg_color}}
   className="p-2 rounded-xl text-white font-semibold"  > Donate $ {Price}
  </button>
 </div>
 </div>
</div>

            <h1 className="text-[40px] font-semibold">{Title}</h1><br />
            <p className="text-[20px]">{Description}</p>
        </div>
    );
};

export default Cards;