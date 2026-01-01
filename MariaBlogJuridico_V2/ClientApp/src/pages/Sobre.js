"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var react_router_dom_1 = require("react-router-dom");
// --- MUDANÇA 1: Importar a imagem local aqui no topo ---
// (Usei um nome de variável 'fotoMariaImg' para representar o arquivo)
var foto_maria_png_1 = require("../assets/foto maria.png");
// ------------------------------------------------------
var Sobre = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (react_1.default.createElement("div", { className: "bg-slate-50 min-h-screen font-sans" },
        react_1.default.createElement("div", { className: "bg-slate-900 text-white py-20" },
            react_1.default.createElement("div", { className: "max-w-6xl mx-auto px-4 text-center" },
                react_1.default.createElement("h1", { className: "text-4xl md:text-5xl font-serif font-bold mb-4 text-amber-500" }, "Excel\u00EAncia e Tradi\u00E7\u00E3o"),
                react_1.default.createElement("p", { className: "text-xl text-slate-300 max-w-2xl mx-auto" }, "H\u00E1 mais de 15 anos defendendo seus direitos com \u00E9tica, transpar\u00EAncia e resultados comprovados."))),
        react_1.default.createElement("div", { className: "max-w-6xl mx-auto px-4 py-16" },
            react_1.default.createElement("div", { className: "flex flex-col md:flex-row items-center gap-12" },
                react_1.default.createElement("div", { className: "md:w-1/2" },
                    react_1.default.createElement("div", { className: "relative" },
                        react_1.default.createElement("div", { className: "absolute top-4 -left-4 w-full h-full border-2 border-amber-500 rounded-lg" }),
                        react_1.default.createElement("img", { src: foto_maria_png_1.default, alt: "Dra. Maria Rodrigues", 
                            // Mantive as classes para garantir o estilo (sombra, cantos arredondados, tamanho)
                            className: "relative rounded-lg shadow-xl w-full h-[400px] object-cover object-top" }))),
                react_1.default.createElement("div", { className: "md:w-1/2" },
                    react_1.default.createElement("h2", { className: "text-3xl font-serif font-bold text-slate-800 mb-6" }, "Compromisso com a Justi\u00E7a"),
                    react_1.default.createElement("p", { className: "text-slate-600 mb-4 leading-relaxed" },
                        "No ",
                        react_1.default.createElement("strong", null, "Rodrigues Gra\u00E7a Advocacia"),
                        ", temos o compromisso de oferecer solu\u00E7\u00F5es jur\u00EDdicas personalizadas e eficientes no \u00E2mbito do Direito do Trabalho, com foco tanto na defesa dos direitos dos trabalhadores quanto no atendimento especializado \u00E0s empresas. Nossa fundadora, Dra. Maria dos Reis Rodrigues de Souza, \u00E9 advogada formada pela Universidade S\u00E3o Judas Tadeu-SP, com s\u00F3lida experi\u00EAncia na \u00E1rea trabalhista desde 2011. Com duas p\u00F3s-gradua\u00E7\u00F5es, uma em Direito do Trabalho pela PUC Minas e outra em Direito Empresarial pela Universidade S\u00E3o Judas Tadeu, elas trazem um profundo conhecimento te\u00F3rico e pr\u00E1tico para cada caso. Em 2021, o escrit\u00F3rio foi criado com a miss\u00E3o de proporcionar um atendimento humano e estrat\u00E9gico, baseado em transpar\u00EAncia e confian\u00E7a. Nossa experi\u00EAncia tamb\u00E9m inclui atua\u00E7\u00E3o com negocia\u00E7\u00E3o e, atualmente, Dra. Maria dos Reis Rodrigues de Souza est\u00E1 em forma\u00E7\u00E3o em Media\u00E7\u00E3o e Arbitragem, fortalecendo ainda mais nossa capacidade de resolver conflitos de forma r\u00E1pida e eficaz. Seja voc\u00EA um trabalhador buscando seus direitos ou uma empresa em busca de assessoria jur\u00EDdica, o Rodrigues Gra\u00E7a Advocacia est\u00E1 pronto para atuar ao seu lado, garantindo a melhor defesa e orienta\u00E7\u00E3o em cada situa\u00E7\u00E3o."),
                    react_1.default.createElement("p", { className: "text-slate-600 mb-6 leading-relaxed" }, "Sou especialista na \u00E1rea trabalhista e estou pronta para atuar de forma combativa e estrat\u00E9gica, garantindo que seus direitos sejam respeitados em qualquer inst\u00E2ncia."),
                    react_1.default.createElement("div", { className: "grid grid-cols-2 gap-4 mb-8" },
                        react_1.default.createElement("div", { className: "flex items-center gap-2 text-slate-700 font-medium" },
                            react_1.default.createElement(lucide_react_1.CheckCircle, { size: 20, className: "text-amber-600" }),
                            " Atendimento Personalizado"),
                        react_1.default.createElement("div", { className: "flex items-center gap-2 text-slate-700 font-medium" },
                            react_1.default.createElement(lucide_react_1.CheckCircle, { size: 20, className: "text-amber-600" }),
                            " Especialista"),
                        react_1.default.createElement("div", { className: "flex items-center gap-2 text-slate-700 font-medium" },
                            react_1.default.createElement(lucide_react_1.CheckCircle, { size: 20, className: "text-amber-600" }),
                            " Tecnologia Jur\u00EDdica"),
                        react_1.default.createElement("div", { className: "flex items-center gap-2 text-slate-700 font-medium" },
                            react_1.default.createElement(lucide_react_1.CheckCircle, { size: 20, className: "text-amber-600" }),
                            " Transpar\u00EAncia Total")),
                    react_1.default.createElement("button", { onClick: function () { return navigate('/contato'); }, className: "bg-slate-900 text-white px-8 py-3 rounded hover:bg-slate-800 transition flex items-center gap-2" },
                        "Fale comigo ",
                        react_1.default.createElement("strong", null, "AGORA"),
                        " ",
                        react_1.default.createElement(lucide_react_1.ArrowRight, { size: 18 }))))),
        react_1.default.createElement("div", { className: "bg-white py-16 border-y border-slate-100" },
            react_1.default.createElement("div", { className: "max-w-6xl mx-auto px-4" },
                react_1.default.createElement("div", { className: "text-center mb-12" },
                    react_1.default.createElement("h2", { className: "text-3xl font-serif font-bold text-slate-800" }, "Nossos Pilares"),
                    react_1.default.createElement("p", { className: "text-slate-500 mt-2" }, "O que guia nossa atua\u00E7\u00E3o todos os dias")),
                react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" },
                    react_1.default.createElement("div", { className: "p-8 bg-slate-50 rounded-xl text-center hover:-translate-y-2 transition duration-300" },
                        react_1.default.createElement("div", { className: "w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6" },
                            react_1.default.createElement(lucide_react_1.Shield, { size: 32 })),
                        react_1.default.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-3" }, "\u00C9tica Inegoci\u00E1vel"),
                        react_1.default.createElement("p", { className: "text-slate-600 text-sm" }, "Atuo com total transpar\u00EAncia e lealdade aos clientes, respeitando rigorosamente o c\u00F3digo de \u00E9tica.")),
                    react_1.default.createElement("div", { className: "p-8 bg-slate-50 rounded-xl text-center hover:-translate-y-2 transition duration-300" },
                        react_1.default.createElement("div", { className: "w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6" },
                            react_1.default.createElement(lucide_react_1.Award, { size: 32 })),
                        react_1.default.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-3" }, "Excel\u00EAncia T\u00E9cnica"),
                        react_1.default.createElement("p", { className: "text-slate-600 text-sm" }, "Advocacia de alta performance, pautada no aperfei\u00E7oamento cont\u00EDnuo para oferecer solu\u00E7\u00F5es jur\u00EDdicas de vanguarda.")),
                    react_1.default.createElement("div", { className: "p-8 bg-slate-50 rounded-xl text-center hover:-translate-y-2 transition duration-300" },
                        react_1.default.createElement("div", { className: "w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6" },
                            react_1.default.createElement(lucide_react_1.Users, { size: 32 })),
                        react_1.default.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-3" }, "Foco no Cliente"),
                        react_1.default.createElement("p", { className: "text-slate-600 text-sm" }, "Cada caso \u00E9 \u00FAnico. Oferecemos um atendimento humanizado, entendendo a dor e a necessidade de cada pessoa."))))),
        react_1.default.createElement("div", { className: "py-20 text-center px-4" },
            react_1.default.createElement("h2", { className: "text-3xl font-serif font-bold text-slate-800 mb-6" }, "Precisa de orienta\u00E7\u00E3o jur\u00EDdica?"),
            react_1.default.createElement("p", { className: "text-slate-600 mb-8 max-w-xl mx-auto" }, "N\u00E3o deixe suas d\u00FAvidas para depois. Entre em contato para analisar o seu caso."),
            react_1.default.createElement("button", { onClick: function () { return navigate('/contato'); }, className: "bg-amber-600 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-700 transition shadow-lg hover:shadow-amber-600/30" }, "Agendar Consulta"))));
};
exports.default = Sobre;
//# sourceMappingURL=Sobre.js.map