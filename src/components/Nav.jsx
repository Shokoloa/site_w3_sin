import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/favicon.webp';
import { discord, link, house, staff } from '../Icons';

const SVGStars = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" width="24" height="24">
        <path style={{ mixBlendMode: 'screen' }} d="M7.9987 5.41658C7.9987 5.27276 7.88211 5.15617 7.73828 5.15617C6.87533 5.15617 6.17578 4.45662 6.17578 3.59367C6.17578 3.44984 6.05919 3.33325 5.91536 3.33325C5.77154 3.33325 5.65495 3.44984 5.65495 3.59367C5.65495 4.45662 4.9554 5.15617 4.09245 5.15617C3.94862 5.15617 3.83203 5.27276 3.83203 5.41658C3.83203 5.56041 3.94862 5.677 4.09245 5.677C4.9554 5.677 5.65495 6.37655 5.65495 7.2395C5.65495 7.38333 5.77154 7.49992 5.91536 7.49992C6.05919 7.49992 6.17578 7.38333 6.17578 7.2395C6.17578 6.37655 6.87533 5.677 7.73828 5.677C7.88211 5.677 7.9987 5.56041 7.9987 5.41658Z" fill="#EFB442" />
        <path d="M7.9987 5.41658C7.9987 5.27276 7.88211 5.15617 7.73828 5.15617C6.87533 5.15617 6.17578 4.45662 6.17578 3.59367C6.17578 3.44984 6.05919 3.33325 5.91536 3.33325C5.77154 3.33325 5.65495 3.44984 5.65495 3.59367C5.65495 4.45662 4.9554 5.15617 4.09245 5.15617C3.94862 5.15617 3.83203 5.27276 3.83203 5.41658C3.83203 5.56041 3.94862 5.677 4.09245 5.677C4.9554 5.677 5.65495 6.37655 5.65495 7.2395C5.65495 7.38333 5.77154 7.49992 5.91536 7.49992C6.05919 7.49992 6.17578 7.38333 6.17578 7.2395C6.17578 6.37655 6.87533 5.677 7.73828 5.677C7.88211 5.677 7.9987 5.56041 7.9987 5.41658Z" fill="#EFB442" fillOpacity="0.5" />
        <path style={{ mixBlendMode: 'screen' }} d="M14.25 4.99992C14.25 4.7698 14.0634 4.58325 13.8333 4.58325C13.6033 4.58325 13.4167 4.7698 13.4167 4.99992C13.4167 7.07065 11.7377 8.74992 9.66667 8.74992C9.43658 8.74992 9.25 8.9365 9.25 9.16659C9.25 9.39667 9.43658 9.58325 9.66667 9.58325C11.7378 9.58325 13.4167 11.2618 13.4167 13.3333C13.4167 13.5633 13.6033 13.7499 13.8333 13.7499C14.0634 13.7499 14.25 13.5633 14.25 13.3333C14.25 11.2617 15.9284 9.58325 18 9.58325C18.2301 9.58325 18.4167 9.39667 18.4167 9.16659C18.4167 8.9365 18.2301 8.74992 18 8.74992C15.9285 8.74992 14.25 7.07069 14.25 4.99992Z" fill="#EFB442" />
        <path d="M14.25 4.99992C14.25 4.7698 14.0634 4.58325 13.8333 4.58325C13.6033 4.58325 13.4167 4.7698 13.4167 4.99992C13.4167 7.07065 11.7377 8.74992 9.66667 8.74992C9.43658 8.74992 9.25 8.9365 9.25 9.16659C9.25 9.39667 9.43658 9.58325 9.66667 9.58325C11.7378 9.58325 13.4167 11.2618 13.4167 13.3333C13.4167 13.5633 13.6033 13.7499 13.8333 13.7499C14.0634 13.7499 14.25 13.5633 14.25 13.3333C14.25 11.2617 15.9284 9.58325 18 9.58325C18.2301 9.58325 18.4167 9.39667 18.4167 9.16659C18.4167 8.9365 18.2301 8.74992 18 8.74992C15.9285 8.74992 14.25 7.07069 14.25 4.99992Z" fill="#EFB442" fillOpacity="0.5" />
        <path style={{ mixBlendMode: 'screen' }} d="M6.75 10.4167C6.75 10.1866 6.56345 10 6.33333 10C6.10322 10 5.91667 10.1866 5.91667 10.4167C5.91667 11.7974 4.79738 12.9167 3.41667 12.9167C3.18655 12.9167 3 13.1032 3 13.3333C3 13.5634 3.18655 13.75 3.41667 13.75C4.79738 13.75 5.91667 14.8692 5.91667 16.25C5.91667 16.4801 6.10322 16.6667 6.33333 16.6667C6.56345 16.6667 6.75 16.4801 6.75 16.25C6.75 14.8692 7.86928 13.75 9.25 13.75C9.48008 13.75 9.66667 13.5634 9.66667 13.3333C9.66667 13.1032 9.48008 12.9167 9.25 12.9167C7.86928 12.9167 6.75 11.7974 6.75 10.4167Z" fill="#EFB442" />
        <path d="M6.75 10.4167C6.75 10.1866 6.56345 10 6.33333 10C6.10322 10 5.91667 10.1866 5.91667 10.4167C5.91667 11.7974 4.79738 12.9167 3.41667 12.9167C3.18655 12.9167 3 13.1032 3 13.3333C3 13.5634 3.18655 13.75 3.41667 13.75C4.79738 13.75 5.91667 14.8692 5.91667 16.25C5.91667 16.4801 6.10322 16.6667 6.33333 16.6667C6.56345 16.6667 6.75 16.4801 6.75 16.25C6.75 14.8692 7.86928 13.75 9.25 13.75C9.48008 13.75 9.66667 13.5634 9.66667 13.3333C9.66667 13.1032 9.48008 12.9167 9.25 12.9167C7.86928 12.9167 6.75 11.7974 6.75 10.4167Z" fill="#EFB442" fillOpacity="0.5" />
    </svg>
);

