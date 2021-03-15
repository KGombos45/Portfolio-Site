import React, { useState } from 'react'
import './../portfolio.scss';
import "animate.css/animate.compat.css";

import ScrollAnimation from 'react-animate-on-scroll';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Modal from '../../modal/modal';

function Card() {

    const [showModal, setModal] = useState(false);
    const closeModal = () => {
        var modal = document.getElementById("modal");
        modal.classList.add("close");
        var modalBackdrop = document.getElementById("modalBackDrop");
        modalBackdrop.classList.add("close");

        setTimeout(function(){ setModal(false); }, 700);
        
    }

    const [modalData, setData] = useState();

    function toggleModal (item) {
        setModal(true);
        setData(item);
    }


    const Data = [
        {
            "src": "uhone.mp4",
            "svg": "uhone.svg",
            "cardTitle": "UHOne",
            "cardSubtitle": "Javascript/JQuery/HTML/Less/AEM",
            "cardBody": "I was brought on to assist with this project, where our marketing team was working to rebuild our UHOne site as well as convert it from Sitecore to Adobe Experience Manager (AEM).",
            "link": "https://www.uhone.com/"
        },
        {
            "src": "uhone-shop.mp4",
            "svg": "uhone-shop.svg",
            "cardTitle": "UHOne Shop",
            "cardSubtitle": "AngularJS/Javascript/HTML/Bootstrap/SCSS/C#",
            "cardBody": "UHOne Shop is a full-stack website built off of .Net Core/C# with Microsoft SQL Server for the back-end. Front-end utilizes AngularJS, Javascript, custom Boostrap components, HTML, and SCSS.",
            "link": "https://www.uhone.com/shop"
        },
        {
            "src": "portfolio.mp4",
            "svg": "portfolio.svg",
            "cardTitle": "Portfolio",
            "cardSubtitle": "React.js/Javascript/HTML/SCSS",
            "cardBody": "My portfolio site built from the ground up using the React.js framework, Javascript, and basic HTML and SCSS styling.",
            "link": "https://helloimkevingombos.com"
        },
        {
            "src": "agileteams.mp4",
            "svg": "agileteams.svg",
            "cardTitle": "AgileTeams",
            "cardSubtitle": "Angular/Typescript/HTML/Angular Material/SCSS/C#",
            "cardBody": "A full-stack website built off of .Net Core/C# with Microsoft SQL Server for the back-end. Front-end utilizes Angular 7, Angular Material, HTML, and SCSS.",
            "link": "https://agileteams.dev"
        }
    ];


    return (

        <div className="card-container flex row">

            {

                Data.map((item, index) => {

                    if (index % 2) {
                        return (
                            <div className="card-item-container">
                                <ScrollAnimation animateIn='slideInRight' initiallyVisible={false} animateOnce={true} duration={1}>
                                    <div className="card-item">
                                        <div className="card-front">
                                            <img className="card-img" src={item.svg} alt={item.cardTitle}></img> 
                                        </div>
                                        <div className="card-back">

                                            <div className="card-header-text">
                                                {item.cardTitle}
                                                <p>{item.cardSubtitle}</p>
                                            </div>
                                            <div className="card-body-text">
                                                {item.cardBody}
                                            </div>
                                            <Button type="primary" className="view-btn" onClick={() => toggleModal(item)}>
                                                View More
                                                <ArrowRightOutlined />
                                            </Button>     
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>                           
                        )
                    } else {
                        return (
                            <div className="card-item-container">
                                <ScrollAnimation animateIn='slideInLeft' initiallyVisible={false} animateOnce={true} duration={1}>
                                    <div className="card-item">
                                        <div className="card-front">
                                            <img className="card-img" src={item.svg} alt={item.cardTitle}></img> 
                                        </div>
                                        <div className="card-back">

                                            <div className="card-header-text">
                                                {item.cardTitle}
                                                <p>{item.cardSubtitle}</p>
                                            </div>
                                            <div className="card-body-text">
                                                {item.cardBody}
                                            </div>
                                            <Button type="primary" className="view-btn" onClick={() => toggleModal(item)}>
                                                View More
                                                <ArrowRightOutlined />
                                            </Button>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        )
                    }

                })

            }

            <Modal show={showModal} closeModal={closeModal} data={modalData}/>   
        </div>
        
    )
}

export default Card;