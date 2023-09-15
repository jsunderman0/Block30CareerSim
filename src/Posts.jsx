import { Link } from 'react-router-dom';

const Posts = ({ posts, auth })=> {
  return (
    <ul>
      {
        posts.map( post => {
          console.log(post)
          return (
            <li key={ post._id } className={ post.author._id === auth._id ? 'mine': ''}>
              <Link to={`/posts/${post._id}`}>{ post.title }</Link> 
              <br/> Price: ${ (post.price*1).toFixed(2) } 
               <br/> created by: {post.author.username}
              <br/> from: {post.location === "[On Request]" ? 'Location Unknown' : post.location}
            </li>
          );
        })
      }
    </ul>
  );
};

export default Posts;

