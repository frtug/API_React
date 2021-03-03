import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

function RenderUser({user,onClick}){
    return(
        <div className="card">
        <h1>{user.name}</h1>
        <p className="title">{user.company.name}</p>
        <p>{user.website}</p>
        <Link to={`/post/${user.id}`}><p><button>Post Page</button></p></Link>
      </div>
);
} 


function Home(props){

    const RenderCard = props.Users.map((user) =>{
        return(
            <div key={user.id} className=" col-12 col-md-5 m-1">
               <RenderUser user = {user}/>
            </div>
        )
    })
    return (
        <div className="container">
           <div className="row align-item-start">
                   {RenderCard }
           </div>

        </div>
    )
}
export default Home;
