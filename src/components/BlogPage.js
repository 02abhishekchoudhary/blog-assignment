import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const editor = useRef(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = (e) => {
    e.preDefault();

    if (!title || !description || !content) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Form submitted successfully");
    setTitle("");
    setDescription("");
    setContent("");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <ToastContainer />
          <h1>Create Blog</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group col-md-6">
              <label htmlFor="title">Title</label>
              <br />
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter Title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <br />
              <input
                type="text"
                className="form-control"
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Enter Description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <br />
              <JoditEditor
                className="JoditEditor"
                ref={editor}
                value={content}
                onChange={handleContentChange}
              />
            </div>
            <br />
            <div className="form-group button-div">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
