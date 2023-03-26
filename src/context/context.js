import { createContext, useEffect, useState } from "react";

export const RickContext = createContext()

const ApiUrl = "https://rickandmortyapi.com/api"

export const RickContextProvider = ({children}) => {
    const [characters, setCharacters] = useState([])
    const [locations, setLocations] = useState([])
    const [episodes, setEpisodes] = useState([])

    const [characterPage, setCharacterPage] = useState("https://rickandmortyapi.com/api/character")

    const [nextPage, setNextPage] = useState()
    const [prevPage, setPrevPage] = useState()
    const [infoPage, setInfoPage] = useState([])



    useEffect(() =>{

        const url = characterPage
        const getCharacters = async () => {
            const charactersApi = await fetch(url);
            const charactersJson = await charactersApi.json();
            setCharacters(charactersJson.results);
            setNextPage(charactersJson.info.next);
            setPrevPage(charactersJson.info.prev); 
            setInfoPage(charactersJson.info);          
        }
        getCharacters();
       
    },[characterPage])

    const onPrev  = () => {
        setCharacterPage(prevPage)
      }

      const onNext  = () => {
        setCharacterPage(nextPage)
      }


    useEffect (() =>{
        const getLocations = async () => {            
            const locationsApi = await fetch(`${ApiUrl}/location`);
            const locationsJson = await locationsApi.json();
            setLocations(locationsJson.results)
        }
        getLocations();
    }, [])

    useEffect (() =>{
        const getEpisodes = async () => {            
            const episodesApi = await fetch(`${ApiUrl}/episode`);
            const episodesJson = await episodesApi.json();
            setEpisodes(episodesJson.results)
        }
        getEpisodes();
    }, [])

    return (
        <RickContext.Provider value = {{characters, locations, episodes, nextPage, prevPage, onPrev, onNext, characterPage, infoPage}}>
            {children}     
        </RickContext.Provider>
    )
}
