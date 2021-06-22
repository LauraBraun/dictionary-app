import React, { useState } from "react";

export default function Search () {
    const [word, setWord] = useState("");

    function handleSearch (event) {
        event.preventDefault();
        alert(word);
    }

    function handleWord (event) {
        setWord(event.target.value);
    }
    
    return(<div className="Search">
        <form onSubmit={handleSearch}>
            <input type="search" placeholder="search for word" onChange={handleWord} />
            <input type="submit" value="Search"/>

        </form>
    </div>)
}