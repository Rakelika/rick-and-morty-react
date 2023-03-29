import React, { useContext, useState } from "react"
import { RickContext } from "../context/context"
import SimpleBar from 'simplebar-react';
import { Container } from "react-bootstrap";
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";
import 'simplebar-react/dist/simplebar.min.css';
import { Link } from "react-router-dom";
import { BsFillEyeFill } from "react-icons/bs";

export default function CharactersPage(){
    const { characters } = useContext (RickContext)

return (
    <div>
    <PaginationComponent></PaginationComponent>
    <SimpleBar style={{ maxHeight: 500 }}>
    <Container className="AllCharacters">
        {characters.map((character) => (
            <figure key={character.id}>
                <img src={character.image} alt="" />
                <figcaption>
                    <Link to={`/character/${character.id}`}>
                        {character.name}
                        {/* <p className="iconDetails"><BsFillEyeFill/></p> */}
                    </Link>
                </figcaption> 
            </figure>
        ))}
    </Container> 
    </SimpleBar>
    </div>

    )
}