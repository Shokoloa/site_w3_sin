import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Snowfall from 'react-snowfall'

// CSS
import "./assets/styles/main.css";

const lazyWithDelay = (importFunc, delay = 0) => {
    return lazy(() =>
        Promise.all([
            importFunc(),
            new Promise((resolve) => setTimeout(resolve, delay)),
        ]).then(([module]) => module)
    );
};

// Components
import { Background } from "./components/Background";
const NavBar = lazyWithDelay(() => import("./components/Nav").then(module => ({ default: module.NavBar })), 500);
const Konami = lazyWithDelay(() => import("./components/Konami").then(module => ({ default: module.Konami })));
const ScrollToTop = lazyWithDelay(() => import("./components/ScrollToTop").then(module => ({ default: module.ScrollToTop })));

// Pages
const Home = lazyWithDelay(() => import("./pages/Home").then(module => ({ default: module.Home })));
const Secret = lazyWithDelay(() => import("./pages/Secret").then(module => ({ default: module.Secret })));

// Errors
const Error = lazyWithDelay(() => import("./pages/Error").then(module => ({ default: module.Error })));
import ErrorBoundary from "./components/ErrorBoundary";

const Loader = () => {
    return (
        <main>
            <Background />
            <section className="loader">
                <div className="circle">
                    <div className="dot"></div>
                    <div className="outline"></div>
                </div>
                <div className="circle">
                    <div className="dot"></div>
                    <div className="outline"></div>
                </div>
                <div className="circle">
                    <div className="dot"></div>
                    <div className="outline"></div>
                </div>
                <div className="circle">
                    <div className="dot"></div>
                    <div className="outline"></div>
                </div>
            </section>
        </main >
    )
};

const Content = () => {
    return (
        <ErrorBoundary>
            <div className="hover:select-none hover:cursor-default" style={{ transitionDuration: '1s' }}>
                <Background />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/secret" element={<Secret />} />

                    <Route path="/error/:error" element={<Error />} />
                    <Route path="*" element={<Error />} />
                </Routes >
                <ScrollToTop />
                {window.innerWidth > 767 && new Date().getMonth() === 11 ?
                    <div className="fixed inset-0 -z-10 overflow-hidden">
                        <Snowfall className="absolute inset-0 bg-linear-to-br" snowflakeCount={100} />
                    </div>
                    : null}
                <Konami />
            </div >
        </ErrorBoundary>
    )
};

export const App = () => {
    return (
        <Router>
            <Suspense fallback={<Loader />}>
                <Content />
            </Suspense>
        </Router >
    )
}