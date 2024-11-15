"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const PhotozoneBox = styled.div`
  margin-bottom: 80px;
`;

const SecondBox = styled.div`
  margin-top: 80px;
`;
const Photozone = () => {
  return (
    <PhotozoneBox>
      <div>
        <Image src={"/p1.webp"} alt={""} height={606} width={1440} />
      </div>
      <SecondBox>
        <Image src={"/p2.webp"} alt={""} height={370} width={1440} />
      </SecondBox>
    </PhotozoneBox>
  );
};

export default Photozone;
