'use client'

import { Button, Table, Form, Input, Space } from "antd";
import "../styles/profile.css";
import Divider from "@/components/sidebar/utils/divider";
import Image from "next/image";

interface CardItemProps {
    cardText: string;
    isError: boolean;
}

const CardItem: React.FC<CardItemProps> = ({ cardText, isError }) => {
    return (
        <div className="card-item">
            <div className={isError ? "card-item-left warning-text" : "card-item-left"}>
                <Image src={isError ? "/assets/card2.svg" : "/assets/card1.svg"} alt="Card" width="16" height="15" />
                <div>{cardText}</div>
            </div>
            <div>
                <Image src="/assets/trash.svg" alt="Card" width="21" height="21" />
            </div>
        </div>
    )
}

interface InvoiceItemProps {
    invoice: string;
}

const InvoiceItem: React.FC<InvoiceItemProps> = ({ invoice }) => {
    return (
        <div className="invoice-div">
            <div className="invoice-item">
                <div>
                    {invoice}
                </div>
                <div>
                    <Image src="/assets/active_download.svg" alt="Card" width="21" height="21" />
                </div>
            </div>
            <Divider />
        </div>
    )
}

const Profile = () => {
    const [form] = Form.useForm();

    return (
        <div className="profile-page">
            <div className="profile-section">
                <div className="profile-title">Profile</div>
                <div className="profile-div1">
                    <div className="profile-div-title">General</div>
                    <Form
                        form={form}
                        layout="vertical"
                        autoComplete="off"
                    >
                        <Form.Item
                            name="name"
                            label="Name"
                            rules={[{ type: 'string' }]}
                        >
                            <Input placeholder="Name" className="form-input" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="Work Email"
                            rules={[{ type: 'email' }]}
                        >
                            <Input placeholder="Work Email" className="form-input" />
                        </Form.Item>
                        <Form.Item className="w-100">
                            <Button type="primary" htmlType="submit" className="form-button">
                                Save Changes
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <Divider />
                <div className="profile-div2">
                    <div className="profile-div-title">Creating new password</div>
                    <Form
                        form={form}
                        layout="vertical"
                        autoComplete="off"
                    >
                        <Form.Item
                            name="current_password"
                            label="Enter current password"
                            rules={[{ type: 'string', min: 8 }]}
                        >
                            <Input.Password placeholder="Enter current password" className="form-input" />
                        </Form.Item>
                        <div className="flex">
                            <div className="new-password-div">
                                <Form.Item
                                    name="new_password"
                                    label="Enter new password"
                                    rules={[{ type: 'string', min: 8 }]}
                                >
                                    <Input.Password placeholder="Enter new password" className="form-input" />
                                </Form.Item>
                                <Form.Item
                                    name="confirm_password"
                                    label="Reset new password"
                                    rules={[{ type: 'string', min: 8 }]}
                                >
                                    <Input.Password placeholder="Reset new password" className="form-input" />
                                </Form.Item>
                            </div>
                            <div className="password-rule-div">
                                <div className="password-rule-text1">Password must include:</div>
                                <div className="password-rule-text2">Atleast 8 symbols</div>
                                <div className="password-rule-text3">Atleast 1 number [0, 1...9]</div>
                                <div className="password-rule-text4">Atleast 1 uppercase symbol [Aa]</div>
                            </div>
                        </div>
                        <Form.Item className="w-100">
                            <Button type="primary" htmlType="submit" className="form-button">
                                Update Password
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div className="profile-section">
                <div className="profile-title">Billing Info</div>
                <div className="profile-div1">
                    <div className="profile-div-title">Billing cards</div>
                    <CardItem cardText="*6573 VISA" isError={false} />
                    <CardItem cardText="*3623 VISA - update payment info" isError={true} />
                    <Button type="primary" className="form-button">
                        + &nbsp; Add new card
                    </Button>
                </div>
                <Divider />
                <div className="profile-div2">
                    <div className="profile-div-title">Invoices</div>
                    <InvoiceItem invoice="aug 2023 — $1700" />
                    <InvoiceItem invoice="aug 2023 — $1700" />
                    <InvoiceItem invoice="aug 2023 — $1700" />
                    <InvoiceItem invoice="aug 2023 — $1700" />
                </div>
            </div>
        </div>
    );
};

export default Profile;
