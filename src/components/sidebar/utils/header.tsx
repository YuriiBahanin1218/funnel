import Image from "next/image";

interface SideBarHeaderProps {
    onClear: Function
}

const SideBarHeader: React.FC<SideBarHeaderProps> = ({ onClear }) => {
    return (
        <div className="sidebar-header">
            <div className="sidebar-header-left">
                <Image src="/assets/filter.svg" alt="Filter" width="15" height="15" />
                <div>Filter</div>
            </div>
            <div className="sidebar-header-right" onClick={() => onClear()}>
                <Image src="/assets/trash.svg" alt="Trash" width="10" height="10" />
                <div>clear</div>
            </div>
        </div>
    );
}

export default SideBarHeader;
