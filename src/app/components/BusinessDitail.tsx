"use client";
import React from "react";
import styled from "styled-components";

const BusinessDitailBigBox = styled.div`
  margin-bottom: 80px;
`;

const BusinessDitailBox = styled.div`
  /* background-color: yellow; */
  max-width: 1000px;
  margin: 0 auto 80px auto;
  color: #333;
  font-size: 72px;
  font-weight: 400;
  line-height: 1.4;
  /* height: 00px; */
  position: relative;
`;

const DitailBox = styled.p`
  font-size: 24px;
  color: #242528;
  line-height: 1.4;
  padding: 30px;
  text-align: center;
  border-radius: 24px;
  background-color: rgba(201, 188, 156, 0.25);
  margin: 20px;
  max-width: 800px;
`;

const DitailCommentBox = styled.p`
  font-size: 28px;
  text-align: center;
  line-height: 2.5;
  padding: 30px;
  z-index: 1;
`;
const BgImageRight = styled.div`
  position: absolute;
  right: 0;
  z-index: -1;
  height: 184px;
  width: 128px;
  background-image: url("/i1.webp");
  background-size: contain;
  background-repeat: no-repeat;
`;

const BgImageLeft = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  height: 582px;
  width: 466px;
  background-image: url("/i2.webp");
  background-size: contain;
  background-repeat: no-repeat;
`;

const Wp = styled.div`
  background-image: url("/wp.webp");
  background-size: cover;
  width: 100vw;
  height: 400px;
`;

const BusinessDitail = () => {
  return (
    <BusinessDitailBigBox>
      <BusinessDitailBox>
        <BgImageRight>

        </BgImageRight>
        <BgImageLeft>

        </BgImageLeft>
        <h2>事業内容</h2>
        <DitailBox>
          商業用ロゴ、店舗、ポップアップイベント等の総合デザイン
        </DitailBox>
        <DitailBox>ソーシャルメディア用グラフィックデザイン作成</DitailBox>
        <DitailBox>
          世界で一つだけのユニフォーム、ノベルティ商品デザイン
          各種印刷物、商品制作
        </DitailBox>
        <DitailBox>
          イラスト制作に関するマネジメント
          AR・VR技術を応用したデザインの企画、制作、管理
          ＮＦＴクリエイターの支援・能力開発の為の育成
        </DitailBox>
        <DitailCommentBox>
          企業から個人の方まで、皆様のお力になれるよう
          <br />
          私たちはグラフィックデザインに関する技術を磨き続けており
          <br />
          柔軟な発想で様々な課題にもチャレンジします
        </DitailCommentBox>
      </BusinessDitailBox>
      <Wp></Wp>
    </BusinessDitailBigBox>
  );
};

export default BusinessDitail;
