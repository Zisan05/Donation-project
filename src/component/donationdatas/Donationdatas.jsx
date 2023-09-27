

const Donationdatas = ({data}) => {
    const {id, Card_bg_color, Picture, Text_button_bg_color, Title, Category_bg_Color, Category ,Price} = data;
    return (
        <div>
            <Link to={`/card/${id}`}>
 <div style={{ background: `${Card_bg_color}` }} className="card  bg-base-100 shadow-xl">
  <figure><img className="w-full h-[200px]" src={Picture} alt="" /></figure>
  <div className="card-body">
  <h2 style={{color: `${Text_button_bg_color}`}} className="card-title text-[]">{Title}</h2>
  <h1 style={{ background: `${Category_bg_Color}`, color: `${Text_button_bg_color}` }} className="card-title w-[110px] border-[2px] px-[10px] ">{Category}</h1>
<p style={{color: `${Text_button_bg_color}`}}>Price: ${Price}</p>
</div>
</div></Link>
        </div>
    );
};

export default Donationdatas;