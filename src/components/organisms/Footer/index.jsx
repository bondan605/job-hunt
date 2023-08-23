import React from "react";

import "./style.css";
import { Button, Input } from "antd";

const images = [
  "/images/Facebook.png",
  "/images/Instagram.png",
  "/images/Twittericon.png",
  "/images/LinkedIn.png",
  "/images/Dribbble.png",
];

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        <div className="section-1">
          <img src="/images/logo2.png" alt="/images/Logo2.png" />
          <div className="description">
            Great platform for the job seeker that <br /> passionate about
            startups. Find your dream job <br /> easier.
          </div>
        </div>
        <div className="section-nav">
          <div className="title">About</div>
          <ul>
            <li>Companies</li>
            <li>Pricing</li>
            <li>Terms</li>
            <li>Advice</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="section-nav">
          <div className="title">Resources</div>
          <ul>
            <li>Help Docs</li>
            <li>Guide</li>
            <li>Updates</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="section-notif">
          <div className="title">Get job notifications</div>
          <div className="description">
            The latest job news, articles, sent to <br /> your inbox weekly.
          </div>
          <div className="form">
            <Input placeholder="Email Address" className="input-custom" />
            <Button className="btn-custom" type="primary">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="lines"></div>
      <div className="footer-copyright">
        <div className="text">2021 @ JobHuntly. All rights reserved.</div>
        <div>
          {images.map((item, i) => (
            <img key={i} src={item} alt={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
