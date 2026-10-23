# Guia de Publicação - Physicos Jurerê na DreamHost via FileZilla

Esse projeto foi desenvolvido em **HTML5 + CSS + JavaScript puro**, o que significa que é **100% estático, ultra veloz e perfeito para a DreamHost**, sem necessidade de instalar Node.js, banco de dados ou compilação no servidor.

---

## 1. Qual é a pasta na DreamHost?

Na DreamHost, quando você adiciona um domínio pelo painel, ela cria automaticamente uma pasta com **o nome exato do domínio** dentro do diretório do usuário:

```text
/home/seu_usuario/nomedoseusite.com.br/
```

> **No FileZilla:** Assim que você se conecta, no painel do lado direito (Endereço remoto), você verá pastas listadas. Uma delas terá o nome do domínio cadastrado (por exemplo: `physicosjurere.com.br` ou o domínio que você configurou).
> **A pasta de destino é essa! Basta dar dois cliques e entrar nela.**

---

## 2. Como Conectar no FileZilla

Preencha a barra de conexão rápida do FileZilla:

| Campo | O que preencher |
| :--- | :--- |
| **Host** | `ftp.seudominio.com.br` (ou o hostname do servidor DreamHost informado no seu e-mail/painel) |
| **Nome de usuário** | Seu usuário FTP da DreamHost |
| **Senha** | Sua senha do usuário FTP |
| **Porta** | `22` (se for SFTP - recomendado) ou `21` (FTP tradicional) |

Clique em **Conexão Rápida**.

---

## 3. Quais arquivos enviar para a pasta do domínio?

Basta selecionar e arrastar os seguintes itens para dentro da pasta do domínio na DreamHost:

```text
📁 nomedoseusite.com.br/
├── 📄 index.html
├── 📄 .htaccess
├── 📁 css/
│   └── 📄 custom.css
└── 📁 js/
    └── 📄 main.js
```

> **Atenção:** O arquivo `index.html` deve ficar diretamente na raiz da pasta do domínio (e não dentro de outra pasta como `teste/` ou `site/`), para que ao digitar o domínio na internet a página abra imediatamente.

---

## 4. Personalizações Rápidas Antes de Enviar

Abra o arquivo `js/main.js` no seu editor e edite as primeiras linhas com os dados reais da clínica:

```javascript
const CLINIC_INFO = {
  name: "Physicos Jurerê",
  phoneDisplay: "(48) 99123-4567",
  whatsappNumber: "5548991234567", // <-- Coloque o número do WhatsApp com DDD aqui (sem espaços ou traços)
  address: "Rua das Moréias, 98 - Jurerê, Florianópolis - SC",
  instagram: "https://www.instagram.com/physicos.jurere/",
  googleMapsUrl: "https://maps.google.com/?q=Rua+das+Mor%C3%A9ias,+98+-+Jurer%C3%AA,+Florian%C3%B3polis+-+SC"
};
```

Ao alterar esse número, **todos os botões de agendamento e o botão flutuante de WhatsApp do site inteiro são atualizados automaticamente**!
