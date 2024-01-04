import React from "react";
import Fossil from "./Fossil";
import SeaLevel from "./SeaLevel";

export default function Graph(props){

    return(
        <>
            {(props.category === "temperatur") && <Fossil />}
            {(props.category === "havsniva") && <SeaLevel />}
        </>
    )


    
}