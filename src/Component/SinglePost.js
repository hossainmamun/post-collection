import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../scss/Main.scss";

const SinglePost = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const { postId } = useParams();

  const getSinglePost = async () => {
    try {
      setLoading(true);
      const getPost = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      if (getPost.status === 200) {
        setPost(getPost.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSinglePost();
  }, [postId]);
  console.log(post);
  return (
    <section id="single-post">
      {loading ? (
        <div className="loading">
          <h3 className="text-white">Loading...</h3>
        </div>
      ) : (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <h2>
                <span>post id: </span> {postId}
              </h2>
              <h2>
                <span>title: </span> {post.title}
              </h2>
              <p>
                <span>detail: </span>
                {post.body}
              </p>
              <Link to="/">
                <button className="btn">Back</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SinglePost;
