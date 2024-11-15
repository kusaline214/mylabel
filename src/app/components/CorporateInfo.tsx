import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import styled from "@emotion/styled";

const CorporateInfoBox = styled.div`
  color: #333;
  margin: 0 auto 80px auto;
  max-width: 800px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    font-size: 72px;
    margin-bottom: 40px;
  }
`;

const style = {
  py: 0,
  width: "100%",
  maxWidth: 800,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

const items = [
  { label: "会社名", value: "株式会社MYLABEL / MYLABEL.inc." },
  { label: "設立", value: "令和5年7月" },
  { label: "代表者", value: "代表取締役社長 曳地 綾香" },
  {
    label: "所在地",
    value: "〒162-0857 東京都新宿区市谷本村町3-20 新盛堂ビル5階別館",
  },
  { label: "電話", value: "03-6380-6449 (代表)" },
  { label: "従業員数", value: "9名(社員4名：アルバイト7名) 令和5年10月現在" },
  { label: "取引銀行", value: "三井住友銀行・PayPay銀行" },
  { label: "資本金", value: "1,000,000円" },
  { label: "決算期", value: "6月末" },
  {
    label: "事業内容",
    value:
      "コンピューターグラフィックデザインの企画、製作、管理及び販売、各種印刷物、商品等の企画、デザイン及び製作／酒類、清涼飲料水、輸出入及び販売／AR（拡張現実）・VR（バーチャルリアリティ）技術を応用したデザインの企画、制作、管理及び販売／NFT（非代替性トークン）クリエイターの支援・能力開発の為の育成／イラスト制作に関する総合マネジメント／アーティストのマネジメント及び肖像権管理",
  },
  { label: "加盟団体", value: "公益社団法人 新宿法人会" },
  { label: "関連会社", value: "株式会社 Digital Dimension" },
];

export default function CorporateInfo() {
  return (
    <CorporateInfoBox>
      <h2>会社概要</h2>
      <div>
        <List sx={style}>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {/* ラベル部分の背景色（濃いグレー） */}
              <ListItem
                sx={{
                  backgroundColor: "#E1D8D6", // 偶数行は濃いグレー、奇数行は薄いグレー
                  paddingLeft: 2,
                  paddingRight: 2,
                }}
              >
                <ListItemText
                  primary={<span style={{ color: "#333" }}>{item.label}</span>} // ラベルの文字色（白）
                />
              </ListItem>
              <Divider component="li" />

              {/* バリュー部分の背景色（薄いグレー） */}
              <ListItem
                sx={{
                  backgroundColor: "#F7EEEC", // バリュー部分はラベルと逆
                  paddingLeft: 2,
                  paddingRight: 2,
                }}
              >
                <ListItemText
                  secondary={
                    <span style={{ color: "#333" }}>{item.value}</span>
                  } // バリューの文字色（濃いグレー）
                />
              </ListItem>
              {index < items.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))}
        </List>
      </div>
    </CorporateInfoBox>
  );
}
