import Image from "next/image";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={["section", styles["hero-section"]].join(" ")}>
      <div className={styles["hero-image-container"]}>
        <Image
          className={styles["hero-image"]}
          src="/images/anthony-fb.jpg"
          alt="Anthony Dinino"
          layout="fill"
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
