import { useNavigate } from 'react-router';

import AntonioCanova from '../assets/collection/antonio-canova-psyche-ranimee-par-le-baiser-de-l-amour.jpg';
import Artemis from '../assets/collection/artemis-a-la-biche-dite-diane-de-versailles.jpg';
import Elisabeth from '../assets/collection/elisabeth-louise-vigee-le-brun-madame-vigee-le-brun-et-sa-fille-jeanne-marie-louise-1780-1819.jpg';
import Sphinx from '../assets/collection/grand-sphinx-de-tanis.jpg';
import DeVinci from '../assets/collection/leonard-de-vinci-la-vierge-a-l-enfant-avec-sainte-anne-musee-du-louvre.jpg';
import Intendant from '../assets/collection/statue-de-l-intendant-ebih-il.jpg';
import Khorsabad from '../assets/collection/cour-khorsabad-taureau-androcephale-aile.jpg'

export const Collection = () => {
    const navigate = useNavigate();

    const Oeuvres = [
        { name: 'Antonio Canova', subtitle: 'Psyche Ranimée', rating: 4.5, image: AntonioCanova, imageStyle: {}, redirect: '/collection/AntonioCanova', style: { order: 1 } },
        { name: 'Artémis', subtitle: 'Diane de Versailles', rating: 5, image: Artemis, imageStyle: { objectPosition: "center top" }, redirect: '/collection/Artemis', style: { order: 2 } },
        { name: 'Vigée Lebrun', subtitle: 'Madame Lebrun', rating: 4.7, image: Elisabeth, imageStyle: { objectPosition: "center 25%" }, redirect: '/collection/Elisabeth', style: { order: 3, gridColumn: 'span 2' } },
        { name: 'Intendant Ebih-Il', subtitle: 'Mésopotamie', rating: 5, image: Intendant, imageStyle: {}, redirect: '/collection/Intendant', style: { order: 4 } },
        { name: 'Sphinx de Tanis', subtitle: 'Égypte Antique', rating: 4.3, image: Sphinx, imageStyle: {}, redirect: '/collection/Sphinx', style: { order: 5 } },
        { name: 'Léonard de Vinci', subtitle: 'Sainte Anne', rating: 4.8, image: DeVinci, imageStyle: {}, redirect: '/collection/DeVinci', style: { order: 6 } },
        { name: 'Khorsabad', subtitle: 'Taureau Androcéphale Ailé', rating: 4.6, image: Khorsabad, imageStyle: { objectPosition: "center 80%" }, redirect: '/collection/Khorsabad', style: { order: 7, gridColumn: 'span 2' } }
    ];

    return (
        <main className="flex flex-col items-center justify-center">
            <h1 className="font-[mont] text-3xl text-(--text-color)">Découvrez notre collection !</h1>
            <section className="p-10 w-full max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px] lg:auto-rows-[350px] grid-flow-dense">
                    {Oeuvres.map((oeuvre, index) => (
                        <article
                            key={index}
                            className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
                            style={oeuvre.style}
                            onClick={() => navigate(oeuvre.redirect)}
                        >
                            <img src={oeuvre.image} alt={oeuvre.name} style={oeuvre.imageStyle} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-75" draggable={false} />

                            <div className="absolute top-3 left-3 bg-(--card-background) rounded-full px-3 py-1 flex items-center gap-1 text-sm font-[inter] font-semibold shadow text-amber-300 transition-all duration-300 ease group-hover:bg-(--card-background-hover)">
                                ⭐ {oeuvre.rating}
                            </div>

                            <div className="absolute bottom-0 left-0 p-5 text-white">
                                <h2 className="text-2xl font-bold drop-shadow-lg">{oeuvre.name}</h2>
                                <p className="text-sm opacity-90">{oeuvre.subtitle}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}