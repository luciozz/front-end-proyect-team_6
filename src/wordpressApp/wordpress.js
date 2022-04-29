import Wapi from 'wpapi'
import React from 'react'
import { APost } from '../components/post/Post';

class Wordpress extends React.Component {
    dataWP = Array()

    constructor(props){
        super(props);

        this.http = props.wordpressHttp
        console.log(props)

        this.state = {ready: false}

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
        await this.wp.posts().get()
            .then( (data) => {
                this.dataWP = data
                this.setState({ready: true})
                console.log(data)
            }
        )
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
        return (
            <APost aPostData={this.getAPost(4)}> </APost>
        )
    }
}

export default Wordpress
