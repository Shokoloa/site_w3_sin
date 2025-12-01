import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import gsap from "gsap";
import img from '../assets/images/404.svg';

export const Error = ({ saveError }) => {
    let { error } = useParams();
    const [view, setView] = useState(null);
    const errorList = ['404', '403', '500', '503'];

    const [svgContent, setSvgContent] = useState(null);

    useEffect(() => {
        document.getElementById('nav-menu').style.display = 'none';
        const bg = document.getElementById('globalbackgroundimage');
        if (bg) bg.style.display = 'none';
        if (!error && saveError) error = saveError;

        if (errorList.includes(error)) setView(error);
        else setView(null);
    });

    useEffect(() => {
        if (view !== '404' && view !== null) return;
        const fetchSVG = async () => {
            try {
                const response = await fetch(img);
                const svgText = await response.text();
                setSvgContent(svgText);
            } catch (error) { console.error(error); }
        };

        fetchSVG();
    }, []);

    useEffect(() => {
        if (view !== '404' && view !== null) return;
        const animateSVG = () => {
            if (svgContent) {
                gsap.to(["#headStripe", "#spaceman", "#craterSmall", "#craterBig", "#planet"], {
                    y: 0.5,
                    rotation: 1,
                    yoyo: true,
                    repeat: -1,
                    ease: "sine.inOut",
                    duration: 1
                });

                gsap.to("#planet", {
                    rotation: -2,
                    yoyo: true,
                    repeat: -1,
                    duration: 1,
                    ease: "sine.inOut",
                    transformOrigin: "50% 50%"
                });

                gsap.to("#starsBig g", {
                    rotation: "random(-30,30)",
                    transformOrigin: "50% 50%",
                    yoyo: true,
                    repeat: -1,
                    ease: "sine.inOut"
                });

                gsap.fromTo("#starsSmall g", { scale: 0 }, { scale: 1, yoyo: true, repeat: -1, stagger: 0.1 });

                gsap.to(["#circlesSmall circle", "#circlesBig circle"], {
                    y: -4,
                    yoyo: true,
                    duration: 1,
                    ease: "sine.inOut",
                    repeat: -1
                });

                gsap.set("#glassShine", { x: -68 });

                gsap.to("#glassShine", {
                    x: 80,
                    duration: 2,
                    rotation: -30,
                    ease: "expo.inOut",
                    transformOrigin: "50% 50%",
                    repeat: -1,
                    repeatDelay: 8,
                    delay: 2
                });
            }
        };

        animateSVG();
    }, [svgContent]);

    const redirectButtons = () => {
        return (
            <article className="mt-[5vh] flex justify-center">
                <button className="px-5 py-2.5 mx-2.5 my-0 text-(--text-color) font-semibold text-base font-[inter] rounded-md transition-all duration-300 ease cursor-pointer bg-slate-800 border border-slate-700/30 hover:bg-slate-800/50" onClick={() => { window.history.back(); setTimeout(() => { location.reload(); }, 100) }}>Précédent</button>
                <button className="px-5 py-2.5 mx-2.5 my-0 text-(--text-color) font-semibold text-base font-[inter] rounded-md transition-all duration-300 ease cursor-pointer bg-slate-800 border border-slate-700/30 hover:bg-slate-800/50" onClick={() => window.location.href = '/'}>Accueil</button>
            </article>
        )
    }

    return (
        <main>
            <section className="errorBackground perspective-[1600px] text-transparent overflow-hidden flex justify-center items-center -z-10 inset-0 absolute pointer-events-none">
                <div></div>
            </section>
            <section className="absolute top-1/2 left-1/2 -translate-1/2 text-center">
                {view === '404' || view === null ? (
                    <div>
                        <div>
                            <div className="row flex items-center flex-row">
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: svgContent }} />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-[mont] text-white mt-2 mb-1">Oops! Vous vous êtes perdus.</h1>
                                    <p className="text-base font-[inter] text-slate-300">La page <code>{useLocation().pathname}</code> n'existe pas. Comment êtes-vous arrivé ici est un mystère.</p>
                                    {redirectButtons()}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : view === '403' ? (
                    <div>
                        <h1 className="text-3xl font-[mont] text-white mt-2 mb-1">🚨 Oops! Vous n'avez pas accès à ce contenu. 🚨</h1>
                        <p className="text-base font-[inter] text-slate-300">Cette page et tous les liens liés à celle-ci sont inacessible sans une clé d'authentification.</p>
                        {redirectButtons()}
                    </div>
                ) : view === '500' ? (
                    <div>
                        <h1 className="text-3xl font-[mont] text-white mt-2 mb-1">🚨 Oops... Quelque chose s'est mal passé de notre côté. 🚨</h1>
                        <p className="text-base font-[inter] text-slate-300">Notre serveur a rencontré un problème inattendu. Essayez de recharger la page ou revenez plus tard.</p>
                        {redirectButtons()}
                    </div>
                ) : view === '503' ? (
                    <div>
                        <h1 className="text-3xl font-[mont] text-white mt-2 mb-1">🚨 Oops... Ce service est momentanément indisponible. 🚨</h1>
                        <p className="text-base font-[inter] text-slate-300">Cela peut être dû à une maintenance ou à une surcharge. Réessayez dans quelques instants !</p>
                        {redirectButtons()}
                    </div>
                ) : (<></>)}
            </section>
        </main>
    )
}