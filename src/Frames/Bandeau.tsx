import React from "react";
// React-fast-marquee
import Marquee from "react-fast-marquee";

//Assets
import bone from "../Assets/Icons/bone.png";
import paw from "../Assets/Icons/paw.png";
import europe1 from "../Assets/Logos/logo_europe1.svg";
import m6 from "../Assets/Logos/logo_m6.svg";
import rtl from "../Assets/Logos/logo_rtl.svg";
import c8 from "../Assets/Logos/logo-c8.svg";
import echos from "../Assets/Logos/logo_les_echos.svg";
import elle from "../Assets/Logos/logo-elle.svg";
import gala from "../Assets/Logos/logo-gala.svg";
import maddyness from "../Assets/Logos/maddyness-white.svg";

const sponsors = [europe1, m6, rtl, c8, echos, elle, gala, maddyness];

export default function Bandeau() {
  return (
    <div id="Bandeau" className="flex align-center">
      <Marquee gradient={false} speed={50}>
        {sponsors.map((sponsor, idx) => (
          <div key={idx} className="flex align-center">
            <div className="icon ">
              <img
                src={idx % 2 ? bone : paw}
                className="img-fluid"
                alt="boneIcon"
              />
            </div>
            <div className="sponsor">
              <img src={sponsor} className="" />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
