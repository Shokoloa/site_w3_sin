import { useEffect, useRef } from 'react';
import audio from '../assets/secret-audio.mp3';

export const Secret = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        const el = audioRef.current;
        if (el) {
            el.play().catch(() => {
                console.warn("Autoplay bloqué par le navigateur");
            });
        }
    }, []);

    return (
        <>
            <div className="fixed inset-0 overflow-hidden">
                <img className="z-99999 w-full h-full" draggable={false} src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWV1dHZvN3ptcjJvdGUzc3M1NjBlc2Q3MHpmeXVtdHE4bW9td2VnZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13BwjdpxACoBPO/giphy.gif" alt="Secret Background" />
            </div>
            <audio ref={audioRef} src={audio} autoPlay />
        </>
    )
}