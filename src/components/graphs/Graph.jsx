import React from "react";
import Fossil from "./Fossil";
import SeaLevel from "./SeaLevel";
import Temperature from "./Temperature";

export default function Graph(props){

    return(
        <>
            {(props.category === "fossil") && <Fossil />}
            {(props.category === "havsniva") && <SeaLevel />}
            {(props.category === "temperatur") && <Temperature />}
        </>
    )


    
}