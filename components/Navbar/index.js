import Link from "next/link";
import styles from "./styles.module.scss";

export default function navbar(props) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a className={styles.active}>
            {/* <li className={styles.logoSvg}>
            <svg>
              <circle
                cx="10"
                cy="10"
                r="10"
              />
            </svg>
          </li> */}
            <li className={styles.logoName}>Brad Renewable</li>
          </a>
        </Link>
      </div>
      <div className={styles.navOptions}>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </div>
    </nav>
  );
}
