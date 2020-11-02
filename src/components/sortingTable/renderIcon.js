import React from "react";
import TwitterIcon from "../images/twitterIcon.png";
import FacebookIcon from "../images/facebookIcon.png";
import InstagramIcon from "../images/instagramIcon.png";
import EmailIcon from "../images/emailIcon.jpg";

function RenderIcon(iconType) {
  switch (iconType) {
    case "/twitter/":
      return <img src={TwitterIcon} alt="Logo" height="30px" />;
    case "/instagram/":
      return <img src={InstagramIcon} alt="Logo" height="30px" />;
    case "/facebook/":
      return <img src={FacebookIcon} alt="Logo" height="30px" />;
    case "/email/":
      return <img src={EmailIcon} alt="Logo" height="30px" />;
    default:
      return null;
  }
}

export default RenderIcon;
