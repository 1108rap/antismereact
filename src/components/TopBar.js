import { HomeOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const items = [
  {
    label: "Hiro",
    key: "hiro",
    icon: <HomeOutlined />,
  },
  {
    label: "Settings",
    key: "Set",
    icon: <SettingOutlined />,
    Children: [
      {
        type: "group",
        label: "Set 1",
        Children: [
          {
            label: "Option 1",
            key: "ops1",
          },
          {
            label: "Option 1",
            key: "ops2",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="/Login" rel="noopener noreferrer">
        Login
      </a>
    ),
    icon: <UserOutlined />,
  },
];

const TopBar = () => {
  const [current, setCurrent] = useState("hiro");
  const onClick = (e) => {
    console.log(click, e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedkeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default TopBar;
