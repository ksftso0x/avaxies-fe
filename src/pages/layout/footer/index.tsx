// import React, { useEffect, useState } from "react";
import { FooterContainer } from "./index.styled";
import React from "react";

const Footer = () => {
  // const [year, setYear] = useState({});
  // useEffect(() => {
  //   let get_year = new Date().getFullYear;
  //   setYear(get_year);
  // }, []);
  return (
    <FooterContainer>
      2022, Avaxies NFT LLC, <span>Terms of Use</span>
    </FooterContainer>
  );
};

export default Footer;
