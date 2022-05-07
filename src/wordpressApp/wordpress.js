import Wapi from 'wpapi'
import React from 'react'
																							 
import APost from '../components/post/Post';
import Food from '../components/food/food.js';
<<<<<<< HEAD
import { Accordion, Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import ModalWindow from '../components/modalWindow/modalWindow';
=======
import { Accordion, Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
>>>>>>> 7eea56b13a28c8ff67b4b91be621fc99a9a00165

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
const languages = { sp: 'Español', en: 'English', fr: 'Français', pt: 'Português'}
const contact = { sp: 'Contacto', en: 'Contact', fr: 'Contact', pt: 'Contacto'}
const printedBooks = { sp: 'Libros Impresos', en: 'Printed Books', fr: 'Livres Imprimés', pt: 'Livros Impressos'}
const otherAuthors = { sp: 'Otros Autores', en: 'Other Authors', fr: 'Autres auteurs', pt: 'Outros Autores'}
const works = { sp: 'Textos', en: 'Works', fr: 'Textes', pt: 'Textos'}
const maxRequestCyclic = 100

class Wordpress extends React.Component {
    dataWP = Array()
    postsElementsToShow = Array()
    readyToGetPosts = true

    constructor(props){
        super(props);

        this.http = props.wordpressHttp
        /*console.log(props)*/

        this.state = {ready: false, language: 'sp', category: 'textos-es', lastPage: 1}

        try{
            this.wp = new Wapi({ endpoint: this.http+'/wp-json'})
        }catch(e){
            throw(e)
        }
    }

    getPosts = async (thePage, force = false) => {
        if(this.readyToGetPosts || force){
            this.readyToGetPosts = false
            await this.wp.posts()
                .param({ status: postStatus.pub, order: 'asc', page: thePage})
                .category(categories.textosEs)
                .get()
                .then( (data) => {
                    if(this.dataWP.length===0){
                        this.dataWP = data
                    /* console.log('largo=0')*/
                    }else{
                        this.dataWP = this.dataWP.concat(data) 
                    }
                    this.preparePostsToShow()
                    this.setState({ready: true})
                    /*console.log('readyToGetPosts', this.readyToGetPosts)*/
                }
            ).catch(function(err) {
                console.log('Error en getPosts')
            })
        }else{
            console.log('esperando datos')
        }
    }

    getNewPostsAndAdd(){
        if(this.readyToGetPosts){
            /*console.log('readyToGetPosts', this.readyToGetPosts, ' - ', this.state.lastPage)*/
            try{
                if (this.state.lastPage<maxRequestCyclic){
                    this.state.lastPage = ++this.state.lastPage
                    this.getPosts(this.state.lastPage)
                }                
            }catch(e){
                console.log('Error en NewPosts')
                console.log(e)
            }
        }
<<<<<<< HEAD
											
		  
=======
>>>>>>> 7eea56b13a28c8ff67b4b91be621fc99a9a00165
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
        /*console.log('getApost '+number+' - '+this.state.ready)*/
        if(this.readyToGetPosts){
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

    preparePostsToShow(){
        this.postsElementsToShow = this.dataWP.map((elem, i, list) => {
            return (
                <APost key={elem.id} aPostData={elem} fMedia={this.getMedia} theLast={((i+1)===list.length)?true:false} > </APost>
            )
        })
        this.postsElementsToShow = this.postsElementsToShow.concat(<Food key='Food_2022' onVisible={this.getNewPostsAndAdd.bind(this)} ></Food>)
        this.readyToGetPosts = true
    }

    componentDidMount(){
<<<<<<< HEAD
			
									   
														   
												  
			 
        this.getPosts(this.lastPage) 
				  
											
						  
		 
    }

    render(){
														   
					
																																								  
			 
		  
=======
        this.getPosts(this.lastPage) 
    }

    render(){
>>>>>>> 7eea56b13a28c8ff67b4b91be621fc99a9a00165
        return (
            <>
            <ModalWindow>
                <Button>Hola</Button>
            </ModalWindow>
            <Navbar bg="dark" variant="dark"  expand="lg" toggle="collapse" sticky="top" >
                <Container>
                    <Navbar.Brand href="#home">Nahuel Moreno</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#works">{works[this.state.language]}</Nav.Link>
                        <Nav.Link href="#otherAuthors">{otherAuthors[this.state.language]}</Nav.Link>
                        <Nav.Link href="#printedBooks">{printedBooks[this.state.language]}</Nav.Link>
                        <Nav.Link href="#contact">{contact[this.state.language]}</Nav.Link>
                        <NavDropdown title={languages[this.state.language]} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Español</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Français</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Português</NavDropdown.Item>        
                        </NavDropdown>
                        <Navbar.Brand >
                        </Navbar.Brand>                    
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
<<<<<<< HEAD
																																			   
            <Accordion style={{width: "90%", margin: "0px auto 40px", cursor: "pointer"}} defaultActiveKey="0">
                {this.postsElementsToShow}
            </Accordion>
							
=======
            <Accordion style={{width: "90%", margin: "0px auto 40px", cursor: "pointer"}} defaultActiveKey="0">
                {this.postsElementsToShow}
            </Accordion>
>>>>>>> 7eea56b13a28c8ff67b4b91be621fc99a9a00165
            </>
        )
    }
}

export default Wordpress