export const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hidden, setHidden] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [dragging, setDragging] = useState(false);
    const startXRef = useRef(0);
    const currentXRef = useRef(0);
    const sidebarRef = useRef(null);

    const checkActive = (href) => href === location.pathname;

    useEffect(() => {
        if (window.innerWidth > 767) {
            import('gsap').then(({ gsap }) => {
                gsap.from('#navcontainer', {
                    y: '-200%',
                    opacity: 0,
                    duration: 1,
                    ease: 'slowMo'
                });
            });
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 767) setIsMobile(true);
        else setIsMobile(false);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 200) {
                setHidden(true);
            } else setHidden(false);
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll); };
    }, [lastScrollY]);

    const openSidebar = () => {
        if (sidebarRef.current) {
            sidebarRef.current.style.transition = "transform 0.3s ease";
            sidebarRef.current.style.transform = "translateX(0)";
        }
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        if (sidebarRef.current) {
            sidebarRef.current.style.transition = "transform 0.3s ease";
            sidebarRef.current.style.transform = `translateX(-100%)`;
        }
        setSidebarOpen(false);
    };

    useEffect(() => {
        if (!isMobile || !sidebarRef.current) return;

        const sidebar = sidebarRef.current;

        const handleTouchStart = (e) => {
            startXRef.current = e.touches[0].clientX;
            currentXRef.current = startXRef.current;
            setDragging(true);
            sidebar.style.transition = "none";
        };

        const handleTouchMove = (e) => {
            if (!dragging) return;
            currentXRef.current = e.touches[0].clientX;
            const deltaX = currentXRef.current - startXRef.current;
            let translateX;

            if (sidebarOpen) translateX = Math.min(0, deltaX);
            else translateX = Math.min(0, deltaX - sidebar.offsetWidth);

            translateX = Math.max(translateX, -sidebar.offsetWidth);
            sidebar.style.transform = `translateX(${translateX}px)`;
        };

        const handleTouchEnd = () => {
            setDragging(false);
            sidebar.style.transition = "transform 0.3s ease";
            const swipeDistance = currentXRef.current - startXRef.current;

            if (sidebarOpen && swipeDistance < -50) closeSidebar();
            else if (!sidebarOpen && swipeDistance > 50) openSidebar();
            else (sidebarOpen ? openSidebar() : closeSidebar());
        };

        document.addEventListener("touchstart", handleTouchStart);
        document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("touchend", handleTouchEnd);

        return () => {
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleTouchEnd);
        };
    }, [isMobile, sidebarOpen, dragging]);

    return (
        <div>
            {isMobile ? (
                <>
                    <button onClick={openSidebar} className="fixed left-1.5 top-1/2 -translate-y-1/2">
                        <i className="fa-solid fa-chevron-right text-slate-400"></i>
                    </button>

                    <section ref={sidebarRef} id="sidebar-mobile"
                        className={`fixed left-0 top-0 h-full w-full bg-slate-800 z-9999 overflow-y-auto transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                        <button onClick={closeSidebar} className="fixed right-1.5 top-1/2 -translate-y-1/2">
                            <i className="fa-solid fa-chevron-left text-slate-400"></i>
                        </button>

                        <nav className="p-8 pt-12">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center">
                                    <img src="https://i.ibb.co/Q9n0CgL/favicon.jpg" className="h-10 w-10 rounded-full" draggable="false"
                                        alt="Logo" />
                                    <h1 className="ml-3 text-xl font-bold text-white">Caca</h1>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <button onClick={() => window.location.href = '/'}
                                    className={`w-full text-left space-x-3 px-4 py-3 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 flex items-center ${checkActive('/') ? 'bg-slate-700/50 text-white' : 'hover:bg-slate-700/50 text-slate-300 hover:text-white'}`}>
                                    <i className="fa-solid fa-home w-4"></i>
                                    <span className="text-sm">
                                        Label
                                    </span>
                                </button>

                                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 mt-4">
                                    Label
                                </h3>

                                <button onClick={() => window.location.href = '/bumps'}
                                    className={`w-full text-left space-x-3 px-4 py-3 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 flex items-center ${checkActive('/bumps') ? 'bg-slate-700/50 text-white' : 'hover:bg-slate-700/50 text-slate-300 hover:text-white'}`}>
                                    <i className="fa-solid fa-user-plus w-4"></i>
                                    <span className="text-sm">
                                        Label
                                    </span>
                                </button>

                                <button onClick={() => window.location.href = '/votes'}
                                    className={`w-full text-left space-x-3 px-4 py-3 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 flex items-center ${checkActive('/votes') ? 'bg-slate-700/50 text-white' : 'hover:bg-slate-700/50 text-slate-300 hover:text-white'}`}>
                                    <i className="fa-regular fa-compass w-4"></i>
                                    <span className="text-sm">
                                        Label
                                    </span>
                                </button>

                                <button onClick={() => window.location.href = '/apps'}
                                    className={`w-full text-left space-x-3 px-4 py-3 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 flex items-center ${checkActive('/apps') ? 'bg-slate-700/50 text-white' : 'hover:bg-slate-700/50 text-slate-300 hover:text-white'}`}>
                                    <i className="fa-solid fa-ticket w-4"></i>
                                    <span className="text-sm">
                                        Label
                                    </span>
                                </button>

                                <hr />

                                <button onClick={() => window.location.href = '/team'}
                                    className={`w-full text-left space-x-3 px-4 py-3 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 flex items-center ${checkActive('/team') ? 'bg-slate-700/50 text-white' : 'hover:bg-slate-700/50 text-slate-300 hover:text-white'}`}>
                                    <i className="fa-solid fa-chart-line w-4"></i>
                                    <span className="text-sm">
                                        Label
                                    </span>
                                </button>

                                <button onClick={() => window.location.href = '/premium'}
                                    className={`w-full text-left space-x-3 px-4 py-3 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 flex items-center ${checkActive('/premium') ? 'bg-slate-700/50 text-white' : 'hover:bg-slate-700/50 text-slate-300 hover:text-white'}`}>
                                    <i className="fa-regular fa-square-check w-4"></i>
                                    <span className="text-sm">
                                        Label
                                    </span>
                                </button>
                            </div>
                        </nav>
                    </section>
                </>
            ) : (
                <header id="nav-menu" className="fixed w-full z-999">
                    <section id="navcontainer" className={`flex items-center absolute left-1/2 -translate-x-1/2 transition-[top] duration-300 ease-in-out bg-(--card-background)/80 h-14 backdrop-blur-sm rounded-xl px-8 shadow-lg border border-slate-700/30 p-2 ${hidden ? 'top-[-100px]' : 'top-[30px]'}`}>
                        <article className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                            <img className="w-10 h-auto ml-[5px] mr-2.5 my-0" src={logo} draggable={false} alt="Logo" width={100} height={100} />
                            <h1 className="text-base font-[inter] font-semibold text-(--text-color)">Caca</h1>
                        </article>
                        <span className="h-4 rounded-xs border-2 border-solid border-zinc-600 mx-4" />
                        <nav>
                            <ul className="flex items-center list-none">
                                <li onClick={() => navigate('/')} className={`group relative flex items-center flex-col transition-all duration-500 ease-in-out mx-[15px] rounded-sm border border-solid border-transparent cursor-pointer ml-0 ${checkActive('/') ? 'active' : ''}`}>
                                    <i className="w-[23px] h-[23px] text-(--text-grey) transition-all duration-500 ease-in-out group-hover:text-(--primary) group-[.active]:text-(--primary)" dangerouslySetInnerHTML={{ __html: house }} />
                                    <span className="w-[120%] mt-1 rounded-xs h-1 group-[.active]:bg-(--primary)"></span>
                                    <span className="invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-(--card-background)/80 border-2 border-(--card-border)/30 text-center rounded-md px-[13px] py-[7px] absolute bottom-[-50px] left-1/2 transform translate-x-[-50%] translate-y-2.5 group-hover:translate-y-0 transition-transform duration-300 ease-in-out whitespace-nowrap max-w-[200px] font-semibold text-[13px] font-inter text-(--text-color) z-10">
                                        Label
                                    </span>
                                </li>
                                <li onClick={() => navigate('/team')} className={`group relative flex items-center flex-col transition-all duration-500 ease-in-out mx-[15px] rounded-sm border border-solid border-transparent cursor-pointer ${checkActive('/team') ? 'active' : ''}`}>
                                    <i className="w-[23px] h-[23px] text-(--text-grey) transition-all duration-500 ease-in-out group-hover:text-(--primary) group-[.active]:text-(--primary)" dangerouslySetInnerHTML={{ __html: staff }} />
                                    <span className="w-[120%] mt-1 rounded-xs h-1 group-[.active]:bg-(--primary)"></span>
                                    <span className="invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-(--card-background)/80 border-2 border-(--card-border)/30 text-center rounded-md px-[13px] py-[7px] absolute bottom-[-50px] left-1/2 transform translate-x-[-50%] translate-y-2.5 group-hover:translate-y-0 transition-transform duration-300 ease-in-out whitespace-nowrap max-w-[200px] font-semibold text-[13px] font-inter text-(--text-color) z-10">
                                        Label
                                    </span>
                                </li>
                                <li onClick={() => navigate('/premium')} className={`group relative flex items-center flex-col transition-all duration-500 ease-in-out mx-[15px] rounded-sm border border-solid border-transparent cursor-pointer ${checkActive('/premium') ? 'active' : ''}`} style={{ marginRight: '0' }}>
                                    <i>{SVGStars}</i>
                                    <span className="w-[120%] mt-1 rounded-xs h-1 group-[.active]:bg-amber-400"></span>
                                    <span className="invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-(--card-background)/80 border-2 border-(--card-border)/30 text-center rounded-md px-[13px] py-[7px] absolute bottom-[-50px] left-1/2 transform translate-x-[-50%] translate-y-2.5 group-hover:translate-y-0 transition-transform duration-300 ease-in-out whitespace-nowrap max-w-[200px] font-semibold text-[13px] font-inter text-(--text-color) z-10">
                                        Label
                                    </span>
                                </li>
                            </ul>
                        </nav>
                        <span className="h-4 rounded-xs border-2 border-solid border-zinc-600 mx-4" />
                        <article className="flex items-center">
                            <div className="group relative flex items-center flex-col transition-all duration-500 ease-in-out mx-[25px] rounded-sm border border-solid border-transparent cursor-pointer ml-0" onClick={() => window.open('support')}>
                                <i className="w-[23px] h-[23px] text-(--text-grey) transition-all duration-500 ease-in-out group-hover:text-(--primary)" dangerouslySetInnerHTML={{ __html: discord }}></i>
                                <span className="invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-(--card-background)/80 border-2 border-(--card-border)/30 text-center rounded-md px-[13px] py-[7px] absolute bottom-[-50px] left-1/2 transform translate-x-[-50%] translate-y-2.5 group-hover:translate-y-0 transition-transform duration-300 ease-in-out whitespace-nowrap max-w-[200px] font-semibold text-[13px] font-inter text-(--text-color) z-10">
                                    Label
                                </span>
                            </div>
                            <div className="group relative flex items-center flex-col transition-all duration-500 ease-in-out mx-[25px] rounded-sm border border-solid border-transparent cursor-pointer mr-0 ml-0" onClick={() => window.open('invite')}>
                                <i className="w-[23px] h-[23px] text-(--text-grey) transition-all duration-500 ease-in-out group-hover:text-(--primary)" dangerouslySetInnerHTML={{ __html: link }}></i>
                                <span className="invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-(--card-background)/80 border-2 border-(--card-border)/30 text-center rounded-md px-[13px] py-[7px] absolute bottom-[-50px] left-1/2 transform translate-x-[-50%] translate-y-2.5 group-hover:translate-y-0 transition-transform duration-300 ease-in-out whitespace-nowrap max-w-[200px] font-semibold text-[13px] font-inter text-(--text-color) z-10">
                                    Label
                                </span>
                            </div>
                            <span className="h-4 rounded-xs border-2 border-solid border-zinc-600 mx-4" />
                        </article>
                    </section>
                </header >
            )}
        </div >
    );
};