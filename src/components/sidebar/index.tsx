'use client'

import { useState, useEffect } from "react";
import SegmentFilter from "./segment";
import CompanySizeFilter from "./companysize";
import LocationFilter from "./location";
import TechnologyFilter from "./technology";
import WebsiteVisitorFilter from "./websitevisitors";
import FundingFilter from "./funding";
import SideBarHeader from "./utils/header";
import CompanyNameFilter from "./companyname";
import JobTitleFilter from "./jobtitle";
import "../../styles/sidebar.css";

interface SidebarProps {
    isPeople: boolean;
}

const SideBar: React.FC<SidebarProps> = ({ isPeople }) => {
    const [selectedSegmentFilter, setSelectedSegmentFilter] = useState([]);
    const [selectedLocationFilter, setSelectedLocationFilter] = useState(['USA']);
    const [selectedCompanySizeFilter, setSelectedCompanySizeFilter] = useState([]);
    const [selectedJobTitleFilter, setSelectedJobTitleFilter] = useState([]);
    const [selectedCompanyNameFilter, setSelectedCompanyNameFilter] = useState([]);

    const onClearAllFilters = () => {
        setSelectedSegmentFilter([]);
        setSelectedLocationFilter([]);
        setSelectedCompanySizeFilter([]);
        setSelectedJobTitleFilter([]);
        setSelectedCompanyNameFilter([]);
    }

    const getFilterList = async () => {
        try {
            const response = await fetch("http://95.163.180.251/api/getFilters?searchId=test_search_id", {
                method: "GET"
            })
            if (response.status === 200) {
                const data = await response.json();
                console.log(data);
            }
        } catch (err: any) {
            console.log(err.message);
        }
        return false;
    }

    useEffect(() => {
        getFilterList();
    }, [])

    return (
        <div className="sidebar">
            <SideBarHeader onClear={() => onClearAllFilters()} />
            {isPeople &&
                <div>
                    <CompanyNameFilter isLocked={false} selectedCompanyNameList={selectedCompanyNameFilter} setSelectedCompanyNameList={setSelectedCompanyNameFilter} />
                    <JobTitleFilter isLocked={false} selectedJobTitleList={selectedJobTitleFilter} setSelectedJobTitleList={setSelectedJobTitleFilter} />
                </div>
            }
            <SegmentFilter isLocked={false} selectedSegmentList={selectedSegmentFilter} setSelectedSegmentList={(e: any) => setSelectedSegmentFilter(e)} />
            <CompanySizeFilter isLocked={false} selectedCompanySizeList={selectedCompanySizeFilter} setSelectedCompanySizeList={setSelectedCompanySizeFilter} />
            <LocationFilter isLocked={false} selectedLocationList={selectedLocationFilter} setSelectedLocationList={(e: any) => setSelectedLocationFilter(e)} />
            <TechnologyFilter isLocked={true} />
            <WebsiteVisitorFilter isLocked={true} />
            <FundingFilter isLocked={true} />
        </div>
    )
}

export default SideBar;