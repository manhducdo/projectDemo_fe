import React from 'react';
import { Form, Input, Button, Checkbox, Card, Row , Col } from 'antd';
import {
  Link
} from "react-router-dom";

import styles from './index.less';

export default function Login({ facebook, google, register, forgot}) {


  return (
      <Row justify="space-between" className={styles.container} align="middle">
        <Col span={24}>
          <Card bordered={true} className={styles.card} style={{ width: 500, borderRadius: 10}}>
            <div className={styles.title}>
            <span>Agile</span>
              Tech
            </div>

            <Form
            name="basic"
            initialValues={{ remember: true }}
          >
            <Form.Item
              // label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]
            }
            >
              <div className={styles.heading}>Email Address</div>
              <Input />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]
            }
            >
              <div className={styles.heading}>First Name</div>
              <Input />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]
            }
            >
              <div className={styles.heading}>Subname</div>
              <Input />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]
            }
            >
              <div className={styles.heading}>Mobile Phone</div>
              <Input />
            </Form.Item>

            <Form.Item
              // label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <div className={styles.heading}>Password</div>
              <Input.Password />
            </Form.Item>

            <div className={styles.remember}>
              <div>
                <Checkbox name="remember" valuePropName="checked">Remember me</Checkbox>
              </div>
              <div>
                <Link to={forgot} className={styles.forgot}>Forgot password</Link>
              </div>
            </div>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                LOGIN
              </Button>
            </Form.Item>

            <div className={styles.bottom}>
                <span>Or log in via</span>
                <div className={styles.icon}>
                  <div className={styles.google}>
                    <Link to={google}>
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M29.5804 31.6897C26.4585 34.3265 22.4086 35.9999 18 35.9999C11.4398 35.9999 5.68113 32.3858 2.55933 27.1124L3.72806 21.7249L8.90854 20.7632C10.1109 24.6444 13.7389 27.4921 18 27.4921C20.0671 27.4921 21.9867 26.8382 23.5687 25.678L28.5468 26.4374L29.5804 31.6897Z" fill="#59C36A"/>
                      <path d="M29.5805 31.6899L28.5469 26.4376L23.5688 25.6782C21.9867 26.8384 20.0671 27.4923 18 27.4923V36.0001C22.4087 36.0001 26.4586 34.3267 29.5805 31.6899Z" fill="#00A66C"/>
                      <path d="M8.50781 18C8.50781 18.9702 8.65547 19.8983 8.90859 20.7632L2.55938 27.1125C0.977344 24.4546 0 21.3327 0 18C0 14.6671 0.977344 11.5453 2.55938 8.88745L7.65513 9.76446L8.90859 15.2367C8.65547 16.1014 8.50781 17.0296 8.50781 18Z" fill="#FFDA2D"/>
                      <path d="M36 18C36 23.4843 33.4618 28.3992 29.5805 31.6898L23.5688 25.6781C24.7921 24.7921 25.8258 23.6109 26.5008 22.2188H18C17.4093 22.2188 16.9453 21.7546 16.9453 21.1641V14.8359C16.9453 14.2452 17.4093 13.7812 18 13.7812H34.65C35.1563 13.7812 35.5992 14.1398 35.6836 14.646C35.8945 15.743 36 16.882 36 18Z" fill="#4086F4"/>
                      <path d="M26.5009 22.2188C25.8259 23.6109 24.7921 24.7921 23.5688 25.6781L29.5805 31.6898C33.4618 28.3992 36 23.4844 36 18C36 16.882 35.8945 15.743 35.6835 14.646C35.5992 14.1398 35.1562 13.7812 34.6499 13.7812H18V22.2188H26.5009Z" fill="#376AED"/>
                      <path d="M29.8757 5.02727C29.8968 5.32259 29.7703 5.59687 29.5804 5.80774L25.0664 10.3007C24.7078 10.6804 24.1172 10.7226 23.6953 10.4062C22.0288 9.16172 20.0671 8.50781 18 8.50781C13.7389 8.50781 10.1109 11.3554 8.90854 15.2367L2.55933 8.8875C5.68113 3.61406 11.4398 0 18 0C22.1976 0 26.2898 1.54688 29.496 4.2468C29.7281 4.43672 29.8546 4.73196 29.8757 5.02727Z" fill="#FF7F23"/>
                      <path d="M23.6953 10.4062C24.1172 10.7227 24.7078 10.6804 25.0663 10.3007L29.5804 5.80774C29.7703 5.59687 29.8969 5.32266 29.8757 5.02727C29.8546 4.73189 29.7281 4.43672 29.496 4.2468C26.2899 1.54688 22.1977 0 18 0V8.50781C20.0671 8.50781 22.0288 9.16172 23.6953 10.4062Z" fill="#F03800"/>
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <Link to={facebook}>
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M36 18.1095C36 8.10548 27.9435 0 18 0C8.05645 0 0 8.10548 0 18.1095C0 27.1482 6.58234 34.6403 15.1875 36V23.3445H10.6149V18.1095H15.1875V14.1196C15.1875 9.58126 17.873 7.0744 21.9861 7.0744C23.956 7.0744 26.0158 7.42783 26.0158 7.42783V11.8822H23.7455C21.51 11.8822 20.8125 13.2784 20.8125 14.7103V18.1095H25.8046L25.0062 23.3445H20.8125V36C29.4177 34.6403 36 27.1482 36 18.1095Z" fill="#376AED"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className={styles.footer}>
                <span>
                  Or create a new account
                </span>
                <Link to={register}>
                  here
                </Link>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
  )
}

Login.defaultProps = {
  to: '/forgot',
  facebook: '/facebook',
  google: '/google',
  register: '/register',
  forgot: '/forgot-password'
}
