import { useLoginMutation } from "@/redux/api/auth.api";
import { login } from "@/redux/features/auth.slice";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { toast } from "react-toastify";

const { Title } = Typography;

const Login = () => {
  const [signin, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const passwordRef = useRef(null);

  const onFinish = async (values) => {
    try {
      const res = await signin({ ...values, expiresInMins: 10 }).unwrap();
      dispatch(login(res.accessToken));
      navigate("/admin/car");
    } catch (error) {
      toast.error(error?.data?.message || "Login failed! Please try again.");
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center text-center flex-col">
      <div className="wrapper p-4 max-w-[450px] w-full border rounded-md border-[#ffffff57]">
        <Title level={3}>Sign in</Title>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
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
              type="primary"
              loading={isLoading}
              disabled={isLoading}
              className="w-full"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Login;
