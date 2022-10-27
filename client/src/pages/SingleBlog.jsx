import React, { useContext, useEffect, useState } from "react";
import Menu from "../components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";
const SingleBlog = () => {
  const [post, setPost] = useState({});
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const naviagate = useNavigate();
  console.log(postId);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, [postId]);
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      naviagate("/");
    } catch (error) {
      console.log();
    }
  };
  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          {user.img ? (
            <img src={post.userImg} alt="" />
          ) : (
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt=""
            />
          )}

          <div className="info">
            <span>{post?.userid}</span>
            <p>Posted {moment(post?.date).fromNow()}</p>
          </div>
          {user.username === post.username && (
            <>
              <div className="edit">
                <Link className="link" to={"write/?edit=1"}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
              </div>
              <div className="delete">
                <Link className="link">
                  <FontAwesomeIcon icon={faTrashCan} onClick={handleDelete} />
                </Link>
              </div>
            </>
          )}
        </div>
        <h1>{post?.title}</h1>
        {post?.description}
      </div>
      <Menu />
    </div>
  );
};

export default SingleBlog;
