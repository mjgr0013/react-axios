import React from 'react';

import './Post.css';

const post = (props) => (
    <article data-id={props.id} onClick={props.clickHandler} className="Post">
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">Author</div>
      </div>
    </article>
);

export default post;
