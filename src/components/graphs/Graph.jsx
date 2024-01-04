import React from "react";
import Fossil from "./Fossil";

export default function Graph(props){

    return(
        <>
            {(props.category === "temperatur") && <Fossil />}
        </>
    )


    
}