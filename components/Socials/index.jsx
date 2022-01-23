import { FaGithub, FaTwitter } from "react-icons/fa";
import styles from "./Socials.module.scss";

const Socials = () => {
  return (
    <div className={styles["social-links"]}>
      <a
        href="https://github.com/anthonydinino"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/AnthonyDeenino"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default Socials;
