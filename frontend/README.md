# Portfólio — Marlon De Sá

> Fullstack Developer · Penetration Tester · Cybersecurity

Portfólio pessoal desenvolvido com React e TypeScript, com identidade visual cyberpunk — tema preto e azul neon, efeito matrix, glitch e cursor customizado.

---

## Demonstração

> Deploy em breve via netlify

---

## Tecnologias

| Camada | Tecnologia |
|---|---|
| Frontend | React 19, TypeScript, Vite |
| Estilização | CSS puro com variáveis e animações |
| Fontes | Fira Code, Inter (Google Fonts) |
| Ícones | SVG inline (sem dependência externa) |

---

## Funcionalidades

- **Matrix canvas** — chuva de caracteres animada no hero
- **Efeito glitch** — nome com distorção CSS
- **Typing effect** — digitação e apagamento de textos em loop
- **Cursor customizado** — ponto + anel neon seguindo o mouse
- **Header inteligente** — transparente no topo, blur ao rolar + barra de progresso
- **Skills animadas** — barras que crescem ao entrar na tela (Intersection Observer)
- **Cards de projetos** — borda neon percorrendo ao hover
- **Formulário de contato** — abre WhatsApp com mensagem pré-preenchida
- **Totalmente responsivo** — mobile, tablet e desktop

---

## Estrutura do projeto

```
frontend/
├── public/
│   └── eu.jfif              # Foto de perfil
├── src/
│   ├── pages/
│   │   ├── Header.tsx / .css
│   │   ├── Home.tsx / .css
│   │   ├── Sobre.tsx / .css
│   │   ├── Projetos.tsx / .css
│   │   ├── Contato.tsx / .css
│   │   └── Footer.tsx / .css
│   ├── App.tsx
│   ├── index.css            # Variáveis globais, reset, utilitários
│   └── main.tsx
└── package.json
```

---

## Como rodar localmente

```bash
# Clonar o repositório
git clone https://github.com/marlondesa/portfolio.git

# Entrar na pasta do frontend
cd portfolio/frontend

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse `http://localhost:5173`

---

## Como fazer o build

```bash
npm run build
```

Os arquivos gerados ficam em `frontend/dist/` — prontos para deploy.

---

## Deploy

| Serviço | Uso |
|---|---|
| **Vercel** | Frontend (recomendado) |
| **Render** | Backend Express + PostgreSQL |

---

## Contato

- **WhatsApp:** [+55 (16) 99339-8466](https://wa.me/5516993398466)
- **Email:** munizdesa1994i@gmail.com
- **GitHub:** [github.com/marlondesa](https://github.com/marlondesa)
- **LinkedIn:** [linkedin.com/in/marlon-de-sá](https://www.linkedin.com/in/marlon-de-s%C3%A1-1168173bb/)

---

© 2025 Marlon De Sá — Feito com `</>` e React
