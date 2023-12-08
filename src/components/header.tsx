import Image from "next/image";
import { Button } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';
import "../styles/navbar.css";
import Link from "next/link";

export default function Header() {
    return (
        <div className="navbar">
            <div className="flex align-center justify-between">
                <div className="navbar-start sm:w-100 flex">
                    <Link className="navbar-item" href="/"><Image src="/assets/getfunnel_black.png" alt="Logo" width="140" height="38" /></Link>
                    <Image className="ml-5" src="/assets/home_in_circle.svg" alt="Logo" width="24" height="24" />
                    <Link className="navbar-item nav-link" href="/">my listings</Link>
                    &gt;
                    <p className="navbar-item" >Listing #1</p>
                </div>
                <div className="navbar-end">
                    <Link href="/mylisting" className="nav-link">my listings</Link>
                    <Link href="/pricing" className="nav-link">pricing</Link>
                    <Link href="/profile" className="nav-link">profile</Link>
                    <Link href="/mylisting" className="nav-link">log out</Link>
                    <Button className="green-button">
                        new listing<FileAddOutlined />
                    </Button>
                </div>
            </div>
        </div>
    )
}