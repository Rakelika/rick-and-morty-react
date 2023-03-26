import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const RickContext = createContext()

const ApiUrl = "https://rickandmortyapi.com/api"

export const RickContextProvider = ({children}) => {
    const [characters, setCharacters] = useState([])
    const [locations, setLocations] = useState([])
    const [episodes, setEpisodes] = useState([])

       useEffect (() =>{
        const getCharacters = async () => {            
           const charactersApi = await axios.get(`${ApiUrl}/character/`)
           setCharacters(charactersApi.data.results)
        }
        getCharacters();
    }, [])

    useEffect (() =>{
        const getLocations = async () => {            
           const locationsApi = await axios.get(`${ApiUrl}/location/`)
           setLocations(locationsApi.data.results)
        }
        getLocations();
    }, [])

    useEffect (() =>{
        const getEpisodes = async () => {            
           const episodesApi = await axios.get(`${ApiUrl}/episode/`)
           setEpisodes(episodesApi.data.results)
        }
        getEpisodes();
    }, [])

    return (
        <RickContext.Provider value = {{characters, locations, episodes}}>
            {children}     
        </RickContext.Provider>
    )
}
