import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers"
import React from "react"

class APost extends React.Component {

    constructor(props){
        super(props)
        this.state = { aPostData: props.aPostData, fGetMedia: props.fMedia, mediaData: ''}
    }

    componentDidMount(){
       this.state.fGetMedia(this.state.aPostData.featured_media)
       .then((data) =>{
        this.setState({mediaData: data.media_details.sizes.medium.source_url})
       })
    }

    render() {
        console.log(this.state.aPostData)
        console.log(this.state.aPostData.id)
        let content = this.state.aPostData.excerpt.rendered
        if(this.state.aPostData.id>0){
            return (
                <div className="apost">
                    <div className="imagepost">
                        <img src={this.state.mediaData} />
                    </div> 
                    <a href={this.state.aPostData.link}><h1>{this.state.aPostData.title.rendered}</h1></a>
                    <p>{this.state.aPostData.date}</p>
                    <div  dangerouslySetInnerHTML={{__html: content}}></div>
                </div>
            )
        }else{
            return <div></div>
        }
    }
}

export default APost