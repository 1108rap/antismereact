import { Card, Input, Button, Checkbox, Flex, Form } from "antd";

const CardAuth = () => {
  return (
    <div>
      <Card title="Sign In Card" bordered={false} style={{ width: 400 }}>
        <Input></Input>
        <Input></Input>
        <Flex horizontal gap={"small"} justify="center">
          <Button href="/">Back</Button>
          <Button href="/dashboard">Sign In</Button>
        </Flex>

        <Form>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please Input Your Username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please Input Your Password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default CardAuth;
