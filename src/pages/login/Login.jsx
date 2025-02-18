import React, { useRef } from "react";
import { useLoginMutation } from "../../redux/api/auth.api";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/auth.slice";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import { Typography } from "antd";

import { notification } from "antd";

const { Title } = Typography;

const Login = () => {
  const [api, contextHolder] = notification.useNotification();
  const [signin, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const passwordRef = useRef(null);

  const onFinish = (values) => {
    signin({ ...values, expiresInMins: 10 })
      .unwrap()
      .then((res) => {
        dispatch(login(res.accessToken));
        navigate("/admin/groups");
      })
      .catch((err) => {
        api.error({
          message: "Username or password is incorrect",
          placement: "bottomRight",
        });
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center text-center flex-col">
      <div className="wrapper p-4 max-w-[450px] w-full border rounded-md border-[#ffffff57]">
        <Title level={3}>Sign in</Title>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              autoFocus
              onPressEnter={() => passwordRef.current?.input?.focus()}
              className="bg-inherit"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password ref={passwordRef} className="bg-inherit" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              loading={isLoading}
              disabled={isLoading}
              type="primary"
              className="w-full"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
          <Form.Item label={null}>
            <Button
              type="primary"
              onClick={() => navigate("/")}
              className="w-full"
              htmlType="button"
              ghost
            >
              Go Home
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Login;
