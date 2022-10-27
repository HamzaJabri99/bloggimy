import axios from "axios";
import moment from "moment";
import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Write = () => {
  const postState = useLocation().state;
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState(postState?.title || "");
  const [description, setDescription] = useState(postState?.description || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(postState?.category || "");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(`/upload`, formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      postState
        ? await axios.put(`/posts/${postState.id}`, {
            title,
            description,
            cat,
            imgUrl: file ? imgUrl : "",
          })
        : await axios.post(`/posts`, {
            title,
            description,
            imgUrl: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            cat,
          });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={description}
            onChange={setDescription}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="art"
              id="art"
              onChange={(e) => setCat(e.target.value)}
              checked={cat === "art"}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="science"
              id="science"
              onChange={(e) => setCat(e.target.value)}
              checked={cat === "science"}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="technology"
              id="technology"
              onChange={(e) => setCat(e.target.value)}
              checked={cat === "technology"}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="sport"
              id="sport"
              onChange={(e) => setCat(e.target.value)}
              checked={cat === "sport"}
            />
            <label htmlFor="sport">Sport</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="design"
              id="design"
              onChange={(e) => setCat(e.target.value)}
              checked={cat === "design"}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="food"
              id="food"
              onChange={(e) => setCat(e.target.value)}
              checked={cat === "food"}
            />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
