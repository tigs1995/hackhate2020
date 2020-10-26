import { useTable, useSortBy } from "react-table";
import React from "react";
import ColumnGenerator from "./columnGenerator";
import SortTable from "./sortTable";
import Formatting from "../../CSS/formatting.css";
import Table from "react-bootstrap/Table";
import { Box, Typography } from "@material-ui/core";
import TwitterIcon from "../images/twitterIcon.png";
import FacebookIcon from "../images/facebookIcon.png";
import InstagramIcon from "../images/instagramIcon.png";
import EmailIcon from "../images/emailIcon.jpg";

function RenderIcon(iconType) {
  switch (iconType) {
    case "twitter":
      return <img src={TwitterIcon} alt="Logo" height="40px" />;
    case "instagram":
      return <img src={InstagramIcon} alt="Logo" height="40px" />;
    case "facebook":
      return <img src={FacebookIcon} alt="Logo" height="40px" />;
    case "email":
      return <img src={EmailIcon} alt="Logo" height="40px" />;
    default:
      return null;
  }
}

export default RenderIcon;
