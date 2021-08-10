import styles from "./styles.module.scss";
import Image from "next/image";
import displayImage from "../../public/images/content-2.png";

export default function Content2() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>YOU SHOULD SWITCH TO US TODAY!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <span>Eu sem </span>
            integer vitae justo eget. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Eu sem integer vitae justo eget.
          </p>
        </div>
        <div className={styles.image}>
          <Image src={displayImage} />
        </div>
      </div>
      <div className={styles.stats}>
        <p>Lorem ipsum dolor sit amet </p>
        <div className={styles.statscolumn}>
          <li>
            <span>-70%</span>
            <br />
            water use
          </li>
          <li>
            <span>-300%</span>
            <br />
            man power
          </li>
          <li>
            <span>+25%</span>
            <br />
            efficiency
          </li>
        </div>
      </div>
    </div>
  );
}
