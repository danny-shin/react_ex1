import { useState } from 'react';

import Articles from '../Articles/Articles.jsx';
import InfoSidebar from '../InfoSidebar/InfoSidebar.jsx';
import BookmarkContext from '../../store/bookmark-context.jsx';

function News() {
  console.log('News rendered');
  const [savedArticles, setSavedArticles] = useState([]);

  function addArticle(article) {
    console.log('addArticle called with:', article);
    setSavedArticles((prevSavedArticles) => [...prevSavedArticles, article]);
  }

  function removeArticle(articleId) {
    console.log('removeArticle called with id:', articleId);
    setSavedArticles((prevSavedArticles) =>
      prevSavedArticles.filter((article) => article.id !== articleId)
    );
  }

  const bookmarkCtxValue = {
    bookmarkedArticles: savedArticles,
    bookmarkArticle: addArticle,
    unbookmarkArticle: removeArticle,
  };

  return (
    <BookmarkContext value={bookmarkCtxValue}>
      <Articles />
      <InfoSidebar />
    </BookmarkContext>
  );
}

export default News;
