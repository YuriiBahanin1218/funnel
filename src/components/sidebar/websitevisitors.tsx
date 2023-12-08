'use client'

import { useState } from "react";
import Divider from "./utils/divider";
import ExpandDiv from "./utils/expander";
import HeaderImage from "./utils/headerimage";

interface WebsiteVisitorFilterProps {
    isLocked: boolean;
}

const WebsiteVisitorFilter: React.FC<WebsiteVisitorFilterProps> = ({ isLocked }) => {
    const [isExpended, setExpanded] = useState(false);

    return (
        <div>
            <div className="sidebar-item">
                <HeaderImage isLocked={isLocked} headerText="Website visitors" />
                <ExpandDiv isExpanded={isExpended} onClickExpand={() => isLocked ? true : setExpanded(!isExpended)} />
            </div>
            <Divider />
        </div>
    )
}

export default WebsiteVisitorFilter;
