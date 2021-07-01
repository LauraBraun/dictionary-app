import React, { useState } from "react";
import axios from "axios";
import Result from "./Result"; 
import Photos from "./Photos";
import "./Search.css"

export default function Search () {
    const [word, setWord] = useState("");
    const [result, setResult] = useState(null);
    const [photos, setPhotos] = useState(null);

    function handleResponse (response) {
        setResult(response.data[0]);
    }

    function handlePexelResponse(response) {
        setPhotos(response.data.photos);
    }

    function handleSearch (event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f9170000100000145426b4d6890422e9ab296f9b6ee0d9a";
        let pexelsUrl =`https://api.pexels.com/v1/search?query=${word}&per_page=6`;
        let headers = {Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsUrl, { headers: headers }).then(handlePexelResponse);
    }

    function handleWord (event) {
        setWord(event.target.value);
    }
    
    return(<div className="Search">
        <section>
        <form onSubmit={handleSearch}>
            <input className="input" type="search" placeholder="Search for a word" onChange={handleWord} />
        </form>
        </section>
        <Result info={result}/>
        <Photos photos={photos} />
    </div>)
}