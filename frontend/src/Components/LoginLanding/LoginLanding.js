import React from "react";
import "./LoginLanding.scss";

export default function LoginLanding() {
  return (
    <div className="left">
      <div className="left__content">
        <h1>Get The Best Movie Recommendations</h1>
        <h3 className="left_desc">
          ...in your fingertips. We will provide you with the next best movie
          you can watch by knowing about your movie preferences. Quick, give it
          a try now
        </h3>
        <button className="btn btn-xl cta-btn signup_btn">Sign up!</button>
      </div>
    </div>
  );
}
