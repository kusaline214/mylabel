import Image from "next/image";
import React from "react";
import styled from "styled-components";

const HeaderBox = styled.div`
  height: 90px;
  width: 100vw;
  color: #333;
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background-color: #fef4f17d;
  border-bottom: 1px solid rgba(36, 37, 40, 0.1);
  z-index: 2;
`;

const LogoBox = styled.h1`
  width: 400px;
`;

const LinkList = styled.ul`
  width: 600px;
  display: flex;
  list-style: none;
  justify-content: space-between;
  li {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0cap.1em;
    color: rgba(36, 37, 40, 0.7);
    filter: cepia(0%);
  }
`;
const Header = () => {
  return (
    <HeaderBox>
      <LogoBox>
        <Image
          src={"/logo.webp"}
          alt={""}
          width={600}
          height={95}
          layout="responsive"
        />
      </LogoBox>
      <nav>
        <LinkList>
          <a href="#business">
            <li>事業内容</li>
          </a>
          <a href="#greetings">
            <li>代表挨拶</li>
          </a>
          <a href="#aboutus">
            <li>会社概要</li>
          </a>
          <a href="">
            <li>求人情報</li>
          </a>
          <a href="#contact">
            <li>お問合せ</li>
          </a>
        </LinkList>
      </nav>
    </HeaderBox>
  );
};

export default Header;
