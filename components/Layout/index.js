import styles from "./styles.module.scss"

const Layout = ({children}) => {
    return(
        <div className={styles.layout}>
        <div className={styles.children}>{children}</div>
    </div>
    )
}

export default Layout