import styles from "./styles.module.scss";
import Image from "next/image";
import displayImage from "../../public/images/content-2.png";

export default function Content1() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={displayImage} />
      </div>
      <div className={styles.content}>
        <h1>
          WE ARE CHANGING THE WORLD,
          ONE PANEL AT A TIME
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          <span>Eu sem </span>
          integer vitae justo eget. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Eu sem integer vitae justo eget.
        </p>
      </div>
    </div>
  );
}
