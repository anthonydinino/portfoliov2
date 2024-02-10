import Image from "next/image";
import { useEffect } from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  useEffect(() => {
    let burgerIcon = document.querySelector("#burger-icon");
    let navbarMenu = document.querySelector("#nav-links");

    burgerIcon.addEventListener("click", () => {
      navbarMenu.classList.toggle("is-active");
    });
  }, []);

  return (
    <nav className="navbar is-black" role="navigation">
      <div className="container">
        <div className={["navbar-brand p-2", styles["navbar-brand"]].join(" ")}>
          <a href="./">
            <Image
              src="/images/logo.png"
              alt="me"
              height={70}
              width={70}
            ></Image>
          </a>
          <h2 className={["has-text-light", styles.logotext].join(" ")}>
            Anthony Dinino
          </h2>
          <div className="navbar-burger" id="burger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          className={["navbar-menu", styles["navbar-menu"]].join(" ")}
          id="nav-links"
        >
          <div className="navbar-end">
            <a className="navbar-item" href="mailto:adinino1996@gmail.com">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
