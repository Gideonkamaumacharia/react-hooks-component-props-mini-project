import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header"
import About from "../components/About"
import ArticleList from '../components/ArticleList';
//import Article from "../components/Article"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About src={blogData.image} />
      <ArticleList posts={blogData} />
    </div>
  );
}

export default App;
