import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { click } from "@testing-library/user-event/dist/click";
import { Button, Menu } from "antd";
import React, { useState } from "react";
const items = [
  {
    label: "Hiro",
    key: "hiro",
    icon: <HomeOutlined />,
  },
  {
    label: "Mail",
    key: "Mail",
    icon: <MailOutlined />,
    disable: true,
  },
  {
    label: "Settings",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    key: "alipay",
    label: (
      <a href="/Login" target="_blank" rel="noopener noreferrer">
        Login
      </a>
    ),
  },
];

const Homepage = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log(click, e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Homepage;
