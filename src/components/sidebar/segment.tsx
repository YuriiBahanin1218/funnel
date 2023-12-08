'use client'

import { useEffect, useState } from "react";
import { Button } from "antd";
import Divider from "./utils/divider";
import ExpandDiv from "./utils/expander";
import HeaderImage from "./utils/headerimage";
import Image from "next/image";

interface SegmentFilterItemProps {
    isActive: boolean;
    segment: string;
    onClickSegment: Function;
}

const SegmentFilterItem: React.FC<SegmentFilterItemProps> = ({ isActive, segment, onClickSegment }) => {
    return (
        <Button className={isActive ? "segment-filter active-segment-filter" : "segment-filter"} onClick={() => onClickSegment()}>
            {segment}
            <Image src={isActive ? "/assets/checked.svg" : "/assets/unchecked.svg"} alt="Filter" width="15" height="15" />
        </Button>
    )
}

interface SegmentFilterProps {
    isLocked: boolean;
    selectedSegmentList: string[];
    setSelectedSegmentList: Function;
}

const SegmentFilter: React.FC<SegmentFilterProps> = ({ isLocked, selectedSegmentList, setSelectedSegmentList }) => {
    const segmentList = ['Marketing', 'Internet Tech', 'Consulting', 'Marketing1', 'Internet Tech1', 'Consulting1'];    // should be updated calling backend api
    const [activeSegmentList, setActiveSegmentList] = useState<string[]>(selectedSegmentList);
    const [isExpended, setExpanded] = useState(false);

    useEffect(() => {
        setActiveSegmentList(selectedSegmentList);
    }, [selectedSegmentList]);

    const onClickSegmentFilter = (segment: string) => {
        if (activeSegmentList.includes(segment)) {
            setActiveSegmentList(activeSegmentList.filter(x => x != segment));
            setSelectedSegmentList(activeSegmentList.filter(x => x != segment));
        } else {
            setActiveSegmentList([...activeSegmentList, segment]);
            setSelectedSegmentList([...activeSegmentList, segment]);
        }
    }

    return (
        <div>
            <div className="sidebar-item">
                <HeaderImage isLocked={isLocked} headerText="segment" />
                <div className={isExpended ? "" : "collapsed-item"}>
                    {segmentList.map((segment, i) =>
                        <SegmentFilterItem key={i} isActive={activeSegmentList.includes(segment)} segment={segment} onClickSegment={() => onClickSegmentFilter(segment)} />
                    )}
                </div>
                <ExpandDiv isExpanded={isExpended} onClickExpand={() => setExpanded(!isExpended)} />
            </div>
            <Divider />
        </div>
    )
}

export default SegmentFilter;
