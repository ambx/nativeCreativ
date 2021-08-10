import styles from "./styles.module.scss";
import Image from "next/image";
import HeroImage from "../../public/images/hero.svg";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          Lorem ipsum <span className={styles.boldText}>dolor sit</span> amet,
          consectetur ore
        </h1>
        <br />
        <p className={styles.supportText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <button>Lorem ipsum</button>
      </div>
      <div className={styles.image}>
        <Image src={HeroImage} alt="" />
      </div>
    </div>
  );
}
