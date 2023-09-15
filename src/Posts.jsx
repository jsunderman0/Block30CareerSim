import { Link } from 'react-router-dom';

const Posts = ({ posts, auth })=> {
  return (
    <ul>
      {
        posts.map( post => {
          console.log(post)
          return (
            <div className="posts">
            <p key={ post._id } className={ post.author._id === auth._id ? 'mine': '' }>
              <Link className="selected" to={`/posts/${post._id}`}>{ post.title }</Link> 
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

