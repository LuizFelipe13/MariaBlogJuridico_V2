"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lucide_react_1 = require("lucide-react"); // Removi Scale
var react_router_dom_1 = require("react-router-dom");
var Footer = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (react_1.default.createElement("footer", { className: "bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800" },
        react_1.default.createElement("div", { className: "max-w-6xl mx-auto px-4" },
            react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12 mb-12" },
                react_1.default.createElement("div", { className: "flex gap-4 items-center" },
                    react_1.default.createElement("a", { href: "https://www.instagram.com/mariareisrodriguesadvocacia?igsh=Njd3N3MzZjN1YXBh", target: "_blank", rel: "noopener noreferrer", className: "hover:text-amber-500 transition", title: "Instagram" },
                        react_1.default.createElement(lucide_react_1.Instagram, { size: 20 })),
                    react_1.default.createElement("a", { href: "https://www.tiktok.com/@mariareisrod?_r=1&_t=ZS-92cAHMfhCTJ", target: "_blank", rel: "noopener noreferrer", className: "hover:text-amber-500 transition", title: "TikTok" },
                        react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" },
                            react_1.default.createElement("path", { d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.62-1.12v8.76c0 5.29-5.43 7.31-9.65 5.71-2.73-1.04-4.22-3.83-3.79-6.67.31-2.06 1.76-3.83 3.73-4.59 1.94-.78 4.2-.39 5.86.87V6.53c-.77-.29-1.59-.47-2.42-.47-3.32.06-6.04 2.81-6.04 6.15 0 3.31 2.65 6.01 5.96 6.09 3.25.08 6.01-2.5 6.03-5.75L16.29 6h-3.76l-.005-5.98z" }))),
                    react_1.default.createElement("a", { href: "https://www.facebook.com/share/17pLQWF9T8/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-amber-500 transition", title: "Facebook" },
                        react_1.default.createElement(lucide_react_1.Facebook, { size: 20 }))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h3", { className: "text-white font-bold mb-6 border-b border-amber-500/30 pb-2 inline-block text-amber-500" }, "Navega\u00E7\u00E3o"),
                    react_1.default.createElement("ul", { className: "space-y-3 text-sm" },
                        react_1.default.createElement("li", null,
                            react_1.default.createElement("button", { onClick: function () { return navigate('/'); }, className: "hover:text-amber-500 transition" }, "In\u00EDcio")),
                        react_1.default.createElement("li", null,
                            react_1.default.createElement("button", { onClick: function () { return navigate('/sobre'); }, className: "hover:text-amber-500 transition" }, "Sobre o Escrit\u00F3rio")),
                        react_1.default.createElement("li", null,
                            react_1.default.createElement("button", { onClick: function () { return navigate('/contato'); }, className: "hover:text-amber-500 transition" }, "Fale Conosco")),
                        react_1.default.createElement("li", null,
                            react_1.default.createElement("button", { onClick: function () { return navigate('/admin'); }, className: "hover:text-amber-500 transition font-bold text-amber-500" }, "\u00C1rea do Advogado")))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h3", { className: "text-white font-bold mb-6 border-b border-amber-500/30 pb-2 inline-block text-amber-500" }, "Contatos"),
                    react_1.default.createElement("ul", { className: "space-y-4 text-sm" },
                        react_1.default.createElement("li", { className: "flex items-start gap-3" },
                            react_1.default.createElement(lucide_react_1.MapPin, { size: 18, className: "text-amber-500 mt-1 shrink-0" }),
                            react_1.default.createElement("span", null,
                                "Av. 24 de Maio, 276 - 3\u00BA Andar",
                                react_1.default.createElement("br", null),
                                "S\u00E3o Paulo - SP")),
                        react_1.default.createElement("li", { className: "flex items-center gap-3" },
                            react_1.default.createElement(lucide_react_1.Phone, { size: 18, className: "text-amber-500 shrink-0" }),
                            react_1.default.createElement("span", null, "(11) 96580-0994")),
                        react_1.default.createElement("li", { className: "flex items-center gap-3" },
                            react_1.default.createElement(lucide_react_1.Mail, { size: 18, className: "text-amber-500 shrink-0" }),
                            react_1.default.createElement("span", null, "rodriguesgracaadvocacia@gmail.com"))))),
            react_1.default.createElement("div", { className: "border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500" },
                react_1.default.createElement("p", null,
                    "\u00A9 ",
                    new Date().getFullYear(),
                    " Rodrigues Gra\u00E7a Advocacia. Todos os direitos reservados."),
                react_1.default.createElement("div", { className: "flex gap-6 mt-4 md:mt-0" })))));
};
exports.default = Footer;
//# sourceMappingURL=Footer.js.map