import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import styled from "@emotion/styled";

const CorporateInfoBox = styled.div`
  color: #333;
  margin-bottom: 80px;
  div {
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
  }
`;

const style = {
  py: 0,
  width: "100%",
  maxWidth: 800,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

export default function CorporateInfo() {
  return (
    <CorporateInfoBox>
      <h2>会社概要</h2>
      <div>
        <List sx={style}>
          <ListItem>
            <ListItemText primary="会社名" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="株式会社MYLABEL / MYLABEL.inc.," />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="設立" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="令和5年7月" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="代表者" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="代表取締役社長 曳地 綾香" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="所在地" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText
              primary="〒162-0857 東京都新宿区市谷本村町3-20
新盛堂ビル5階別館"
            />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="電話" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="03-6380-6449 (代表)" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="従業員数" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText
              primary="9名(社員4名：アルバイト7名)
令和5年10月現在"
            />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="取引銀行" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="三井住友銀行・PayPay銀行" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="資本金" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="1,000,000円" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="設立" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="令和5年7月" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="決算期" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="6月末" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="事業内容" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="コンピューターグラフィックデザインの企画、製作、管理及び販売、各種印刷物、商品等の企画、デザイン及び製作／酒類、清涼飲料水、輸出入及び販売／AR（拡張現実）・VR（バーチャルリアリティ）技術を応用したデザインの企画、制作、管理及び販売／NFT（非代替性トークン）クリエイターの支援・能力開発の為の育成／イラスト制作に関する総合マネジメント／アーティストのマネジメント及び肖像権管理" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="加盟団体" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="公益社団法人 新宿法人会" />
          </ListItem>
          <ListItem>
            <ListItemText primary="関連会社" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="株式会社 Digital Dimension" />
          </ListItem>
        </List>
      </div>
    </CorporateInfoBox>
  );
}
