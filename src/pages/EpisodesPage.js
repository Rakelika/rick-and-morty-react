import React, { useContext } from "react"
import { RickContext } from "../context/context"
import SimpleBar from 'simplebar-react';
import { Container } from "react-bootstrap";

export default function EpisodesPage(){
    const { episodes } = useContext (RickContext)

return (
    <Container>
        {episodes.map((episode) => (
            <div key={episode.id}>
                    <p>{episode.name}</p> 
            </div>
        ))}
    </Container> 

    )
}