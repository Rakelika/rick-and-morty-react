import React, { useContext } from "react"
import { RickContext } from "../context/context"
import SimpleBar from 'simplebar-react';
import { Container } from "react-bootstrap";

export default function LocationsPage(){
    const { locations } = useContext (RickContext)

return (
    <Container>
        {locations.map((location) => (
            <div key={location.id}>
                    <p>{location.name}</p> 
            </div>
        ))}
    </Container> 

    )
}