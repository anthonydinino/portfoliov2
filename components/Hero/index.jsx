import Image from "next/image";
import styles from "./Hero.module.scss";
import { MdFileDownload } from "react-icons/md";

const Hero = () => {
  return (
    <div className={["section", styles["hero-section"]].join(" ")}>
      <h6>Work In Progress</h6>
      <div className={styles["hero-image-container"]}>
        <Image
          className={styles["hero-image"]}
          src="/images/anthony-fb.jpg"
          alt="Anthony Dinino"
          layout="fill"
        ></Image>
      </div>
      <h1 className="title">Download my Resume</h1>
      <a href="Anthony-Dinino.pdf" download>
        <MdFileDownload size={40} />
      </a>
    </div>
  );
};

export default Hero;
