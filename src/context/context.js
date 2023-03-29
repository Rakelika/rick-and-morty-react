import { createContext, useEffect, useState } from "react";

export const RickContext = createContext()

export const RickContextProvider = ({children}) => {
    const [characters, setCharacters] = useState([])

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

    return (
        <RickContext.Provider value = {{
            characters,
            nextPage,
            prevPage,
            onPrev,
            onNext,
            characterPage,
            infoPage,
            }}>
            {children}     
        </RickContext.Provider>
    )
}
