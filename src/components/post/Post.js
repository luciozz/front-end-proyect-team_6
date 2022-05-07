import React from "react"
import { Accordion, Button, Card, Image, Table, ButtonGroup } from "react-bootstrap";
import ModalWindow from '../modalWindow/modalWindow';
import ImageLazy from "../imageLazy/imageLazy";
import parse from 'html-react-parser';

class APost extends React.Component {
    innerHtmlPost = Array()

    constructor(props){
        super(props)
        this.state = { aPostData: props.aPostData, fGetMedia: props.fMedia, mediaData: '', longImage: '', theLast: props.theLast}
        
    }

    componentDidMount(){
    /*    console.log(this.state.theLast)
        if(this.state.theLast){
            this.state.getNewPosts()
        }*/
    }

    getMediaData(){
        this.state.fGetMedia(this.state.aPostData.featured_media)
        .then((data) =>{
         this.setState({mediaData: data.media_details.sizes.medium.source_url, longImage: data.media_details.sizes.full.source_url})
        })
    }

    prepareInnerHTML(){
        this.innerHtmlPost = parse(this.state.aPostData.content.rendered, {
            replace: function(domNode) {
                if (domNode.attribs && domNode.attribs.class === 'wp-block-button') {
                    let child = domNode.childNodes[0]
                    let text = child.childNodes[0]
                    return(
                        <Button variant="dark" href={child.attribs.href}>{text.data}</Button>
                    )
                }
                if (domNode.attribs && domNode.attribs.class === 'wp-block-column'){
                    domNode.attribs.class="col"
                    return domNode
                    /*return(
                        <ButtonGroup className="mb-2">{domNode.childNodes}</ButtonGroup>
                    )*/
                }
                if (domNode.attribs && domNode.attribs.class === 'wp-block-columns') {
                    domNode.attribs.class="row"
                    return domNode
                }
                /*if (domNode.attribs && domNode.attribs.class === 'wp-container-1 wp-block-buttons') {}*/
            }
          });
          
    }

    render() {
        /*console.log(this.state.aPostData)
        console.log(this.state.aPostData.id)*/
        let content = this.state.aPostData.excerpt.rendered
        if(this.state.aPostData.id>0){
            return (
                <Accordion.Item eventKey={this.state.aPostData.id} onClick={() =>{
                    this.getMediaData()
                    this.prepareInnerHTML()
                    } }>
                    <Accordion.Header as={Card.Header} >
                        <Table >
                        <tbody>
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
                        </tbody>
                        </Table>
                    </Accordion.Header>
                    <Accordion.Body>
                            <ModalWindow img={this.state.longImage} title={this.state.aPostData.title.rendered} >
                                <ImageLazy fluid src={this.state.mediaData} alt={this.state.aPostData.title.rendered} />
                            </ModalWindow>
                            <h5 style={{marginBottom: "0"}}>{this.state.aPostData.title.rendered}</h5>
                            <div>{this.innerHtmlPost}</div>
                    </Accordion.Body>
                </Accordion.Item>
            )
        }else{
            return <div></div>
        }

    }
}

export default APost