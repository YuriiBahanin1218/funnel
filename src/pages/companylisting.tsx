'use client'

import { Button, Table } from "antd";
import Image from "next/image";
import { useState } from "react";
import SideBar from '@/components/sidebar';
import SubHeader from '@/components/subheader';
import "../styles/companylisting.css";
import "../styles/sidebar.css";
import "../styles/subheader.css";
import "../styles/navbar.css";

interface PeopleCellProps {
    peopleCount: number
}
const PeopleCell: React.FC<PeopleCellProps> = ({ peopleCount }) => {
    return (
        <div className="people-cell">
            <Image src="/assets/active_man.svg" alt="Man" width="15" height="15" />
            <Button>see all people</Button>
            <div>{peopleCount} founded</div>
        </div>
    );
}

interface NameCellProps {
    name: string
}
const NameCell: React.FC<NameCellProps> = ({ name }) => {
    return (
        <div className="name-cell">
            <div>{name}</div>
            <div className="flex">
                <Image src="/assets/facebook.svg" alt="facebook" width="20" height="20" />
                <Image src="/assets/linkedin.svg" alt="linkedin" width="20" height="20" />
                <Image src="/assets/social3.svg" alt="social" width="20" height="20" />
            </div>
        </div>
    );
}

const CompanyListing = () => {
    const dataSource = [
        {
            key: '1',
            name: <NameCell name={'Google'} />,
            desc: 's an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.',
            segment: 'Marketing Agency',
            location: 'Seattle, Washington',
            phone: '+1 765 563 323 22',
            email: 'example@mail.com',
            people: <PeopleCell peopleCount={36} />,
        },
        {
            key: '2',
            name: <NameCell name={'Google'} />,
            desc: 's an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.',
            segment: 'Marketing Agency',
            location: 'Seattle, Washington',
            phone: '+1 765 563 323 22',
            email: 'example@mail.com',
            people: <PeopleCell peopleCount={36} />,
        },
        {
            key: '3',
            name: <NameCell name={'Google'} />,
            desc: 's an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.',
            segment: 'Marketing Agency',
            location: 'Seattle, Washington',
            phone: '+1 765 563 323 22',
            email: 'example@mail.com',
            people: <PeopleCell peopleCount={36} />,
        },
        {
            key: '4',
            name: <NameCell name={'Google'} />,
            desc: 's an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.',
            segment: 'Marketing Agency',
            location: 'Seattle, Washington',
            phone: '+1 765 563 323 22',
            email: 'example@mail.com',
            people: <PeopleCell peopleCount={36} />,
        },
    ];

    const columns = [
        {
            title: 'Company Name',
            dataIndex: 'name',
            key: 'name',
            sorter: true,
            width: '13%',
        },
        {
            title: 'Company Description',
            dataIndex: 'desc',
            key: 'desc',
            sorter: true,
            width: '13%',
        },
        {
            title: 'Segment',
            dataIndex: 'segment',
            key: 'segment',
            sorter: true,
            width: '13%',
        },
        {
            title: 'HQ Location',
            dataIndex: 'location',
            key: 'location',
            sorter: true,
            width: '13%',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            sorter: true,
            width: '13%',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: true,
            width: '13%',
        },
        {
            title: 'People',
            dataIndex: 'people',
            key: 'people',
            sorter: true,
            width: '13%',
        },
    ];

    const [activeCategory, setActiveCategory] = useState(1); // 1 company, 2 people

    return (
        <div className='flex'>
            <SideBar isPeople={activeCategory === 2} />
            <div className='main-body'>
                <SubHeader activeCategory={activeCategory} onChangeCategory={(e: number) => setActiveCategory(e)} />
                <div>
                    <Table dataSource={dataSource} columns={columns} className="company-table" />
                </div>
            </div>
        </div>
    )
}

export default CompanyListing;