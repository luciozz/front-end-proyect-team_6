import Wapi from 'wpapi'
import React from 'react'

class Wordpress extends React.Component {
    dataWP = Array()
    ready = false

    constructor(props){
        this.http = props.wordpressHttp
        console.log(props)

        React.Children.forEach(this.props.children, child = {
            child.changeData()
        })
        try{
            this.wp = new Wapi({ endpoint: this.http+'/wp-json'})
        }catch(e){
            throw('Wordpress constructor error '+e)
        }
    }

    getPosts = async (aComponent /*: React.Component*/) => {
        await this.wp.posts().get()
            .then( (data) => {
                this.dataWP = data
                this.ready = true
                console.log(data)
            }
        )
    }

    getAPost(number){
        for(let i=10; i--; (i>0)&&(!this.ready)){
            setTimeout(() => { console.log('espera'+i+' - '+this.ready) }, 2000)
        }
        console.log('getApost '+number+' - '+this.ready)
        if(this.ready){
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
}

export default Wordpress
