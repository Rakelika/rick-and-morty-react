import React, { useContext } from "react"
import { RickContext } from "../context/context"
import SimpleBar from 'simplebar-react';
import { Container } from "react-bootstrap";

export default function CharactersPage(){
    const { characters } = useContext (RickContext)

return (
    <Container>
        {characters.map((character) => (
            <div key={character.id}>
                <img src={character.image} alt="" />
                    <p>{character.name}</p> 
            </div>
        ))}
    </Container> 

    )
}