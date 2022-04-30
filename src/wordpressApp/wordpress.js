import Wapi from 'wpapi'
import React from 'react'
import APost from '../components/post/Post';
import { Accordion, Card, Image } from "react-bootstrap";

const postStatus = { pub: 'publish', pend: 'pending', borrador: 'draft'}
const categories = { sinCategoria: 1, 
    quienFue: 2, whoWas: 26, quiEtait: 27, quemEra: 28, 
    English: 7, Frances: 10, Portugues: 14, Español: 18,  
    textosEs: 4, textesFr: 123, textosPt: 125, textsEn: 34,
    otrosAutores: 5, otherAuthors: 36, outrosAutores: 38, autresAuteurs: 40,
    libros: 6, livresImprimes: 42, livrosImpressos: 44, printedBooks: 46,
    leer: 48, ler: 127, lire: 129, read: 131,
    menuSecundario: 3
    }

class Wordpress extends React.Component {
    dataWP = Array()

    constructor(props){
        super(props);

        this.http = props.wordpressHttp
        console.log(props)

        this.state = {ready: false, language: 'sp', category: 'textos-es'}

        try{
            this.wp = new Wapi({ endpoint: this.http+'/wp-json'})
        }catch(e){
            throw('Wordpress constructor error '+e)
        }
    }

    componentDidMount(){
        this.getPosts()
    }

    getPosts = async () => {
        const lang = (this.state.language=='sp')? '': this.state.language
        await this.wp.posts()
            .param({ status: postStatus.pub, order: 'asc', page: 2})
            .category(categories.textosEs)
            .get()
            .then( (data) => {
                this.dataWP = data
                this.setState({ready: true})
                console.log(data)
            }
        )
    }

    getMedia = async (idMedia) => {
        let mediaJson
        console.log('Media: '+idMedia)
        if(idMedia>0){
            await this.wp.media()
                .id(idMedia)
                .get()
                .then( (data) => {
                    mediaJson = data
                }
            )
            console.log(mediaJson)
            return mediaJson
        }else return null
    }

    getAPost(number){
        console.log('getApost '+number+' - '+this.state.ready)
        if(this.state.ready){
            console.log(this.dataWP[number])
            return this.dataWP[number]
        }else return (
            {
                "id": 0,
                "date": "2000-01-01T01:00:00",
                "guid": {
                  "rendered": ""
                },
                "modified": "2000-01-01T01:00:00",
                "slug": "",
                "status": "",
                "type": "post",
                "link": "",
                "title": {
                  "rendered": ""
                },
                "content": {
                  "rendered": ""
                }
            }
        )
    }

    render(){
        let elements = this.dataWP.map((elem) => {
            return <APost aPostData={elem} fMedia={this.getMedia}> </APost>
        })
          
        return (
            <Accordion style={{width: "90%", margin: "0px auto 40px", cursor: "pointer"}}>
                {elements}
            </Accordion>
        )
    }
}

export default Wordpress
