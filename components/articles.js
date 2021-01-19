import React from "react";
import Card from "./card";
import BigPost from "./bigPost";

const Articles = ({ articles }) => {
  const leftArticlesCount = 1;
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div>
      <div className="uk-child" data-uk-grid="true">
        <div className="width-100">
          {leftArticles.map((article, i) => {
            return (
              <BigPost article={article} key={`article__left__${article.slug}`} />
            );
          })}
        </div>
        {/*<div>*/}
          <div className="container home-container " >
            {rightArticles.map((article, i) => {
              return (
                <Card
                  article={article}
                  key={`article__left__${article.slug}`}
                />
              );
            })}
          </div>
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Articles;
