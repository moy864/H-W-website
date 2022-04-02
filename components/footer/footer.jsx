import styles from "./footer.module.css";

const Footer = () => {
    const date = new Date();
    return (
        <footer className={styles.footer}>
            <p> All content &copy; {date.getFullYear()}  Divyakshi Goyal and Molly Jensen</p>
        </footer>
    );
};

export default Footer;