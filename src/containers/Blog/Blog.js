import React, {useState, useEffect} from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  function fetchPosts() {
    axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          setPosts(res.data.slice(0, 10))
        })
  }

  useEffect(() => {
    fetchPosts()
  })

  return (
      <div>
        <section className="Posts">
          {posts.map(post => <Post key={post.id} {...post} />)}
        </section>
        <section>
          <FullPost/>
        </section>
        <section>
          <NewPost/>
        </section>
      </div>
  );
}

export default Blog;
