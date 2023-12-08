'use client'

import { Button } from 'antd';
import Divider from './utils/divider';
import HeaderImage from './utils/headerimage';
import Image from 'next/image';
import ExpandDiv from './utils/expander';
import { useEffect, useState } from "react";

interface JobTitleFilterItemProps {
    isActive: boolean;
    jobTitle: string;
    onClickJobTitle: Function;
}

const JobTitleFilterItem: React.FC<JobTitleFilterItemProps> = ({ isActive, jobTitle, onClickJobTitle }) => {
    return (
        <Button className={isActive ? "company-filter active-company-filter" : "company-filter"} onClick={() => onClickJobTitle()}>
            <div className="flex">
                {jobTitle}
            </div>
            <Image src={isActive ? "/assets/checked.svg" : "/assets/unchecked.svg"} alt="Active Man" width="15" height="15" />
        </Button>
    )
}

interface JobTitleFilterProps {
    isLocked: boolean;
    selectedJobTitleList: string[];
    setSelectedJobTitleList: Function;
}

const JobTitleFilter: React.FC<JobTitleFilterProps> = ({ isLocked, selectedJobTitleList, setSelectedJobTitleList }) => {

    const jobTitleList = ['CEO', 'CTO', 'Head of Sales', 'Frontend', 'Backend'];
    const [activeJobTitleList, setActiveJobTitleList] = useState<string[]>([]);
    const [isExpended, setExpanded] = useState(false);

    useEffect(() => {
        setActiveJobTitleList(selectedJobTitleList);
    }, [selectedJobTitleList])

    const onClickJobTitleFilter = (jobTitle: string) => {
        if (activeJobTitleList.includes(jobTitle)) {
            setActiveJobTitleList(activeJobTitleList.filter(x => x != jobTitle));
            setSelectedJobTitleList(activeJobTitleList.filter(x => x != jobTitle));
        } else {
            setActiveJobTitleList([...activeJobTitleList, jobTitle]);
            setSelectedJobTitleList([...activeJobTitleList, jobTitle]);
        }
    }

    return (
        <div>
            <div className="sidebar-item">
                <HeaderImage isLocked={isLocked} headerText="Job Title" />
                <div className={isExpended ? "" : "collapsed-item"}>
                    {jobTitleList.map((jobTitle, i) =>
                        <JobTitleFilterItem key={i} isActive={activeJobTitleList.includes(jobTitle)} jobTitle={jobTitle} onClickJobTitle={() => onClickJobTitleFilter(jobTitle)} />
                    )}
                </div>
                <ExpandDiv isExpanded={isExpended} onClickExpand={() => setExpanded(!isExpended)} />
            </div>
            <Divider />
        </div>
    )
}

export default JobTitleFilter;
