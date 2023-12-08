'use client'

import { Button } from 'antd';
import Divider from './utils/divider';
import HeaderImage from './utils/headerimage';
import Image from 'next/image';
import ExpandDiv from './utils/expander';
import { useState, useEffect } from "react";

interface CompanyFilterProps {
    isActive: boolean;
    companySize: string;
    onClickCompany: Function;
}

const CompanySizeFilterItem: React.FC<CompanyFilterProps> = ({ isActive, companySize, onClickCompany }) => {
    return (
        <Button className={isActive ? "company-filter active-company-filter" : "company-filter"} onClick={() => onClickCompany()}>
            <div className="flex">
                <Image className="mr-1" src={isActive ? "/assets/active_man.svg" : "/assets/inactive_man.svg"} alt="Active Man" width="10" height="10" />
                {companySize}
            </div>
            <Image src={isActive ? "/assets/checked.svg" : "/assets/unchecked.svg"} alt="Active Man" width="15" height="15" />
        </Button>
    )
}

interface CompanySizeFilterProps {
    isLocked: boolean;
    selectedCompanySizeList: string[];
    setSelectedCompanySizeList: Function;
}

const CompanySizeFilter: React.FC<CompanySizeFilterProps> = ({ isLocked, selectedCompanySizeList, setSelectedCompanySizeList }) => {

    const companySizeList = ['1-7', '7-14', '14-56', '56-100', '100-130'];
    const [activeCompanyList, setActiveCompanyList] = useState<string[]>(selectedCompanySizeList);
    const [isExpended, setExpanded] = useState(false);

    useEffect(() => {
        setActiveCompanyList(selectedCompanySizeList);
    }, [selectedCompanySizeList]);

    const onClickCompanyFilter = (companySize: string) => {
        if (activeCompanyList.includes(companySize)) {
            setActiveCompanyList(activeCompanyList.filter(x => x != companySize));
            setSelectedCompanySizeList(activeCompanyList.filter(x => x != companySize));
        } else {
            setActiveCompanyList([...activeCompanyList, companySize]);
            setSelectedCompanySizeList([...activeCompanyList, companySize]);
        }
    }

    return (
        <div>
            <div className="sidebar-item">
                <HeaderImage isLocked={isLocked} headerText="Company size" />
                <div className={isExpended ? "" : "collapsed-item"}>
                    {companySizeList.map((company, i) =>
                        <CompanySizeFilterItem key={i} isActive={activeCompanyList.includes(company)} companySize={company} onClickCompany={() => onClickCompanyFilter(company)} />
                    )}
                </div>
                <ExpandDiv isExpanded={isExpended} onClickExpand={() => setExpanded(!isExpended)} />
            </div>
            <Divider />
        </div>
    )
}

export default CompanySizeFilter;
