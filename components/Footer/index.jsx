import styles from "./Footer.module.scss";
import Socials from "../Socials";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Socials />
        <p style={{ color: "white" }}>
          &copy; {new Date().getFullYear()} Anthony Dinino{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
