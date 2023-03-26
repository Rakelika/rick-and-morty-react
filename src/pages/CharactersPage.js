import React, { useContext } from "react"
import { RickContext } from "../context/context"
import SimpleBar from 'simplebar-react';
import { Container } from "react-bootstrap";
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";
import 'simplebar-react/dist/simplebar.min.css';

export default function CharactersPage(){
    const { characters } = useContext (RickContext)

return (
    <div>
    <PaginationComponent></PaginationComponent>
    <SimpleBar style={{ maxHeight: 500 }}>
    <Container className="AllCharacters">
        {characters.map((character) => (
            <div key={character.id}>
                <img src={character.image} alt="" />
                    <p>{character.name}</p> 
            </div>
        ))}
    </Container> 
    </SimpleBar>
    </div>

    )
}