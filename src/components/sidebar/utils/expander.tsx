import Image from "next/image";

interface ExpandDivProps {
    isExpanded: boolean;
    onClickExpand: Function;
}

const ExpandDiv: React.FC<ExpandDivProps> = ({ isExpanded, onClickExpand }) => {
    return (
        <div className="filter-expand" onClick={() => onClickExpand()}>
            {isExpanded ? <Image src="/assets/up.svg" alt="Filter" width="15" height="15" /> : <Image src="/assets/down.svg" alt="Filter" width="15" height="15" />}
        </div>
    )
}

export default ExpandDiv;
