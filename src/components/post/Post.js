import React from "react"


export function APost(props) {
    console.log(props)
    console.log(props.aPostData.id)
    let content = props.aPostData.content.rendered
    if(props.aPostData.id>0){
        return (
            <div className="apost"> 
                <a href={props.aPostData.link}><h1>{props.aPostData.title.rendered}</h1></a>
                <p>{props.aPostData.date}</p>
                <div  dangerouslySetInnerHTML={{__html: content}}></div>
            </div>
        )
    }else{
        return <div></div>
    }
}