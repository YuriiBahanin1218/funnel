'use client'
import Image from "next/image";
import "../styles/mylisting.css";
import { Button } from "antd";
import Divider from "./sidebar/utils/divider";
import Link from "next/link";

interface MyListingItemProps {
    id: number;
    companyCount: number;
    peopleCount: number;
    createdDate: string;
}

const MyListingItem: React.FC<MyListingItemProps> = ({ id, companyCount, peopleCount, createdDate }) => {
    return (
        <div className="mylisting-item">
            <div className="top-item">
                <div className="top-left-item">
                    <Image src="/assets/list.svg" alt="Filter" width="37" height="37" />
                    <p className="item-title">listing #{id}</p>
                </div>
                <div className="top-right-item">
                    <Image src="/assets/trash_in_circle.svg" alt="Filter" width="37" height="37" />
                    <Image src="/assets/edit.svg" alt="Filter" width="37" height="37" />
                    <Link className="open-button" href="/companylisting">
                        Open
                        <Image src="/assets/out_cursor.svg" alt="Filter" width="12" height="12" />
                    </Link>
                </div>
            </div>
            <Divider />
            <div className="bottom-item">
                <div className="bottom-left-item">
                    <div className="flex">
                        <Image src="/assets/company.svg" alt="Company" width="15" height="15" />
                        <p>&nbsp;{companyCount}  companies</p>
                    </div>
                    <div className="flex">
                        <Image src="/assets/active_man.svg" alt="People" width="15" height="15" />
                        <p>&nbsp;{peopleCount}  people</p>
                    </div>
                </div>
                <div className="bottom-right-item">
                    <p>created at {createdDate}</p>
                </div>
            </div>
        </div>
    )
}

export default MyListingItem;
