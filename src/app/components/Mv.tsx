"use client";
import React from "react";
import styled from "styled-components";

const MvTitle = styled.div`
  width: 1022px;
  height: 1525px;
  /* background-color: yellow; */
  background-image: url("/mv.webp");
  background-size: cover;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin: 0 auto;
  p {
    color: #333;
    line-height: 1.4;
    font-weight: 400;
    font-size: 48px;
    text-align: center;
    padding-top: 450px;
  }
`;

const Mv = () => {
  return (
    <MvTitle>
      <p>
        ぱっと目を惹き
        <br /> 何度でも眺めていたくなる
        <br /> 特別なMyデザイン
      </p>
    </MvTitle>
  );
};

export default Mv;
