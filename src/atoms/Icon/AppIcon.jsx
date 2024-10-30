import React from "react";
import './AppIcon.css';
const AppIcon = ({
    icon = "", 
    style = "",
}) => {
  return <div className={`bg-current mask-icon ${style}`} style={{ maskImage: `url(${icon})`, WebkitMaskImage: `url(${icon})` }} />;
};

export default AppIcon;