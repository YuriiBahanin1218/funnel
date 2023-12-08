
import { Button, Table } from "antd";
import Image from "next/image";
import "../styles/mylisting.css";
import MyListingItem from "@/components/mylistingitem";
import Link from "next/link";

const MyListing = () => {
    return (
        <div className="mylisting-page">
            <div className="item-div">
                <div className="title">My listings</div>
                <MyListingItem id={1} peopleCount={4860} companyCount={235} createdDate="16.12.2023" />
                <MyListingItem id={2} peopleCount={4860} companyCount={235} createdDate="16.12.2023" />
                <MyListingItem id={3} peopleCount={4860} companyCount={235} createdDate="16.12.2023" />
                <div className="unlock-div">
                    2/5 listing used.&nbsp; <Link className="unlock-link" href="">Unlock</Link> &nbsp;unlimited listings
                </div>
            </div>
            <div className="plan-div">
                <div className="plan-div-title">Get a plan to unlock all features:</div>
                <div>
                    <div className="plan-div-item">
                        <Image src="/assets/plan_icon1.svg" alt="Company" width="25" height="25" />
                        <p>Unlimited list of employers</p>
                    </div>
                    <div className="plan-div-item">
                        <Image src="/assets/plan_icon1.svg" alt="Company" width="25" height="25" />
                        <p>Download PDF Listings</p>
                    </div>
                    <div className="plan-div-item">
                        <Image src="/assets/plan_icon1.svg" alt="Company" width="25" height="25" />
                        <p>Advanced search by Techologies, Funding,  etc</p>
                    </div>
                    <div className="plan-div-item">
                        <Image src="/assets/plan_icon1.svg" alt="Company" width="25" height="25" />
                        <p>Unlimited listings</p>
                    </div>
                </div>
                <Button className="plan-choose-div">
                    <p className="plan-choose-title">Choose a plan</p>
                    <p className="plan-choose-price">from 40$ / mo</p>
                </Button>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ }) => {
    // Fetch data from external API
    const res = await fetch(`http://95.163.180.251/api/getUserInfo`)
    const data = await res.json();
    console.log(data);

    // Pass data to the page via props
    return { props: { data } }
}

export default MyListing;