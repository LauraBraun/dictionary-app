import React, { useState } from "react";
import axios from "axios";
import Result from "./Result"; 

export default function Search () {
    const [word, setWord] = useState("");
    const [result, setResult] = useState(null);

    function handleResponse (response) {
        setResult(response.data[0]);
    }

    function handleSearch (event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleWord (event) {
        setWord(event.target.value);
    }
    
    return(<div className="Search">
        <form onSubmit={handleSearch}>
            <input type="search" placeholder="search for word" onChange={handleWord} />
            <input type="submit" value="Search"/>
        </form>
        <Result info={result}/>
    </div>)
}