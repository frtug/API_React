import React,{Component} from 'react'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import {Switch,Route,Redirect} from 'react-router-dom';
import PostPage from  './Post'


class Main extends Component{
    constructor(props){
        super(props)

        this.state = {
            users :[],
        } 
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data)=>{
            this.setState({users : data})
            console.log(this.state.users)
        }) 
           
        .catch(console.log)
    }
    render(){
        const Post =({match}) =>{
            return(
                <PostPage 
                Postid = {parseInt(match.params.postId,10)}
                />
            )       
         }

        return (
            <div className = "main">
                <Header />
               <Switch>
                    <Route  exact path="/home" component = {() =><Home Users = {this.state.users}  />} />
                    <Route  path="/post" component = {PostPage} />
                    <Route  path="/post/:postId" component = {Post} />
                    <Redirect to="/home" />
                    </Switch>
               <Footer />
            </div>
        )
    }
}

export default Main
