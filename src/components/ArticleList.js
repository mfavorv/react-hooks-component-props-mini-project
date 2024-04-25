import React from "react";
import Article from "./Article";

function ArticleList({posts}){
const postsMade = posts.map((post) => (
    <Article 
    key={post.id}
    title={post.title}
    date={post.date}
    preview={post.preview}
    minutes={post.minutes}
    />
))

return(
    <main>
        {postsMade}
    </main>
)
}

export default ArticleList;