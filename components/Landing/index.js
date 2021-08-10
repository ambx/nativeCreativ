import styles from "./styles.module.scss";
import Navbar from "../Navbar";
import Hero from "../Hero";

export default function Landing(){
    return(
        <div className={styles.container}>
            <Navbar />
            <Hero />
        </div>
    )
}