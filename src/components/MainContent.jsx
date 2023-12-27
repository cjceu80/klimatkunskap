import React from "react";
import { useLoaderData } from "react-router-dom";
import ContentPortal from "./ContentPortal";
import Information from "./Information";
import { getPageData } from "../utils/pageData";

export function loader({request}){
    

    if (request.url.indexOf("kategori") < 0 || request.url.substring(request.url.indexOf("=") +1) == "")
        return null;

    return getPageData(request.url.substring(request.url.indexOf("=") + 1));
}

export default function MainContent() {
    const loaderData = useLoaderData();

    return (
        <>
            {!loaderData ? <ContentPortal /> : <Information data={loaderData}/>}
        </>
    );
}