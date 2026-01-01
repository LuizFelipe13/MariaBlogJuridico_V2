import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'; // Removi Scale
import { useNavigate } from 'react-router-dom';

// --- IMPORTANTE: Importe o logo novo aqui ---
import logoFull from '../assets/logo-rodrigues-full.png';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* --- LISTA DE ÍCONES SOCIAIS (COM LINKS) --- */}
                    <div className="flex gap-4 items-center">

                        {/* 1. Instagram */}
                        <a
                            href="https://www.instagram.com/mariareisrodriguesadvocacia?igsh=Njd3N3MzZjN1YXBh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-amber-500 transition"
                            title="Instagram"
                        >
                            <Instagram size={20} />
                        </a>

                        {/* 2. TikTok */}
                        <a
                            href="https://www.tiktok.com/@mariareisrod?_r=1&_t=ZS-92cAHMfhCTJ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-amber-500 transition"
                            title="TikTok"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.62-1.12v8.76c0 5.29-5.43 7.31-9.65 5.71-2.73-1.04-4.22-3.83-3.79-6.67.31-2.06 1.76-3.83 3.73-4.59 1.94-.78 4.2-.39 5.86.87V6.53c-.77-.29-1.59-.47-2.42-.47-3.32.06-6.04 2.81-6.04 6.15 0 3.31 2.65 6.01 5.96 6.09 3.25.08 6.01-2.5 6.03-5.75L16.29 6h-3.76l-.005-5.98z" />
                            </svg>
                        </a>

                        {/* 3. Facebook */}
                        <a
                            href="https://www.facebook.com/share/17pLQWF9T8/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-amber-500 transition"
                            title="Facebook"
                        >
                            <Facebook size={20} />
                        </a>

                        {/* 4. Linkedin */}
                        {/*<a*/}
                        {/*    href="https://www.linkedin.com/in/SEU_PERFIL_AQUI"*/}
                        {/*    target="_blank"*/}
                        {/*    rel="noopener noreferrer"*/}
                        {/*    className="hover:text-amber-500 transition"*/}
                        {/*    title="LinkedIn"*/}
                        {/*>*/}
                        {/*    <Linkedin size={20} />*/}
                        {/*</a>*/}
                    </div>
                    {/* ------------------------------------------- */}
                    {/* ------------------------------------------- */}

                    {/* Coluna 2: Links Rápidos (Sem alterações) */}
                    <div>
                        <h3 className="text-white font-bold mb-6 border-b border-amber-500/30 pb-2 inline-block text-amber-500">Navegação</h3>
                        <ul className="space-y-3 text-sm">
                            <li><button onClick={() => navigate('/')} className="hover:text-amber-500 transition">Início</button></li>
                            <li><button onClick={() => navigate('/sobre')} className="hover:text-amber-500 transition">Sobre o Escritório</button></li>
                            <li><button onClick={() => navigate('/contato')} className="hover:text-amber-500 transition">Fale Conosco</button></li>
                            <li><button onClick={() => navigate('/admin')} className="hover:text-amber-500 transition font-bold text-amber-500">Área do Advogado</button></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Contato (Sem alterações) */}
                    <div>
                        <h3 className="text-white font-bold mb-6 border-b border-amber-500/30 pb-2 inline-block text-amber-500">Contatos</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-amber-500 mt-1 shrink-0" />
                                <span>Av. 24 de Maio, 276 - 3º Andar<br />São Paulo - SP</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-amber-500 shrink-0" />
                                <span>(11) 96580-0994</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-amber-500 shrink-0" />
                                <span>rodriguesgracaadvocacia@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* BARRA INFERIOR */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Rodrigues Graça Advocacia. Todos os direitos reservados.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        {/*<span>OAB/SP</span>*/}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;