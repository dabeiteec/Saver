import React, { useState, useEffect } from "react";
import telegramImg from "../../../../assets/telegram.png";
import mobileImg from "../../../../assets/mobile.png";
import desktopImg from "../../../../assets/desktop.png";
import webImg from "../../../../assets/web.png";
import "../../../global/global.scss";
import "../../../global/css/button.scss";
import "../css/left.scss";
import { Link } from "react-router-dom";

const LeftContainer = () => {
    return (
        <div className="left-container">
            <h1 className="glow-text">
                Universal Saver - <br />
                Сохрани воспоминания
            </h1>
            <span className="glow-text">
                Сохрани все, что тебе хочется у нас
            </span>
            <Link to="./Saver">
                <button className="gradient-button btn-margin">Начать</button>
            </Link>
            <div className="img_links">
                <button className="transparent-button" id="telegram_shadow">
                    <img
                        src={telegramImg}
                        className="pictures_size"
                        alt="telegram"
                    />
                </button>
                <button className="transparent-button" id="mobile_shadow">
                    <img
                        src={mobileImg}
                        className="pictures_size"
                        alt="mobile"
                    />
                </button>
                <button className="transparent-button" id="desktop_shadow">
                    <img
                        src={desktopImg}
                        className="pictures_size"
                        alt="desktop"
                    />
                </button>
                <button className="transparent-button" id="web_shadow">
                    <img src={webImg} className="pictures_size" alt="web" />
                </button>
            </div>
        </div>
    );
};

export default LeftContainer;
