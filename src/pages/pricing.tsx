'use client'

import { useState } from "react";
import { Button } from 'antd';

import '../styles/pricing.css';
import Divider from "@/components/sidebar/utils/divider";

const Pricing = () => {

    const [activeBilling, setActiveBilling] = useState(1);

    const onChangeBilling = (e: any) => {
        setActiveBilling(e);
    }

    return (
        <div className="pricing-page">
            <div className="pricing-title">Pricing</div>
            <div className="pricing-section">
                <div className="category-div">
                    <div className="category-switch">
                        <Button className={activeBilling === 1 ? "category-switch-button category-switch-active" : "category-switch-button"} onClick={() => onChangeBilling(1)}>
                            Monthly billing
                        </Button>
                        <Button className={activeBilling === 2 ? "category-switch-button category-switch-active" : "category-switch-button"} onClick={() => onChangeBilling(2)}>
                            Annual billing
                        </Button>
                    </div>
                    <div className="badge-switch">save 20%</div>
                </div>
                <div className="pricing-list">
                    <div className="pricing-item item1">
                        <div className="pricing-item-content">
                            <div className="pricing-item-header">
                                <div className="pricing-item-title">Basic</div>
                                <div className="pricing-item-price">49$</div>
                            </div>
                            <Divider />
                            <div className="pricing-item-credit">
                                <p>Unlimited Email Credits</p>
                                <p>60 Mobile Credits / year</p>
                                <p>120 Export Credits / year</p>
                            </div>
                            <Divider />
                            <Button className="start-button item1-button">Get Started</Button>
                            <div className="pricing-item-text">
                                Basic Sequence Automation (2 Sequence Limit)<br />
                                Basic Filters<br />
                                Buying Intent (1 Intent Topic Limit)<br />
                                AI-Assisted Email Writing (5k words monthly limit)<br />
                                LinkedIn Extension<br />
                                Send 250 Emails/day<br />
                                Gmail Extension<br />
                                Deals<br />
                                CSV Export<br />
                                Zapier Integration<br />
                                Limited API Access<br />
                                Advanced Salesforce & HubSpot Integration (Bi-Directional)<br />
                                Conversations (150 minutes recording limit)<br />
                                Plays (2 Plays Limit)<br />
                            </div>
                        </div>
                    </div>

                    <div className="pricing-item item2">
                        <div className="pricing-item-content">
                            <div className="pricing-item-header">
                                <div className="pricing-item-title">Pro</div>
                                <div className="pricing-item-price">169$</div>
                            </div>
                            <Divider />
                            <div className="pricing-item-credit">
                                <p>Unlimited Email Credits</p>
                                <p>60 Mobile Credits / year</p>
                                <p>120 Export Credits / year</p>
                            </div>
                            <Divider />
                            <Button className="start-button item2-button">Get Started</Button>
                            <div className="pricing-item-text">
                                Basic Sequence Automation (2 Sequence Limit)<br />
                                Basic Filters<br />
                                Buying Intent (1 Intent Topic Limit)<br />
                                AI-Assisted Email Writing (5k words monthly limit)<br />
                                LinkedIn Extension<br />
                                Send 250 Emails/day<br />
                                Gmail Extension<br />
                                Deals<br />
                                CSV Export<br />
                                Zapier Integration<br />
                                Limited API Access<br />
                                Advanced Salesforce & HubSpot Integration (Bi-Directional)<br />
                                Conversations (150 minutes recording limit)<br />
                                Plays (2 Plays Limit)<br />
                            </div>
                        </div>
                    </div>

                    <div className="pricing-item item3">
                        <div className="pricing-item-content">
                            <div className="pricing-item-header">
                                <div className="pricing-item-title">Enterprise</div>
                                <div className="pricing-item-price-div">
                                    <div className="pricing-item-price-decline">750$</div>
                                    <div className="pricing-item-price">299$</div>
                                </div>
                            </div>
                            <Divider />
                            <div className="pricing-item-credit">
                                <p>Unlimited Email Credits</p>
                                <p>60 Mobile Credits / year</p>
                                <p>120 Export Credits / year</p>
                            </div>
                            <Divider />
                            <Button className="start-button item3-button">
                                Get Started
                                <div className="badge-button">40% sale</div>
                            </Button>
                            <div className="pricing-item-text">
                                Basic Sequence Automation (2 Sequence Limit)<br />
                                Basic Filters<br />
                                Buying Intent (1 Intent Topic Limit)<br />
                                AI-Assisted Email Writing (5k words monthly limit)<br />
                                LinkedIn Extension<br />
                                Send 250 Emails/day<br />
                                Gmail Extension<br />
                                Deals<br />
                                CSV Export<br />
                                Zapier Integration<br />
                                Limited API Access<br />
                                Advanced Salesforce & HubSpot Integration (Bi-Directional)<br />
                                Conversations (150 minutes recording limit)<br />
                                Plays (2 Plays Limit)<br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;