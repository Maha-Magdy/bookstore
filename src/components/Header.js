/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.panel_bg}>
      <div>
        <h1 className="blue_color">Bookstore</h1>
        <nav>
          <ul className="d-flex">
            <li>
              <Link to="/" className="grey_color">
                BOOKS
              </Link>
            </li>
            <li>
              <Link to="/Categories" className="grey_color">
                CATEGORIES
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.profileIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.2"
          baseProfile="tiny-ps"
          viewBox="0 0 512 407"
          width="25"
          height="25"
        >
          <title>001-man-shape</title>
          <defs>
            <image
              width="464"
              height="407"
              id="img1"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdAAAAGXAQMAAAA5zpOXAAAAAXNSR0IB2cksfwAAAAZQTFRF////ApD/CgVihwAAAAJ0Uk5TAP9bkSK1AAAEDElEQVR4nO3cQXLbMAwF0GS6yNJH4FF4NPpoPoqPkKUXmahRXY0kEhA/8CemaIvbzpuAAChZKqm3N3V8DD/jqv+7Pv4M/8bFQYf/wy5PE/10/1H7nz3N1Ppn00y/bfJ9WIyziZ6W1BZxWlJTxKt4bRF/rOnVQE9raplsXNMvAx2ygcs/Ob3A9COnV5iGnN5gGnOK5ymXeJ7eS3oGaZFgPMVFgvEUFwnGU1wkGE9xKim6ZEuJVkeoDVodoTZodYTaoNU5SRS7UASJYoWNEsUKS9AkUawnJIn1hNgRWE8QVGwmrJ3EZsLaiaBiH2KdGGSKdCJBo0yRTiRokinSxLKEmthPlRZGmrgNVRYOsnQIqiwcZOkQVFlzyKprQ4NG6wu2DY0ara/17mjSaP3i9EpUk8DV9KBPSdW7Vf1+dVCIdtcSB90zTZrc6z3noBCNGt3rT65XokGje/3t3x3t7nGwO9rmMf+VaJvXN929NGrzDiZq9FdfLmjyeKZbDrUP653YHVUXTn3pHPSgu6DdLbqDQrS7G8fxWg6jSZNP+EojaHSvz69tnjiI/6ZmNgJEmSLbD4hdGsSOFGL3DbPnR8wTttMoSBTbGkVQYi9XG0rsW+uOEtv7uqPELsjuKLFZtD+aSonuqSVoLCm6CbgNDSVFNzy3ocI1HD0sQFBiSzlBiT3wBCU27RNHBRiacokfeIk5xY9FEDTkFD/HUTQxflSGOHhCHHchaNGJZ5gSR3vydrKcnsp6wnIWKesJvCMoSpy7Ik57ETRrp8tjKHEojqBZE1vkS9G0lLbjmQc9aO90WI2DPgltc8/pjrb5QUDQNr+b2pzNJ2hY0wf9HiZoXFPLb/+0ppbLP0GHbDyEEs90bR5Ciadm4lmdoCGnD/lIRMop3om5fOLvSxCvIIuyPuTTFKXc9/cl2nwkIkn0tz/X0ObDCWKWsDyJWYLyRGw/IPZLKFNFJqtMFZgssUmJ2KOnTrU+WXWq1cluTLU2WXUDzTi2l3vcotuXxS25vWY3SjOOqzfe7Yi35VbElXi3Ig41qjdUTeoRb2xjnMbFG68ecV1qEQPxahED8WoRJ4SKixaKV454c6nOQ1q0ULxixGC8UsRgvFLEEaXlokVl2VDVpTqPa0YDTvOGSjjNyrN51c/H2TvVfLLRQtflSRa6mqxpquvJmqa6nmyw0WVlk40uJmuc6nKyxqkuJxusdJ5stNK5KaxyXrPmLM15MmdpzhN8RZvHpzdLc57scsqTI0tTnhxZmvLkyNKUp+ChN2+CpxR75D3FrgTfUwzfWNfj4q3NvTqu2tyrE3z05q3NvTrJR7/dZR0L6yzrWFhnWcfCOss6Fpagzo4YeyJ46Y2h0Uu/GJq89LsR9cqf/u+N/gWznPDYSQW4UAAAAABJRU5ErkJggg=="
            />
          </defs>
          <use id="Background" href="#img1" x="24" y="0" />
        </svg>
      </div>
    </header>
  );
}

export default Header;
