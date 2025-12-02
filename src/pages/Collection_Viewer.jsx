import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import collectionData from '../assets/collection/collectionData.json';

export const Collection_Viewer = () => {
    const { item } = useParams();
    const [data, setData] = useState(null);
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const selectedItem = collectionData.find(el => el.url === item);

            if (!selectedItem) return window.location.href = '/error/404';

            setData(selectedItem);
            const img = await import(`../assets/collection/${selectedItem.image}.jpg`);
            setImageData(img.default);
        };

        fetchData();
    }, [item]);

    return (
        <main className="flex flex-col items-center px-6 py-16 min-h-screen">
            <div className="relative w-full md:w-3/5 lg:w-1/2 rounded-xl overflow-hidden shadow-lg">
                <img src={imageData} alt={data?.name} className="w-full h-auto object-cover" draggable={false} />

                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-3">
                    <h1 className="text-2xl md:text-3xl font-semibold text-(--text-color)">{data?.name}</h1>

                    {data?.date && (<p className="text-sm opacity-90 italic font-semibold text-(--text-grey)">{data.date}</p>)}
                    <p className="text-sm md:text-base leading-snug max-w-[90%] text-(--text-grey)">{data?.explanation}</p>
                </div>
            </div>
        </main>
    )
}