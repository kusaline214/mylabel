"use client";
import React from "react";
import styled from "styled-components";

const GreetingBox = styled.div`
  color: #333;
  max-width: 800px;

  margin: 0 auto 80px auto;
  h2 {
    font-size: 72px;
    margin-bottom: 80px;
  }
`;

const Greeting1 = styled.p`
  font-size: 2rem;
`;
const Greeting2 = styled.p`
  font-size: 1.5rem;
  line-height: 1.4;
`;
const Greeting3 = styled.p`
  font-size: 1.5rem;
  text-align: right;
  span {
    font-size: 2rem;
  }
`;

const CeoGreeting = () => {
  return (
    <GreetingBox>
      <h2 id="greetings">代表挨拶</h2>
      <Greeting1>
        「お客様に寄り添い”いつまでも心が明るくなるもの”を」その想いから
        ひとつひとつのご依頼の背景を大切にしております。
        どうか、じっくりと皆様のお話を伺わせていただきたく存じます。
      </Greeting1>
      <br />
      <br />
      <Greeting2>
        皆様には平素よりご高配を賜り、誠にありがとうございます。
        <br />
        <br />
        私は、創業前から企業向けの広告用グラフィックデザインや商品のプロダクトデザインなどを専門として手掛け
        これまで数多くのお客様やメーカー様のご要望にお応えしながら、強固な信頼関係を築き上げてまいりました。
        <br />
        <br />
        SNSの普及により、個人のお客様も自然とグラフィックデザインに関わりを持つことのできる時代となった今
        より多くの需要をいただけるようになり、インターネット産業の成長と共に一緒に成長してきた私どもは
        想いを持って一緒に作り上げる温かさの必要性を感じ、会社を設立することとなりました。
        <br />
        <br />
        環境の変化が多き現代の、様々な境遇に合わせてキャリア形成ができる会社であることを理念に
        豊かな人材育成にも積極的に取り組み、地域社会に貢献できる企業組織を目標としております。
        <br />
        <br />
        これまでご愛顧いただいているお客様をはじめ、さらに多くのお客様に愛される会社となれるよう、精進していく所存です。
        引き続き、ご支援賜りますよう、何卒よろしくお願い申し上げます。
      </Greeting2>
      <Greeting3>
        代表取締役社長 <span>曳地綾香</span>
      </Greeting3>
    </GreetingBox>
  );
};

export default CeoGreeting;
