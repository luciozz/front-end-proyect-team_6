import Wapi from 'wpapi'

class Wordpress {
    constructor(props){
        this.http = props.wordpressHttp
        console.log(props)
        try{
            this.wp = new Wapi({ endpoint: this.http+'/wp-json'})
        }catch(e){
            throw('Wordpress constructor error '+e)
        }
    }

    getPost(){
        this.wp.posts().get().then( (data) => {
            console.log(data)
        })
    }
}

export default Wordpress
