import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;
  console.log(cat);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, [cat]);
  return (
    <div className="home">
      <div className="posts">
        {posts.map((item) => {
          return (
            <div className="post" key={item.id}>
              <div className="img">
                <img src={`./uploads/${item.img}`} alt="" />
              </div>
              <div className="content">
                <Link className="link" to={`posts/${item.id}`}>
                  <h1>{item.title}</h1>
                </Link>
                <p>{item.desc}</p>
                <Link className="link" to={`posts/${item.id}`}>
                  <button>Read More..</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
