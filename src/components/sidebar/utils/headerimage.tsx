'use client'

import Image from "next/image";

interface HeaderImageProps {
    isLocked: boolean;
    headerText: string;
}

const HeaderImage: React.FC<HeaderImageProps> = ({ isLocked, headerText }) => {
    return (
        <div className={isLocked ? "sidebar-item-label locked-label" : "sidebar-item-label"}>
            {headerText}
            <Image src={isLocked ? "/assets/lock.svg" : "/assets/information.svg"} alt="Info" width="15" height="15" />
        </div>
    )
}

export default HeaderImage;
