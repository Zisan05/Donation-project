

const CardInfo = ({card}) => {
const {Picture,Title,Category,Category_bg_Color, Card_bg_color, Price, Text_button_bg_color} = card;
    
    return (
        
        <div> 
                <div  style={{ background: `${Card_bg_color}` }} className="flex gap-[30px] items-center w-[95%] md:w-[95%] lg:w-[650px]">
                <img className="w-[100px] md:w-[300px] lg:w-[300px] h-[200px]" src={Picture} alt="" />
                <div>
                    <h1  style={{ background: `${Category_bg_Color}`, color: `${Text_button_bg_color}` }} className="card-title w-[110px] border-[2px] px-[10px]" >{Category}</h1>
                    <h2 className="text-[24px] font-semibold">{Title}</h2>
                    <p style={{color: `${Text_button_bg_color}`}}>Price: ${Price}</p>
                    <button  className="p-2 rounded-[5px] text-white font-semibold mt-[10px]" style={{ backgroundColor:Text_button_bg_color}}>View Details</button>
                </div>
            </div>
        </div>
        
    );
};

export default CardInfo;