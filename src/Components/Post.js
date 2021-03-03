import React,{useState, useEffect } from 'react'
import {Breadcrumb,BreadcrumbItem } from 'reactstrap';    
import { Link } from 'react-router-dom';
import Pagination from './Pagination'; 

const Post = () =>{

    const [posts,setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);
    
    useEffect(() =>{
        const fetchPost = async () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then((data)=>{
                setPosts(data) 
            })   
            .catch(console.log)
        }
    fetchPost();
    },[]);
    var indexOfLastPost = currentPage * postPerPage;
    var indexOfFirstPost = indexOfLastPost - postPerPage
    var currentPost = posts.slice(indexOfFirstPost,indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        console.log("I am Used",pageNumber);
    }

    const menu = currentPost.map((post) => {

        return (
            <div key={post.id} className="col-12 col-md-12 m-1" >
                    <h1 className="text-capitalize"> {post.title} </h1>
                    <p>{post.body}</p>
                    <br />
                    <hr/>

            </div>
        );
    });

    return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active> Post Page <span>{currentPage}</span></BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Post</h3>
                        <hr />
                    </div>
                    {menu}
                    <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
                    
                </div>
            </div>
    )
}
       
 



   


export default Post
