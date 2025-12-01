import { useNavigate } from 'react-router';
import { comments, headset } from '../Icons';

export const Home = () => {
    const navigate = useNavigate();

    return (
        <main>
            <section className="absolute top-1/2 left-1/2 -translate-1/2">
                <h1 className="font-[mont] text-3xl text-(--text-color) text-center">Oeuvres d'art<br /><span className="markedtext">Sacré Coeur</span></h1>
                <article className="flex items-center gap-5 mt-5">
                    <button onClick={() => navigate('/collection')} className="text-xs sm:text-sm font-[inter] text-(--text-color) flex items-center py-1.5 px-3 sm:px-5 sm:py-2 border-0 z-0 overflow-hidden relative rounded-md mx-2.5 sm:mx-3.5 cursor-pointer before:bg-[conic-gradient(var(--border-animation))] before:content-[''] before:absolute before:-top-[300%] before:-left-1/2 before:w-[200%] before:h-[760%] before:z-[-2] before:animate-spin before:[animation-duration:6s] after:content-[''] after:absolute after:top-px after:left-px after:w-[calc(100%-2px)] after:h-[calc(100%-2px)] after:rounded-[7px] after:bg-(--secondary) after:z-[-1]">
                        <i className="w-3.5 sm:w-5 mr-[7px] fill-(--text-color)" dangerouslySetInnerHTML={{ __html: comments }} />
                        Voir la collection
                    </button>
                    <button className="flex items-center py-1.5 px-3 sm:px-5 sm:py-2 text-xs sm:text font-[inter] text-(--text-color) rounded-md transition-all duration-500 ease cursor-pointer bg-(--card-background-hover) hover:bg-(--card-background-hover)/60" onClick={() => window.open('/support')}>
                        <i className="w-3.5 sm:w-5 mr-2.5 fill-(--text-color)" dangerouslySetInnerHTML={{ __html: headset }} />
                        Faire une donation
                    </button>
                </article>
            </section>
        </main>
    )
}