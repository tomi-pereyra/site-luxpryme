# 🏢 Luxpryme — Proposta de Redesign & Estudo de Caso (Não-Oficial)

> [!IMPORTANT]  
> **AVISO LEGAL & ISENÇÃO DE RESPONSABILIDADE (DISCLAIMER):**  
> Este repositório contém uma proposta conceitual e técnica de modernização (*redesign / case study*) do website da empresa **Luxpryme Indústria de Equipamentos Eletrônicos**.  
>  
> - **Natureza do Projeto:** Este trabalho foi desenvolvido exclusivamente para fins de **estudo técnico, prática de desenvolvimento front-end e composição de portfólio pessoal**.  
> - **Ausência de Vínculo:** O desenvolvedor não possui filiação comercial, vínculo institucional ou representação jurídica perante a Luxpryme. O projeto **não foi encomendado, solicitado ou homologado oficialmente pela empresa**.  
> - **Não Comercialização & Não Publicação:** Este projeto **não está hospedado em produção** como site comercial oficial, não transaciona valores e não coleta dados de terceiros. Trata-se estritamente de um repositório de código-fonte aberto para fins demonstrativos de competências de engenharia de software e UX/UI.  
> - **Propriedade Intelectual & Marcas:** Todos os direitos de propriedade industrial e direitos autorais referentes à marca "Luxpryme", logotipo, patentes, fotografias originais de produtos e especificações técnicas de catálogo pertencem exclusivamente à **Luxpryme Indústria de Equipamentos Eletrônicos Ltda.**  
> - **Solicitação de Remoção:** Caso a empresa detentora da marca ou titulares de direitos autorais solicitem qualquer alteração, anonimização ou arquivamento deste repositório, o atendimento será realizado de forma imediata via issue ou contato do mantenedor.

---

## 💡 Sobre o Projeto

Este projeto nasceu como uma iniciativa voluntária de estudo para conceber como seria um ecossistema digital moderno para uma indústria de iluminação e combate a incêndio no Brasil, focado em:

1. **Alta Performance:** Construído 100% em Vanilla JavaScript (ES6+), HTML5 Semântico e CSS3 puro, sem dependências externas de frameworks pesados (React, Vue ou Bootstrap), alcançando notas máximas no Google Lighthouse.
2. **Experiência Mobile-First:** Solução completa de gaveta lateral deslizante (*slide drawer*), toque nativo e botões otimizados para polegar.
3. **Engenharia & Ferramentas Úteis:** Calculadora interativa de dimensionamento por área ($m^2$) baseada nos requisitos de iluminância mínima da norma **ABNT NBR 10898**.
4. **Catálogo Unificado com 26 Páginas Dedicadas:** Páginas individuais para cada modelo de bloco autônomo, luminária industrial e dispositivo de alarme de incêndio, com especificações laboratoriais, galerias de fotos reais e link para proposta via WhatsApp.

---

## ✨ Recursos Implementados

- **Página Especial Nano Bloco Basic (`nano.html`):**
  - Vídeo em proporção vertical 3:4 com transição entre gabinetes Branco e Preto.
  - Calculadora de dimensionamento por área conforme NBR 10898.
  - Carrossel fotográfico touch com troca dinâmica de imagens.
  - Tabela comparativa e especificações compactas adaptadas para smartphones.

- **Catálogo Geral Interativo (`produtos.html`):**
  - Filtro em tempo real por abas: *Autônomas*, *Linha Black*, *Industrial IP66/67*, *Centralizadas 12/24V*, *Sinalização* e *Alarmes*.
  - Chaveamento dinâmico da foto do Nano Bloco para a versão preta quando filtrado na "Linha Black".
  - Todos os cards com ação uniforme **"Ver Mais"** e área de clique expandida (o card inteiro navega para a página do produto).

- **26 Páginas Dedicadas de Produtos:**
  - Galerias com miniaturas interativas.
  - 4 métricas chave (Fluxo Luminoso, Autonomia, Bateria, Grau de Proteção IP).
  - Calculadora de unidades por $m^2$ para produtos com cobertura tabelada.
  - Tabelas completas com todos os parâmetros mecânicos e elétricos de fábrica.
  - Integração para solicitação de cotação no WhatsApp com mensagem pré-formatada.

- **Estrutura Institucional Completa:**
  - **Home (`index.html`):** Apresentação institucional, categorias e seção "Engenharia de Ponta" totalmente responsiva.
  - **Quem Somos (`empresa.html`):** Linha do tempo fabril em Itapema/SC, infraestrutura de laboratório e controle de qualidade.
  - **Representantes (`representantes.html`):** Guia de distribuidores por região do Brasil.
  - **Downloads (`downloads.html`):** Central técnica com catálogos PDF, blocos AutoCAD DWG e arquivos fotométricos IES.
  - **Blog Técnico (`blog.html`):** Artigos sobre normas ABNT NBR 10898/17240, baterias de lítio e simulação luminotécnica no DIALux.
  - **Políticas e Termos (`termos.html`):** Termos de uso do catálogo, conformidade com a LGPD e termos de garantia direta.

---

## 🛠️ Tecnologias & Arquitetura

- **Frontend:** HTML5 Semântico, CSS3 Modular (variáveis, Grid, Flexbox), Vanilla JS (ES6+).
- **Tipografia:** Plus Jakarta Sans & JetBrains Mono (Google Fonts).
- **Ícones:** SVG inline limpos e escaláveis.
- **Responsividade:** Layouts fluídos com testes em breakpoints de 360px, 480px, 768px, 1024px e 1440px+.

---

## 📁 Estrutura do Repositório

```text
site-luxpryme/
├── assets/
│   ├── css/
│   │   └── style.css            # Folha de estilos unificada
│   ├── js/
│   │   └── app.js               # Lógica interativa, filtros, calculadora e drawer
│   ├── images/
│   │   ├── produtos/            # Fotografias oficiais dos produtos em alta resolução
│   │   ├── logo_luxpryme.png    # Logotipo
│   │   └── hero_frame_*.png     # Frames dos modelos branco e preto
│   └── videos/                  # Vídeos de morphing e transição
├── index.html                   # Página Inicial
├── produtos.html                # Catálogo com filtros interativos
├── nano.html                    # Landing page do Nano Bloco Basic
├── empresa.html                 # Página Institucional Quem Somos
├── representantes.html          # Onde Comprar e Representantes
├── downloads.html               # Hub de Downloads (PDF, DWG, IES)
├── blog.html                    # Blog de Engenharia e Prevenção
├── contato.html                 # Atendimento e Fábrica
├── termos.html                  # Termos de Uso e Privacidade LGPD
├── [produto].html               # 26 páginas individuais de cada produto
└── README.md                    # Este documento
```

---

## 🚀 Como Visualizar Localmente

Basta clonar o repositório e abrir qualquer página `.html` no navegador:

```bash
# 1. Clonar o repositório
git clone https://github.com/tomi-pereyra/site-luxpryme.git

# 2. Entrar na pasta
cd site-luxpryme

# 3. Abrir no navegador (Windows)
start index.html
```

---

> **Nota:** Este repositório é mantido por [Tomas Pereyra](https://github.com/tomi-pereyra) estritamente como demonstração de competências em design, arquitetura front-end e experiência do usuário.
