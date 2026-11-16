# Luxpryme — Nano Bloco Basic

Landing page técnica e comercial da linha de iluminação de emergência **Nano Bloco Basic** da [Luxpryme](https://www.luxpryme.com.br).

Desenvolvida com foco em alta performance, fidelidade visual do produto, conformidade com a norma **ABNT NBR 10898** e experiência responsiva em dispositivos móveis e desktops.

---

## ✨ Destaques do Projeto

- **Transição de Acabamento em Vídeo (1.0s):** Animação fluida e sem cortes entre as versões com gabinete Branco e Preto na proporção 3:4.
- **Dimensionamento Técnico por Área (NBR 10898):** Calculadora interativa em tempo real com presets rápidos (`80 m²`, `150 m²`, `250 m²`, `500 m²`, `1.000 m²`) e comparação instantânea dos modelos **NANO-600**, **NANO-1200** e **NANO-2200**.
- **Galeria de Fotos em Carrossel:** Carrossel fotográfico limpo com suporte nativo a toque (*touch swipe/scroll-snap* no celular) e controle por setas/pontos indicadores.
- **Ficha Técnica Responsiva com Abas no Mobile:** Apresentação adaptativa com cartões verticais dedicados para telas pequenas e tabela comparativa completa para desktop.
- **Integração Comercial via WhatsApp:** Formulário de solicitação de proposta que compila modelo, acabamento, metragem e quantidade diretamente para o atendimento técnico comercial.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico:** Marcação acessível (`aria-*`, micro-interações).
- **CSS3 Moderno:** Variáveis CSS (Design System próprio), CSS Grid, Flexbox, Scroll-snap, media queries otimizadas (`360px` a `1440px+`).
- **JavaScript Vanilla (ES6+):** Código leve, sem dependências externas ou frameworks pesados, garantindo carregamento instantâneo.

---

## 📁 Estrutura de Pastas

```text
site-luxpryme/
├── assets/
│   ├── css/
│   │   └── style.css       # Folha de estilos e regras responsivas
│   ├── js/
│   │   └── app.js          # Lógica da aplicação, calculadora e carrossel
│   ├── images/             # Fotografias e logotipos otimizados
│   └── videos/             # Vídeos de transição 1.0s (Branco <-> Preto)
├── index.html              # Estrutura principal da página
├── .gitignore              # Arquivos ignorados pelo Git
└── README.md               # Documentação do projeto
```

---

## 🚀 Como Executar Localmente

Não requer instalação de pacotes ou servidores complexos. Basta clonar o repositório e abrir o arquivo `index.html` em qualquer navegador:

```bash
# Clonar o repositório
git clone <url-do-repositorio>

# Entrar na pasta
cd site-luxpryme

# Abrir no navegador (Windows)
start index.html
```

---

© 2026 Luxpryme Indústria de Equipamentos Eletrônicos. Todos os direitos reservados.
