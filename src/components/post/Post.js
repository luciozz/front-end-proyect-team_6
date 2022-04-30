import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers"
import React from "react"
import { Accordion, Card, Image, Table } from "react-bootstrap";

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
                <Accordion.Item eventKey={this.state.aPostData.id}>
                    <Accordion.Header as={Card.Header} >
                        <Table>
                            <tr>
                                <th>
                                    {this.state.aPostData.title.rendered}
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <div dangerouslySetInnerHTML={{__html: this.state.aPostData.excerpt.rendered}}></div>
                                </td>
                            </tr>
                        </Table>
                    </Accordion.Header>
                    <Accordion.Body>
                            <Image fluid src={this.state.mediaData} alt={this.state.aPostData.title.rendered} />
                            <h5 style={{marginBottom: "0"}}>{this.state.aPostData.title.rendered}</h5>
                            <div dangerouslySetInnerHTML={{__html: this.state.aPostData.content.rendered}}></div>
                    </Accordion.Body>
                </Accordion.Item>
            )
        }else{
            return <div></div>
        }

    }
}

export default APost