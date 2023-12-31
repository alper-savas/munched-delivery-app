import React from "react";
import classes from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.bigdot}></div>
      <div className={classes.icon}>
        <Link href="/" className={`${classes.link} ${classes.logoLink}`}>
          MUNCHED
        </Link>
        <Link href="/">
          <span className={`${classes.dot} ${classes.yel}`}></span>
        </Link>
      </div>
      <div className={classes.info}>
        <div className={classes.socialContainer}>
          <div className={classes.socials}>
            <Link href="https://www.facebook.com/">
              <Image
                className={classes.invert}
                src={"/images/logo-facebook.svg"}
                height={30}
                width={30}
                alt="Facebook"
              ></Image>
            </Link>
            <Link href="https://www.instagram.com/">
              <Image
                className={classes.invert}
                src={"/images/logo-instagram.svg"}
                height={30}
                width={30}
                alt="Instagram"
              ></Image>
            </Link>
            <Link href="https://twitter.com/?lang=en">
              <Image
                className={classes.invert}
                src={"/images/logo-twitter.svg"}
                height={30}
                width={30}
                alt="Twitter"
              ></Image>
            </Link>
            <Link href="https://www.linkedin.com/">
              <Image
                className={classes.invert}
                src={"/images/logo-linkedin.svg"}
                height={30}
                width={30}
                alt="Linkedin"
              ></Image>
            </Link>
          </div>
          <div className={classes.copyright}>
            © Copyright | Made by Alper Savas
          </div>
        </div>
        <div className={classes.others}>
          <Link href={"/"} className={classes.link}>
            Get help
          </Link>
          <Link href={"/"} className={classes.link}>
            <p>Partner with us</p>
          </Link>
          <Link href={"/"} className={classes.link}>
            <p>Add your restaurant</p>
          </Link>
          <Link href={"/"} className={classes.link}>
            <p>Sign up to deliver</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
