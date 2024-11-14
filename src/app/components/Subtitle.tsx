"use client";
import React from "react";
import styled from "styled-components";
const SubTitle = styled.p`
  font-size: 32px;
  font-weight: 400;
  line-height: 2;
  text-align: center;
  color: #333;
`;

const Subtitle = () => {
  return (
    <div>
      <SubTitle>
        みなさまの豊かな想いを、私たちの技術で <br />
        華やかに彩り、カタチにいたします
      </SubTitle>
    </div>
  );
};

export default Subtitle;
