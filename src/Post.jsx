import { useState, useEffect } from 'react'

import { useParams, Link, useNavigate } from 'react-router-dom';

import axios from 'axios'

const Post = ({ posts, auth, removePost })=> {
  const { id } = useParams();
  const post = posts.find(post => post._id === id);
  const navigate = useNavigate()


  if(!post){
    return null;
  }
  return (
    <div>
      <h1>{ post.title } created by: {post.author.username}</h1>
      <p> Description: {post.description} </p>
      { auth._id === post.author._id ? <button onClick={(e) => removePost(post)}>remove post</button>: ''}
    </div>
  );
};

export default Post;
