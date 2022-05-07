import React from "react"
import { Image, Spinner } from "react-bootstrap"

export default function ImageLazy(props){
    const [loading, setLoading] = React.useState(true)
    return(
        <>
            {loading?(<div className="text-center"><Spinner animation="border" role="status"/></div>):null}
            <Image {...props} onLoad={()=>{setLoading(false); if(props.onLoad) props.onLoad()}}></Image>
        </>
    )
}