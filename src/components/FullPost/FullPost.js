import React, {useEffect} from 'react';

import './FullPost.css';
import axios from "axios";

const FullPost = (props) => {
  useEffect(() => {
    fetchPost(props.id)
  });

  function fetchPost(id) {
    if (!id)
      return;

    if (id) {
      axios
          .get('https://jsonplaceholder.typicode.com/posts/' + id)
          .then(res => {
            console.log(res.data)
          })
    }
  }

  let post = <p>Please select a Post!</p>;
    post = (
        <div className="FullPost">
          <h1>Title</h1>
          <p>Content</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>

    );

    return post;
}

export default React.memo(FullPost, (prevProps, nextProps) => prevProps.id === nextProps.id) ;
