import React from 'react';
import '../assets/styles/main.css';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
            copied: false,
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Erreur capturée par ErrorBoundary:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    handleCopy = async () => {
        const { error, errorInfo } = this.state;
        const textToCopy = `
          Erreur : ${error?.toString()}
          Stack : ${errorInfo?.componentStack}
        `;

        try {
            await navigator.clipboard.writeText(textToCopy);
            this.setState({ copied: true });
            setTimeout(() => this.setState({ copied: false }), 2000);
        } catch (err) {
            console.error("Erreur lors de la copie :", err);
        }
    };

    render() {
        if (this.state.hasError) {
            return (
                <main className="hover:select-none hover:cursor-default">
                    <div className="fixed inset-0 -z-10 overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-br" style={{ background: "var(--background-color)" }}></div>
                    </div>
                    <section className=" perspective-[1600px] text-transparent overflow-hidden flex justify-center items-center -z-10 inset-0 absolute pointer-events-none">
                        <div></div>
                    </section>
                    <div className="absolute top-1/2 left-1/2 -translate-1/2 text-center">
                        <h1 className="text-3xl font-[mont] text-white mt-2 mb-1">🚨 Oops... Quelque chose s'est mal passé de notre côté. 🚨</h1>
                        <p className="text-base font-[inter] text-slate-300">Notre serveur a rencontré un problème inattendu. Essayez de recharger la page ou revenez plus tard.</p>

                        <article className="mt-[5vh] flex justify-center">
                            <button className="px-5 py-2.5 mx-2.5 my-0 text-(--text-color) font-semibold text-base font-[inter] rounded-md transition-all duration-300 ease cursor-pointer bg-slate-800 border border-slate-700/30 hover:bg-slate-800/50" onClick={() => { window.history.back(); setTimeout(() => { window.location.reload(); }, 100) }}>Précédent</button>
                            <button className={`px-5 py-2.5 mx-2.5 my-0 text-(--text-color) font-semibold text-base font-[inter] rounded-md transition-all duration-300 ease cursor-pointer bg-slate-800 border border-slate-700/30 hover:bg-slate-800/50 ${this.state.copied ? 'active' : ''}`} onClick={this.handleCopy}>Copier les détails de l'erreur</button>
                        </article>
                    </div>
                </main>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;