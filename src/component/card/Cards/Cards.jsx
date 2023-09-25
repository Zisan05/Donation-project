import swal from "sweetalert";

const Cards = ({card}) => {

    const {id, Picture, Title, Description, Price, Text_button_bg_color} = card;

    const handltoadddonation = () =>{
  
  const addedArray = [];
 
  const donationItem = JSON.parse(localStorage.getItem('donations'))

  if(!donationItem){
    addedArray.push(card)
    localStorage.setItem('donations',JSON.stringify(addedArray)) 
    swal("Good job!", "Product added successfully", "success"); 
  }
  else{
        addedArray.push(...donationItem, card);
    localStorage.setItem('donations',JSON.stringify(addedArray)) 
    swal("Good job!", "Product added successfully", "success");
    
  }

    }

    return (
        <div>
            <div>
 <div className="mt-10"> 
 <img className="w-full h-[500px]" src={Picture}alt="" />
  </div>
     <div className="h-[96px] bg-[#0B0B0B80] relative bottom-24">
     <div className="absolute top-[30%] left-10">
     <button onClick={handltoadddonation} style={{ backgroundColor:Text_button_bg_color}}
   className="p-2 rounded-xl text-white font-semibold"  > Donation $ {Price}
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