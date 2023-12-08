'use client'

import { useState } from "react";
import Divider from "./utils/divider";
import ExpandDiv from "./utils/expander";
import HeaderImage from "./utils/headerimage";

const TechFilter = () => {
    return (
        <div className="tech-filter">
            get a plan to unlock all features
        </div>
    )
}

interface TechnologyFilterProps {
    isLocked: boolean;
}

const TechnologyFilter: React.FC<TechnologyFilterProps> = ({ isLocked }) => {
    const [isExpended, setExpanded] = useState(true);

    return (
        <div>
            <div className="sidebar-item">
                <HeaderImage isLocked={isLocked} headerText="Technologies" />
                <TechFilter />
                <ExpandDiv isExpanded={isExpended} onClickExpand={() => isLocked ? true : setExpanded(!isExpended)} />
            </div>
            <Divider />
        </div>
    )
}

export default TechnologyFilter;
