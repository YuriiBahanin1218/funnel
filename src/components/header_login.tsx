import Image from "next/image";
import { Button } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';
import "../styles/navbar.css";
import Link from "next/link";

export default function Header_login() {
    return (
        <div className="navbar">
            <div className="flex align-center justify-between">
                <div className="navbar-start sm:w-100 flex">
                    <Link className="navbar-item" href="/"><Image src="/assets/getfunnel_black.png" alt="Logo" width="140" height="38" /></Link>
                </div>
                <div className="navbar-end">
                    <Button className="green-button">
                        Login / Sign Up
                    </Button>
                </div>
            </div>
        </div>
    )
}