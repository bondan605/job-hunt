import React from "react";
import "./style.css";
import { Button } from "antd";
export default function BannerSignUp() {
  return (
    <div className="banner-wrapper">
      <div className="banner-flex">
        <div className="section-cta">
          <div className="title">
            Start posting <br /> jobs today
          </div>
          <div className="subtitle">Start posting jobs for only $10.</div>
          <Button className="btn-signup" type="primary">
            Sign Up For Free
          </Button>
        </div>
        <div className="section-img">
          <img
            className="img-dashboard"
            src="/images/dashboard.png"
            alt="/images/dashboard.png"
          />
        </div>
      </div>
    </div>
  );
}
