'use client'

import Image from "next/image";
import { Input } from 'antd';
import { useEffect, useState } from "react";
import HeaderImage from "./utils/headerimage";
import Divider from "./utils/divider";

interface LocationFilterProps {
    isLocked: boolean;
    selectedLocationList: string[];
    setSelectedLocationList: Function;
}

const LocationFilter: React.FC<LocationFilterProps> = ({ isLocked, selectedLocationList, setSelectedLocationList }) => {

    const [locations, setLocations] = useState<string[]>(selectedLocationList);
    const [locationText, setLocationText] = useState<string>('');

    useEffect(() => {
        setLocations(selectedLocationList);
    }, [selectedLocationList]);

    const addLocation = () => {
        setLocations([...locations, locationText]);
        setSelectedLocationList([...locations, locationText]);
        setLocationText('');
    }

    const deleteLocation = (pos: any) => {
        setLocations(locations.filter((x, i) => i !== pos));
        setSelectedLocationList(locations.filter((x, i) => i !== pos));
    }

    return (
        <div>
            <div className="sidebar-item">
                <HeaderImage isLocked={isLocked} headerText="HQ Location" />
                <Input
                    value={locationText}
                    onChange={e => setLocationText(e.target.value)}
                    placeholder="Insert location"
                    suffix={<Image src="/assets/location.svg" alt="Location" width="15" height="15" />}
                    onPressEnter={addLocation}
                    className="location-text"
                />
                <div className="location-list">
                    {locations.map((item, i) => (
                        <div className="location-item" key={i} onClick={() => deleteLocation(i)}>
                            {item}
                            <Image className="ml-2" src="/assets/trash.svg" alt="Trash" width="10" height="10" />
                        </div>
                    ))}
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default LocationFilter;
