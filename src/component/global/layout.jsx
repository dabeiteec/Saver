import { Header } from "./jsx/header";
import { AboutPage } from "../about-page/about-page";
import { SaverPage } from "../saver-page/saver-page";
import { NotFoundPage } from "../not-found-page/not-found";
import { Route, Routes } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<AboutPage />} />
                <Route path="/notFound" element={<NotFoundPage />} />
                <Route path="/Save" element={<SaverPage />} />
            </Routes>
        </>
    );
};
