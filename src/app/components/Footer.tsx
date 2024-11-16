"use client";
import styled from "@emotion/styled";
import React from "react";

const FooterBox = styled.div`
  padding: 100px 100px 80px;
  color: #333;
  background-color: white;
`;

const FooterTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  nav {
    ul {
      list-style: none;
    }
  }
`;

const FooterBottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
const Footer = () => {
  return (
    <FooterBox>
      <FooterTopBox>
        <nav>
          <ul>
            <a href="">
              <li>事業内容</li>
            </a>
            <a href="">
              <li>代表挨拶</li>
            </a>
            <a href="">
              <li>会社概要</li>
            </a>
            <a href="">
              <li>求人情報</li>
            </a>
            <a href="">
              <li>お問合せ</li>
            </a>
          </ul>
        </nav>
        <div>
          <a href="">
            <img src="/i1.webp" alt="" />
          </a>
          <a href="">
            <img src="/i1.webp" alt="" />
          </a>
          <a href="">
            <img src="/i1.webp" alt="" />
          </a>
        </div>
      </FooterTopBox>
      <FooterBottomBox>
        <img src="/logo.webp" alt="" />
        <p>© 2023 MYLABEL All Right Reserved.</p>
      </FooterBottomBox>
    </FooterBox>
  );
};

export default Footer;
