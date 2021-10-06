export default function Book(props) {
  return (
    <div>
      <div>
        <h6>{props.book.category}</h6>
        <h3>{props.book.title}</h3>
        <p>{props.book.writer}</p>
      </div>
      <div>
          <ul>
              <li>Remove</li>
              <li>Edit</li>
          </ul>
      </div>
    </div>
  );
}
