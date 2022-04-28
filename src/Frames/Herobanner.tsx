import React, { useRef, useEffect, useLayoutEffect } from "react";
// Gsap
import gsap, { Power3 } from "gsap";
// Assets
import arrow from "../Assets/Icons/arrow.svg";
import googleLogo from "../Assets/Logos/googleLogo.svg";
import star from "../Assets/Icons/star.svg";
import dogCatIcon from "../Assets/Icons/hero-dog.png";

export default function Herobanner() {
  const chienRef = useRef<HTMLSpanElement>(null);
  const chatRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      delay: 1,
      defaults: { duration: 0.7, ease: Power3.easeOut },
    });

    tl.set(chatRef.current, { opacity: 0 });

    tl.to(chienRef.current, {
      yPercent: 10,
      opacity: 1,
    });
    tl.to(
      chienRef.current,
      {
        yPercent: 20,
        opacity: 0,
      },
      ">+=1"
    );
    tl.to(chatRef.current, {
      yPercent: 10,
      opacity: 1,
    });
    tl.to(
      chatRef.current,
      {
        yPercent: 20,
        opacity: 0,
      },
      ">+=1"
    );
  }, []);
  return (
    <div id="Herobanner" className="flex-column justify-center relative">
      <div className="main">
        <h1>
          L'assurance santé <br /> des{" "}
          <span className="relative animContainer">
            <span className="chien" ref={chienRef}>
              chiens
            </span>
            <span className="chats absolute" ref={chatRef}>
              chats
            </span>
          </span>{" "}
          <span className="wBackground">réinventée.</span>
        </h1>
        <p>Vos frais vétérinaires remboursés en 48h</p>
        <p>Sans franchise, ni autre frais cachés</p>
        <p>Et des conseils vétérinaires en ligne et en illimité ! </p>

        <form className="flex align-center">
          <input
            type="text"
            id="petName"
            name="petName"
            placeholder="Comment s'appelle votre compagnon ?"
          />
          <label htmlFor="petName" className="flex align-center justify-center">
            Mon devis en 1 min
            <span className="arrow">
              <img src={arrow} className="img-fluid" alt="arrow" />
            </span>
          </label>
        </form>
      </div>
      <div className="footer absolute flex justify-between">
        <div className="flex align-end">
          <div className="avisGoogle habillage flex justify-center align-center">
            <div className="googleLogo">
              <img src={googleLogo} alt="google Logo" className="img-fluid" />
            </div>
            <p>
              250+ avis sur <span> Google - 4,8</span>
            </p>
            <div className="star first">
              <img src={star} alt="star" className="img-fluid" />
            </div>
            <div className="star">
              <img src={star} alt="star" className="img-fluid" />
            </div>
            <div className="star">
              <img src={star} alt="star" className="img-fluid" />
            </div>
            <div className="star">
              <img src={star} alt="star" className="img-fluid" />
            </div>
            <div className="star">
              <img src={star} alt="star" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="infos habillage flex justify-center align-center">
          <div className="dogCatIcon">
            <img
              src={dogCatIcon}
              alt="dog/cat Icon"
              className="img-fluid"
            ></img>
          </div>
          <p>
            <span className="bold">
              {" "}
              Déjà <span className="big">+10 000</span> compagnons
            </span>{" "}
            <br /> protégés avec dalma
          </p>
        </div>
      </div>
    </div>
  );
}
