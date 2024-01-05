import React from "react";
import Fossil from "./Fossil";
import SeaLevel from "./SeaLevel";
import Temperature from "./Temperature";
import Glaciers from "./Glaciers";

export default function Graph(props){

    return(
        <>
            {(props.category === "fossilt") && <Fossil />}
            {(props.category === "havsniva") && <SeaLevel />}
            {(props.category === "temperatur") && <Temperature />}
            {(props.category === "glaciar") && <Glaciers />}
        </>
    )


    
}