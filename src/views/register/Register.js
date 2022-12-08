import React from 'react';
import './register.scss'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'; 
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

function Register() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className='register-view'>
            <h2>用户注册</h2>
            <Form
                name="normal_register"
                className="register-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的邮箱!',
                        },
                    ]}
                >
                    <Input size="large" type='email' prefix={<MailOutlined className="site-form-item-icon" />} placeholder="邮箱" />
                </Form.Item>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的用户名!',
                        },
                    ]}
                >
                    <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的密码!',
                        },
                    ]}
                >
                    <Input.Password
                        size="large"
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>
                <Form.Item
                    name="confirmPassword"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的密码!',
                        },
                    ]}
                >
                    <Input.Password
                        size="large"
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="确认密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="register-form-button">
                        注册
                    </Button>
                    <span style={{ paddingLeft: '10px' }}>或</span> <Link to="/login">前往登录</Link>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Register