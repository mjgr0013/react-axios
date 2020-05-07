import React, {useState, useEffect, useMemo} from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const postsIds = useMemo(() => posts.map(post => post.id), [posts])

  function fetchPosts() {
    axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          setPosts(res.data.slice(0, 4))
        })
  }

  useEffect(() => {
    fetchPosts();
  }, [postsIds])

  const clickPostHandler = (e) => {
    setSelectedPost(e.target.dataset.id)
  }

  return (
      <div>
        <section className="Posts">
          {posts.map(post => <Post clickHandler={clickPostHandler} key={post.id} {...post} />)}
        </section>
        <section>
          <FullPost id={selectedPost}/>
        </section>
        <section>
          <NewPost/>
        </section>
      </div>
  );
}

export default Blog;
