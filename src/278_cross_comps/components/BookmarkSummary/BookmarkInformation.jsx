import BookmarkSummary from './BookmarkSummary.jsx';

function BookmarkInformation() {
  console.log('BookmarkInformation rendered');
  return (
    <section>
      <header>
        <h2>Your Bookmarks</h2>
      </header>
      <BookmarkSummary />
    </section>
  );
}

export default BookmarkInformation;
