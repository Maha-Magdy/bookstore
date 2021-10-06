export default function AddNewBookForm() {
  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Book title"></input>
        <select name="category">
          <option value="" disabled selected hidden>
            Category
          </option>
        </select>
        <button>ADD BOOK</button>
      </form>
    </div>
  );
}
