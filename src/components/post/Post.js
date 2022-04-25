import React from "react"


export function APost(aPostData) {
    console.log(aPostData)
    return (
        <div className="apost"> 
            <a href={aPostData.link}><h1>{aPostData.title.rendered}</h1></a>
            <p>{aPostData.date}</p>
            <p>{aPostData.content.rendered}</p>
        </div>
    )
}