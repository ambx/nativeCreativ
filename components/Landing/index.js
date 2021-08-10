import styles from "./styles.module.scss";
import Navbar from "../Navbar";

export default function Landing(){
    return(
        <div className={styles.container}>
            <Navbar />
        </div>
    )
}