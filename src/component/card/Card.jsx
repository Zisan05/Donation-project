import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Cards from "./Cards/Cards";
const Card = () => {

    const [card,setCard] = useState({})

    const {id} = useParams()
    console.log(id);

    const cards = useLoaderData()
console.log(cards);

useEffect(() => {
    const findcard = cards.find(card  => card.id === id )

    setCard(findcard);
},[id,cards])


    return (
        <div>
            <Cards card ={card}></Cards>
        </div>
    );
};

export default Card;