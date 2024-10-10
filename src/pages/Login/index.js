import { Button, Flex } from "antd";
import React from "react";

const Login = () => {
  return (
    <div>
      <h2>Beranda</h2>
      <p>Selamat datang di halaman Login</p>
      <Flex gap="small" horizontal>
        <Button type="primary" href="/">
          Back
        </Button>
        <Button type="primary" href="/dashboard">
          Dashboard
        </Button>
      </Flex>
    </div>
  );
};

export default Login;
