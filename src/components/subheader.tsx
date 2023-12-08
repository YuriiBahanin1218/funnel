import Image from "next/image";
import { Button } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';
import "../styles/subheader.css";

interface SubHeaderProps {
    activeCategory: number; // 1 company, 2 people
    onChangeCategory: Function;
}

const SubHeader: React.FC<SubHeaderProps> = ({ activeCategory, onChangeCategory }) => {
    return (
        <div className="sub-header">
            <div className="flex">
                <div className="category-switch">
                    <Button className={activeCategory === 1 ? "category-switch-button category-switch-active" : "category-switch-button"} onClick={() => onChangeCategory(1)}>
                        <Image src="/assets/company.svg" alt="Filter" width="15" height="15" />
                        Companies (12)
                    </Button>
                    <Button className={activeCategory === 2 ? "category-switch-button category-switch-active" : "category-switch-button"} onClick={() => onChangeCategory(2)}>
                        People (36)
                        <Image src="/assets/active_man.svg" alt="Filter" width="15" height="15" />
                    </Button>
                </div>
                <Button className="sub-header-button">
                    <Image src="/assets/download.svg" alt="Filter" width="15" height="15" />
                    Download list
                </Button>
            </div>
            <div>
                <Button className="sub-header-button">
                    <Image src="/assets/biglock.svg" alt="Filter" width="15" height="15" />
                    <p className="font-bold underline mr-auto">get a plan</p> to unlock all features
                </Button>
            </div>
        </div>
    )
}

export default SubHeader;
