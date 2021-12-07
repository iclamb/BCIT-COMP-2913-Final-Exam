import "./styles.css";
import BookDetail from "./BookDetail";

export default function BookSelector({books, setCurrent}) {
  return (
    <div>
      <h3>Select an Book</h3>

      {books.map((book) => (
        <BookDetail name={book.name} coverImg={book.coverImg} author={book.author} coauthor={book.coAuthor} setCurrent={() => setCurrent(book.id)} />
      ))}
    </div>
  );
}
