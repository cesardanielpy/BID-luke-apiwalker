import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Personas = () => {
    const params = useParams();
    const { id } = useParams;
    const [persona, setPersona] = useState({})
    const [error, setError] = useState(false)
    useEffect(() => {
        console.log(params)
        axios.get("https://swapi.dev/api/people/" + params.id)
        .then(response=>response.data)
        .then(result => {
            console.log(result);
            setPersona(result);
        })
        .catch(error => {
            console.log(error);
            setError(true);
        })
    }, [])
    
    return (
        <>
            <h1>Ruta Personas {params.id}</h1>
            <h3>Nombre: {persona.name}</h3>
            <h4>Height: {persona.height}</h4>
            <h4>Birth Year:{persona.birth_year}</h4>
            <h4>Gender: {persona.gender}</h4>
            {
                error?
                "Estos no son los droides que estabas buscando"
                :
                ""
            }
        </>
    )
}

export default Personas