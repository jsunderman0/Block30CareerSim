import { Link } from 'react-router-dom';

const Posts = ({ posts, auth })=> {
  return (
    <ul>
      {
        posts.map( post => {
          
          return (
            <div key={ post._id } className="posts">
            <p  className={ post.author._id === auth._id ? 'mine': '' }>
              <Link to={`/posts/${post._id}`}>{ post.title }</Link> 
              <br/> Price: ${post.price}
               <br/> created by: {post.author.username}
              <br/> from: {post.location === "[On Request]" ? 'Location Unknown' : post.location}
            </p>
            </div>
          );
        })
      }
    </ul>
  );
};

export default Posts;

