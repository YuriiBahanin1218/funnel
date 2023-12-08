'use client'

import { Button } from 'antd';
import Divider from './utils/divider';
import HeaderImage from './utils/headerimage';
import Image from 'next/image';
import ExpandDiv from './utils/expander';
import { useEffect, useState } from "react";

interface CompanyFilterProps {
    isActive: boolean;
    companyName: string;
    onClickCompany: Function;
}

const CompanyNameFilterItem: React.FC<CompanyFilterProps> = ({ isActive, companyName, onClickCompany }) => {
    return (
        <Button className={isActive ? "company-filter active-company-filter" : "company-filter"} onClick={() => onClickCompany()}>
            <div className="flex">
                {companyName}
            </div>
            <Image src={isActive ? "/assets/checked.svg" : "/assets/unchecked.svg"} alt="Active Man" width="15" height="15" />
        </Button>
    )
}

interface CompanyNameFilterProps {
    isLocked: boolean;
    selectedCompanyNameList: string[];
    setSelectedCompanyNameList: Function;
}

const CompanyNameFilter: React.FC<CompanyNameFilterProps> = ({ isLocked, selectedCompanyNameList, setSelectedCompanyNameList }) => {

    const companyNameList = ['All', 'Yandex', 'Google', 'Paypal', 'Payoneer'];
    const [activeCompanyList, setActiveCompanyList] = useState<string[]>(selectedCompanyNameList);
    const [isExpended, setExpanded] = useState(false);

    useEffect(() => {
        setActiveCompanyList(selectedCompanyNameList);
    }, [selectedCompanyNameList]);

    const onClickCompanyFilter = (CompanyName: string) => {
        if (activeCompanyList.includes(CompanyName)) {
            setActiveCompanyList(activeCompanyList.filter(x => x != CompanyName));
            setSelectedCompanyNameList(activeCompanyList.filter(x => x != CompanyName));
        } else {
            setActiveCompanyList([...activeCompanyList, CompanyName]);
            setSelectedCompanyNameList([...activeCompanyList, CompanyName]);
        }
    }

    return (
        <div>
            <div className="sidebar-item">
                <HeaderImage isLocked={isLocked} headerText="Company size" />
                <div className={isExpended ? "" : "collapsed-item"}>
                    {companyNameList.map((company, i) =>
                        <CompanyNameFilterItem key={i} isActive={activeCompanyList.includes(company)} companyName={company} onClickCompany={() => onClickCompanyFilter(company)} />
                    )}
                </div>
                <ExpandDiv isExpanded={isExpended} onClickExpand={() => setExpanded(!isExpended)} />
            </div>
            <Divider />
        </div>
    )
}

export default CompanyNameFilter;
