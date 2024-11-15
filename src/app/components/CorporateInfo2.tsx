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

export default function CorporateInfo2() {
  return (
    <CorporateInfoBox>
      <h2>酒類販売管理者標識</h2>
      <div>
        <List sx={style}>
          <ListItem>
            <ListItemText primary="販売場の名称及び所在地" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText
              primary="株式会社MYLABEL
〒162-0857 東京都新宿区市谷本村町3-20
新盛堂ビル5階別館"
            />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="酒類販売管理者の氏名" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="曳地 綾香" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="酒類販売管理研修受講年月日" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="2023年4月13日" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="次回研修の受講期限" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="2026年4月12日" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="研修実施団体名" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="東京小売酒販組合" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="酒類販売業務免許番号" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="四法741" />
          </ListItem>
        </List>
      </div>
    </CorporateInfoBox>
  );
}
