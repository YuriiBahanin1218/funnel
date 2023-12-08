'use client'

import { Button, Table, Form, Input, Space } from "antd";
import Image from "next/image";
import { useState } from "react";
import axios from 'axios';
import "../styles/login.css";

const LoginPage = () => {
    const [form] = Form.useForm();
    const handleLogin = async () => {
        const { data } = await axios.post('http://95.163.180.251/api/login', {
            email: 'test@test.com',
            password: 'test@test.com',
        });

        setIsAuthenticated(true);
    };
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div className="login-page">
            <div className="login-form">
                <Image src="/assets/getfunnel_black.png" alt="getfunnel" width="140" height="37" />
                <p className="login-title1">Glad to see you!</p>
                <p className="login-title2">Please, sign in</p>
                <Form
                    form={form}
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item
                        name="email"
                        label="Work Email"
                        rules={[{ type: 'email' }]}
                    >
                        <Input placeholder="Work Email" name="email" />
                    </Form.Item>
                    <Form.Item
                        name="pwd"
                        label="Create Password"
                        rules={[{ type: 'string', min: 6 }]}
                    >
                        <Input.Password placeholder="Password" name="password" />
                    </Form.Item>
                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit" onClick={handleLogin} className="form-button">
                                Sign In
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
                <div>Dont have an account? Sign up</div>
            </div>
        </div>
    )
}

export default LoginPage;
