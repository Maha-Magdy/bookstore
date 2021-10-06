/* eslint-disable no-unused-vars */

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Bookstore</h1>
      <nav>
        <ul>
          <li>
              <Link to='/'>BOOKS</Link>
              </li>
          <li>
              <Link to='/Categories'>CATEGORIES</Link>
              </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
