# Proposta e Apresentação Executiva | Site Oficial Physicos® Jurerê Internacional

**Documento de Alinhamento e Entrega de Projeto Web**  
*Desenvolvido para: Physicos® Jurerê Internacional*  
*Localização: Rua das Moréias, 98 - Jurerê, Florianópolis - SC*  
*Redes Sociais: [@physicos.jurere](https://www.instagram.com/physicos.jurere/)*  
*WhatsApp Oficial: +55 (48) 99616-1396*  

---

## 1. Visão Geral e Posicionamento de Marca

A **Physicos® Jurerê Internacional** é um centro de referência em estética avançada e bem-estar no destino mais cobiçado de Florianópolis. Com procedimentos de alta performance como o **Endolipo®** (laser subdérmico para retração e redução de medidas), o **Hipro®** (ultrassom microfocado para lifting facial não cirúrgico), bioestimuladores de colágeno, botox e rituais de Day Spa, a clínica atende um público exigente de moradores locais e turistas de alto padrão (hóspedes de resorts e frequentadores de Jurerê).

### O Objetivo do Novo Site:
1. **Autoridade e Luxo:** Refletir a elegância e a discrição do atendimento presencial no ambiente digital.
2. **Alta Conversão no WhatsApp:** Transformar visitantes curiosos em consultas agendadas, qualificando os leads antes do primeiro contato.
3. **Vitrine dos Procedimentos Estrela:** Dar destaque aos tratamentos patenteados e tecnologias de ponta (**Endolipo®**, **Hipro®**, **Criolipólise 360°**, **Day Spa**).
4. **Sinergia com o Instagram:** Integrar o feed social e os depoimentos de pacientes para gerar prova social imediata.

---

## 2. Mapa do Site e Recursos Interativos

O site foi desenhado com arquitetura fluida de página única de alta conversão (*One-Page High-Conversion Landing Page*):

1. **Top Announcement Bar:**
   - Endereço real na Rua das Moréias, 98.
   - Horários de atendimento (Seg a Sáb: 09h às 20h).
   - Link direto para `@physicos.jurere` e WhatsApp VIP `(48) 99616-1396`.
2. **Hero Section (Abertura de Alto Impacto):**
   - Fotografia cinematográfica de ambientação spa/estética com sobreposição sofisticada.
   - Chamada: *"A Excelência do Cuidado no Destino Mais Nobre da Ilha"*.
   - Badges de confiança: Padrão Ouro, 100% Personalizado, Jurerê Nobre e Experiência 5 Estrelas.
3. **A Clínica & Filosofia de Atendimento:**
   - Apresentação do conceito da clínica, segurança ética e atendimento individualizado com hora marcada.
4. **Catálogo Dinâmico de Procedimentos (Com Abas e Modal Interativo):**
   - Abas por categoria: *Todos*, *Estética Facial*, *Estética Corporal*, *Day Spa & Bem-Estar*.
   - Cards com foto, badge tecnológico, breve resumo e botão **"Ver Detalhes"**.
   - **Modal Clínico:** Ao clicar, exibe indicações detalhadas, tempo de sessão, tempo de recuperação e botão de WhatsApp com mensagem personalizada para aquele tratamento específico!
5. **Simulador de Protocolo VIP (Quiz Interativo):**
   - O paciente responde ao seu objetivo (Gordura Localizada, Flacidez/Rejuvenescimento, Relaxamento/Spa, Pós-Operatório) e horizonte de tempo.
   - O sistema calcula a indicação sob medida e gera um botão direto para enviar a recomendação para a recepção da Physicos via WhatsApp.
6. **Diferenciais Competitivos:**
   - Privacidade e Discrição (salas exclusivas sem aglomeração).
   - Tecnologia Certificada pela ANVISA.
   - Harmonia e Naturalidade nos resultados.
7. **Depoimentos e Avaliações de Pacientes:**
   - Avaliações 5 estrelas de pacientes de Florianópolis, São Paulo e visitantes de temporada.
8. **Vitrine do Instagram Oficial (@physicos.jurere):**
   - Seção dedicada ao Instagram com fotos e descrições dos procedimentos reais (Endolipo, Hipro, Criolipólise, Spa, Harmonização).
9. **FAQ (Perguntas Frequentes):**
   - Acordeão sanfonado esclarecendo dúvidas sobre avaliação, anestesia/dor no Endolaser, vouchers para presentes e formas de pagamento.
10. **Localização e Contato:**
    - Google Maps interativo centralizado na Rua das Moréias, 98.
    - Botão flutuante permanente do WhatsApp no canto inferior direito com animação de pulso.

---

## 3. Design System & Identidade Visual

- **Paleta de Cores:**
  - `Ouro Champanhe (#C5A059, #DFBE7B)`: Nobreza, cuidado e estética de luxo.
  - `Slate Profundo (#0B1320, #0F172A)`: Elegância sóbria, sofisticação noturna.
  - `Areia Suave & Creme (#FAF8F5, #EDE8DF)`: Acolhimento orgânico, spa, bem-estar e praia de Jurerê.
  - `Esmeralda / Verde WhatsApp (#25D366)`: Gatilho de conversão e contato instantâneo.
- **Tipografia:**
  - *Headings:* `Cormorant Garamond` (Serifada clássica de alta joalheria e clínicas europeias).
  - *Corpo e Interface:* `Plus Jakarta Sans` (Geométrica, limpa e de altíssima legibilidade em celulares).

---

## 4. Engenharia Técnica & Como Hospedar

### 4.1. Testes no Vercel (Visualização com 1 Clique)
Criamos o arquivo `vercel.json` na raiz. Para publicar no Vercel:
- Basta subir os arquivos para um repositório no GitHub ou digitar `vercel` no terminal do VSCode.
- A página é estática e carrega em milissegundos sem qualquer configuração adicional.

### 4.2. Publicação Final na DreamHost via FileZilla
- Não é necessário ter acesso de terminal/SSH ou instalar dependências no servidor.
- **Passo a Passo FileZilla:**
  1. Conectar no FileZilla com usuário e senha FTP da DreamHost.
  2. Abrir a pasta do domínio (ex: `/home/usuario/nomedodominio.com.br/`).
  3. Arrastar os arquivos para dentro da pasta do domínio:
     - `index.html`
     - `.htaccess` (já inclui cache de alta velocidade, segurança e redirecionamento HTTPS)
     - Pasta `css/`
     - Pasta `js/`
- O site entra no ar imediatamente após o envio!

---

## 5. Como Apresentar para o Cliente

1. **Abra o arquivo [`apresentacao_cliente.html`](file:///c:/Users/jcvca/OneDrive/Documentos/00%20teste%20browser/apresentacao_cliente.html) no navegador:**
   - Este arquivo foi montado como um "pitch deck" interativo com botão de impressão em PDF.
2. **Abra o arquivo [`index.html`](file:///c:/Users/jcvca/OneDrive/Documentos/00%20teste%20browser/index.html) no navegador:**
   - Demonstre a navegação, clique nos filtros de tratamentos, abra o modal de detalhes do Endolipo® e teste o simulador de protocolo VIP.
3. **Destaque os dados reais já configurados:**
   - Mostre que o número oficial `(48) 99616-1396`, o Instagram `@physicos.jurere` e o endereço na Rua das Moréias já estão perfeitamente sincronizados.
