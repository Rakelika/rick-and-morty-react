import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";


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

        <Container className="SingleCharacters">
            <div>
                <img className="imgSingleCharacter" src={singleCharacter.image} alt=""/>
            </div>
            <div>

                <h1>{singleCharacter.name}</h1>

                <p className="status">{singleCharacter.status}</p>

                <div className="details">
                    <p><strong>Gender:</strong></p>
                    <p>{singleCharacter.gender}</p>
                </div>
                <div className="details">
                    <p><strong>Location:</strong></p>
                    {/* <p>{singleCharacter.location.name}</p> */}
                </div> 
                    <p className="btnBack" onClick={() => navigate ("/characters")}>
                            <BsFillArrowLeftCircleFill/>
                    </p>
            </div>
        </Container> 
    </div>
    )
}