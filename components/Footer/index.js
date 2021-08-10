import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socials}>
          <p>
            <strong>Reach out to us</strong>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
          </p>
        </div>
        <div className={styles.contact}>
          <p>
            <strong>Brad Renewable Energy</strong>
            <br />
            Koramangala Club Road, <br />
            Koramangala, Bengaluru
          </p>
        </div>
      </div>
      <br />
      <p className={styles.copyright}>
        brad renewable energy © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
