import styles from "./styles.module.scss";

export default function Content3() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
      </div>
      <div className={styles.content}>
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
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
