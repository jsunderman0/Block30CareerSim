import { useState, useEffect } from 'react'

import { useParams, Link, useNavigate } from 'react-router-dom';

import axios from 'axios'

const Post = ({ posts, auth, removePost, updatePost })=> {
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
      { auth._id === post.author._id ? 
      <form>
        <p> Update post:</p>
        <input placeholder= {post.title} onChange={ev => setTitle(ev.target.value)} />
        <input placeholder= {post.description} onChange={ev => setDescription(ev.target.value)} />
        <input placeholder= {post.price} onChange={ev => setPrice(ev.target.value)} />
        <input placeholder={post.location} onChange={ev => setLocation(ev.target.value)}/>
        <button onClick={(e) => updatePost(post)}>Update</button>
      </form>
      :''}
    </div>
  );
};

export default Post;
