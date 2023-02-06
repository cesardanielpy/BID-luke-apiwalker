import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Principal = () => {

    const [opciones, setOpciones] = useState([]);

    const [selected, setSelected] = useState("");

    const [id, setId] = useState("1");

    const [error, setError] = useState(false)

    useEffect(() => {

    
    }, [])
    
    useEffect(() => {
        axios.get("https://swapi.dev/api/")
        .then(response => response.data)
        .then(result => {
            console.log(result);
            let resultList= []
            for(const [key, value] of Object.entries(result)){
                    resultList.push({label : key, url : value})

            }
            setOpciones(resultList);
            console.log(resultList);
            setSelected(resultList[0].url);
        })
        .catch(error => {
            console.log(error);
            setError(true);
        })
    }, [])

    useEffect(() => {
        console.log(selected)
    }, [selected])
    
    const handleSumit = (e) => {
        e.preventDefault();
        let url = selected + id;
        axios.get(url)
        .then(response => response.data)
        .then(result => {
            setError(false);
            console.log(result);
            if (selected.includes("people")){
                console.log(result.homeworld);
                axios.get(result.homeworld)
                .then(resp => resp.data)
                .then(res => {
                    console.log(res);
                    result.planet = res;
                    console.log(result);
                })
                .catch(err => {
                    console.log(err);
                })
            }
        })
        .catch(error => {
            console.log(error);
            setError(true);
        })
        }
    return (
        <>
            <h1>Ruta Principal</h1>
            <form onSubmit={handleSumit}>
                <select selected={selected} onChange={(e) => setSelected(e.target.value)} >
                    {
                        opciones.map((item, index) => 
                        <option key={item.label + index} value={item.url}>{item.label}</option>)
                    }
                </select>
                <input type='number' value={id} onChange={(e) => setId(e.target.value) }/>
                <button type='submit'>Buscar</button>
            </form>
            {
                error?
                "Estos no son los droides que estabas buscando"
                :
                ""
            }
        </>
    )
}

export default Principal