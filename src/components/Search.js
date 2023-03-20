import React from "react";
import { useRef, useEffect } from "react";


export function Search ({searchVal, updateSearchVal}) {

    const inputRef = useRef()


    useEffect (() => {
        inputRef.current.focus()
    }, [])

    function handleChange(event) {
        updateSearchVal(event.target.value)
        }


    return(
        <header>
        <input type="text" placeholder="Type suttin here..." value = {searchVal} ref={inputRef} onChange={handleChange}/>
        <p> State value : {searchVal} </p>
        </header>
    )
}