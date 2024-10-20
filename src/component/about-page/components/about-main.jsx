import React from "react";
import LeftContainer from "./jsx/left-container";
import { ImgCase } from "./jsx/img-container";
import Footer from "./jsx/about-foother";
import "./about-main.scss";

export const AboutMain = () => {
    return (
        <>
            <main className="main">
                <div className="container">
                    <LeftContainer />
                    <ImgCase />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};
