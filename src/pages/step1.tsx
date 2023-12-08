'use client'

import { Button, Table, Form, Input, Space } from "antd";
import Image from "next/image";
import { useState } from "react";
import axios from 'axios';
import "../styles/step1.css";
import Steps from '../components/steps';
import {
    LockOutlined,
    GlobalOutlined,
    DeleteOutlined,
} from "@ant-design/icons";

const Step1 = () => {
    const [inputText, setInputText] = useState('');
    const [stringArray, setStringArray] = useState([]);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleEnterPress = (event) => {
        if (event.key === 'Enter' && inputText.trim() !== '') {
            setStringArray((prevArray) => [...prevArray, inputText]);
            setInputText('');
        }
    };

    const handleDelete = (index) => {
        const newArray = [...stringArray];
        newArray.splice(index, 1);
        setStringArray(newArray);
    };

    return (
        <div className="step1-page">
            <div className="step1-form">
                <p className="step1-title1">Put 10 Website Links</p>
                <p className="step1-title2">Show 10 websites of companies that are similar to what you need</p>

                <div className="link">
                    <Input
                        className="link-input"
                        placeholder="input links"
                        value={inputText}
                        onChange={handleInputChange}
                        onKeyPress={handleEnterPress}
                        prefix={
                            <GlobalOutlined
                            />
                        }
                    />
                    <div className="websiteLinks">
                        {stringArray.map((str, index) => (
                            <div key={index} className="individual-link" onClick={() => handleDelete(index)}>
                                    {str}
                                <DeleteOutlined
                                style={{ fontSize: '10px' }}
                                />
                            </div>
                        ))}
                    </div>
                    <div>
                        you need more {10 - stringArray.length} website to continue
                    </div>

                    <Button type="primary" htmlType="submit" className="form-button" >
                        <LockOutlined />
                        Next Step
                    </Button>
                </div>
                </div>
            </div>
            )
}

            export default Step1;