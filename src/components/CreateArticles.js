import axios from "axios";
import React, { useState } from "react";

const CreateArticles = () => {
  const [article, setArticle] = useState({});

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
    console.log(article);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:5000/articles/create", {
      data: article,
    });
  };
  return (
    <div>
      <form action="submit" onChange={handleChange} onSubmit={onSubmit}>
        <input type="text" placeholder="Title" name="title" />
        <br />
        <br />
        <input type="text" placeholder="Category" name="category" />
        <br />
        <br />
        <input type="text" placeholder="Description" name="description" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateArticles;
