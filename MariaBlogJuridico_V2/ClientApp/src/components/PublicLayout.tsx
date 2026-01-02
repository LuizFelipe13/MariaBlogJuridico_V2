import React, { useState } from 'react'; // Adicionei useState
import { UserCircle, Menu, X } from 'lucide-react'; // Adicionei Menu e X
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.tsx';

// --- IMPORTANTE: Importe o logo novo aqui ---
import logoFull from '../assets/logo-rodrigues-full.png';

interface LayoutProps {
    children: React.ReactNode;
}

const PublicLayout: React.FC<LayoutProps> = ({ children }) => {
    const navigate = useNavigate();

    // Estado para controlar o menu no celular
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // SEU NÚMERO DE WHATSAPP AQUI
    const numeroWhatsApp = "551165800994";
    const mensagemPadrao = "Olá! Gostaria de uma consultoria jurídica.";

    // Função para navegar e fechar o menu (útil no mobile)
    const handleNavigation = (path: string) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans flex flex-col">

            {/* Navbar Superior */}
            <nav className="bg-[#0f1420] text-white shadow-lg relative z-20 transition-all">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center h-[220px]">

                        {/* --- ÁREA DO LOGO --- */}
                        <div onClick={() => handleNavigation('/')} className="cursor-pointer transition hover:opacity-90 z-50">
                            <img
                                src={logoFull}
                                alt="Rodrigues Graça Advocacia"
                                className="h-[200px] w-auto object-contain py-2" // Ajustei levemente para 200px para margem de segurança
                            />
                        </div>

                        {/* --- MENU DESKTOP (Somente telas médias pra cima) --- */}
                        <div className="hidden md:flex space-x-8 items-center font-medium">
                            <button onClick={() => navigate('/')} className="hover:text-amber-500 transition">Home</button>
                            <button onClick={() => navigate('/sobre')} className="hover:text-amber-500 transition">Sobre o Escritório</button>
                            <button onClick={() => navigate('/contato')} className="hover:text-amber-500 transition">Contato</button>

                            <button
                                onClick={() => navigate('/admin')}
                                className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded text-sm font-bold flex items-center gap-2 transition shadow-lg shadow-amber-600/20"
                            >
                                <UserCircle size={18} /> Área do Advogado
                            </button>
                        </div>

                        {/* --- BOTÃO HAMBÚRGUER (Somente Mobile) --- */}
                        <div className="md:hidden z-50">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white hover:text-amber-500 focus:outline-none p-2"
                            >
                                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- MENU MOBILE (A lista que abre) --- */}
                {/* Renderização condicional: Só aparece se isMenuOpen for true */}
                {isMenuOpen && (
                    <div className="md:hidden bg-[#0f1420] border-t border-gray-700 absolute w-full left-0 top-[220px] shadow-xl py-4 px-6 flex flex-col space-y-4 animate-in slide-in-from-top-5 fade-in duration-200">
                        <button onClick={() => handleNavigation('/')} className="text-left text-lg hover:text-amber-500 py-2 border-b border-gray-700">
                            Home
                        </button>
                        <button onClick={() => handleNavigation('/sobre')} className="text-left text-lg hover:text-amber-500 py-2 border-b border-gray-700">
                            Sobre o Escritório
                        </button>
                        <button onClick={() => handleNavigation('/contato')} className="text-left text-lg hover:text-amber-500 py-2 border-b border-gray-700">
                            Contato
                        </button>
                        <button
                            onClick={() => handleNavigation('/admin')}
                            className="bg-amber-600 hover:bg-amber-700 px-4 py-3 rounded text-center font-bold flex items-center justify-center gap-2 mt-2"
                        >
                            <UserCircle size={20} /> Área do Advogado
                        </button>
                    </div>
                )}
            </nav>

            {/* Conteúdo Principal */}
            <main className="flex-1 bg-slate-50 relative z-10">
                {children}
            </main>

            {/* Botão WhatsApp Flutuante */}
            <a
                href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemPadrao)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition duration-300 flex items-center justify-center group"
                title="Fale conosco no WhatsApp"
            >
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-20 animate-ping group-hover:opacity-0"></span>
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>

            <Footer />

        </div>
    );
};

export default PublicLayout;