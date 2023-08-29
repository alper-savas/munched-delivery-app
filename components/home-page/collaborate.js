import React from "react";
import classes from "./collaborate.module.css";
import Image from "next/image";

const Collaborate = () => {
  return (
    <div className={classes.collab}>
      <h1 className={classes.header}>Work with Munched</h1>
      <div className={classes.grid}>
        <div className={classes.rider}>
          <Image src="/images/rider.svg" height={200} width={300} alt="Rider" />
          <div className={classes.info}>
            <h1>As a rider</h1>
            <p>
              Are you ready to hit the road and embark on an exciting journey
              with Munched? Whether you're an experienced rider or just love
              being on two wheels, this is your chance to be a part of something
              big.
            </p>
            <button className={classes.collaborateBtn}>Collaborate</button>
          </div>
        </div>
        <div className={classes.partner}>
          <Image
            src="/images/partner.svg"
            height={200}
            width={300}
            alt="Partner"
          />
          <div className={classes.info}>
            <h1>As a partner</h1>
            <p>
              Are you a restaurant owner with a passion for serving
              mouthwatering dishes to an ever-growing audience? Partner with us
              and unlock a world of opportunities to showcase your culinary
              artistry.
            </p>
            <button className={classes.collaborateBtn}>Collaborate</button>
          </div>
        </div>
        <div className={classes.colleague}>
          <Image
            src="/images/colleague.svg"
            height={200}
            width={300}
            alt="Colleague"
          />
          <div className={classes.info}>
            <h1>As a colleague</h1>
            <p>
              Join us at Munched and become a driving force in shaping the
              future. We're on the lookout for passionate colleagues who are
              ready to challenge conventions and create meaningful impact.
            </p>
            <button className={classes.collaborateBtn}>Collaborate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
