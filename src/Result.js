import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Result (props) {
    if (props.info) {
        return(<div className="Results">
            <section>
            <h2>{props.info.word}</h2>
            {props.info.phonetics.map(function(phonetic, index){
                return(<div key={index}>
                    <Phonetics phonetic={phonetic} />
                </div>)
            })}
            </section>
            {props.info.meanings.map(function ( meaning, index) {
            return(<section key={index}>
            <Meaning meaning={meaning} />
            </section>)
            })}
        </div>)
    } else {
        return null;
    }
}