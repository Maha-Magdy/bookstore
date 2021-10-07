/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.panel_bg}>
      <h1 className='blue_color'>Bookstore</h1>
      <nav>
        <ul className='d-flex'>
          <li>
              <Link to='/' className='grey_color'>BOOKS</Link>
              </li>
          <li>
              <Link to='/Categories' className='grey_color'>CATEGORIES</Link>
              </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
