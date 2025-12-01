import BackgroundImg from '../assets/background.svg';

export const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden" >
            <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"></div>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${BackgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
        </div>
    );
};