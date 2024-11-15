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
    /* justify-content: center; */
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
  {
    label: "販売場の名称及び所在地",
    value:
      "株式会社MYLABEL〒162-0857 東京都新宿区市谷本村町3-20新盛堂ビル5階別館",
  },
  {
    label: "酒類販売管理者の氏名",
    value: "曳地 綾香",
  },
  {
    label: "酒類販売管理研修受講年月日",
    value: "2023年4月13日",
  },
  {
    label: "次回研修の受講期限",
    value: "2026年4月12日",
  },
  {
    label: "研修実施団体名",
    value: "東京小売酒販組合",
  },
  {
    label: "酒類販売業務免許番号",
    value: "四法741",
  },
];

export default function CorporateInfo2() {
  return (
    <CorporateInfoBox>
      <h2>酒類販売管理者標識</h2>
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
