import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        const data = res.data;
        if (data.length > 6) data.length = 4;

        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  });
  return (
    <div className="menu">
      <h1>Other Posts You May Like</h1>

      {posts.map((item) => {
        return (
          <div className="post" key={item.id}>
            <img src={`../uploads/${item.img}`} alt="" />
            <Link className="link" to={`/posts/${item.id}`}>
              <h2>{item.title}</h2>
            </Link>
            <button>Read More..</button>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
