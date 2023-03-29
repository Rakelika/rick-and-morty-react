import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";


export default function SingleCharacterPage(){

    const navigate = useNavigate();

    const { id } = useParams();
    const [singleCharacter, setSingleCharacter] = useState({});

    useEffect (() =>{
        const getSingleCharacter = async () => {            
            const singleCharacterApi = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const singleCharacterJson = await singleCharacterApi.json();
            setSingleCharacter(singleCharacterJson)
        }
        getSingleCharacter();
    }, [])

return (
    <div>
        <button onClick={() => navigate ("/characters")}>
            GO BACK!
         </button>
        <Container className="SingleCharacters">
            <h1>{singleCharacter.name}</h1>
            <img src={singleCharacter.image} alt=""/>
        </Container> 
    </div>
    )
}