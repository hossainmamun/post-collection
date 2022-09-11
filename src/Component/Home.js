import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../scss/Main.scss";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const getPost = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (getPost.status === 200) {
        setPosts(getPost.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <section id="post-list">
        <div className="container">
          <div className="heading text-center text-capitalize py-5">
            <h1>posts list</h1>
          </div>
          <div className="row g-4">
            {posts.map((item) => (
              <div className="col-md-3" key={item.id}>
                <div className="card">
                  <h2>{item.title.slice(0, 30)}</h2>
                  <Link to={`/post/${item.id}`}>
                    <button className="btn">detail</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
