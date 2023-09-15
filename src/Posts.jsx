import { Link } from 'react-router-dom';

const Posts = ({ posts, auth })=> {
  return (
    <ul>
      {
        posts.map( post => {
          return (
            <li key={ post._id } className={ post.author._id === auth._id ? 'mine': ''}>
              <Link to={`/posts/${post._id}`}>{ post.title }</Link> ${ (post.price*1).toFixed(2) } created by:
            </li>
          );
        })
      }
    </ul>
  );
};

export default Posts;

