/**
 * Physicos Jurerê Internacional - Main Interaction Engine
 */

// Global Configuration
const CLINIC_INFO = {
  name: "Physicos Jurerê",
  phoneDisplay: "(48) 99616-1396",
  whatsappNumber: "5548996161396", // Número oficial extraído das redes da Physicos Jurerê
  address: "Rua das Moréias, 98 - Jurerê, Florianópolis - SC",
  instagram: "https://www.instagram.com/physicos.jurere/",
  googleMapsUrl: "https://maps.google.com/?q=Rua+das+Mor%C3%A9ias,+98+-+Jurer%C3%AA,+Florian%C3%B3polis+-+SC"
};

// Procedimentos e Tratamentos Detalhados
const PROCEDURES = [
  {
    id: "endolaser-corporal",
    category: "corporal",
    title: "Endolipo® Corporal Avançado",
    subtitle: "Redução de gordura localizada e retração da pele a laser",
    badge: "Destaque Instagram",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Protocolo consagrado da Physicos Jurerê que combina liquefação de gordura rebelde e estímulo imediato de colágeno.",
    fullDesc: "O Endolipo® é um dos procedimentos mais procurados na Physicos Jurerê. Através de uma microfibra óptica inserida sob a pele, a energia do laser atua diretamente nas células adiposas e na derme profunda, promovendo efeito lipolítico e uma retração intensa (skin tightening). Resultados visíveis com evolução progressiva em até 90 dias. Ideal para abdômen, flancos, braços, culotes e papada.",
    indications: ["Gordura localizada resistente", "Flacidez dérmica associada", "Definição de contorno corporal sem corte"],
    duration: "60 a 90 minutos por região",
    recovery: "Retorno às atividades leves em 24 a 48h",
    benefits: ["Protocolo oficial com evolução em 90 dias", "Estímulo vigoroso de colágeno", "Minimamente invasivo sem cortes cirúrgicos"]
  },
  {
    id: "hipro-ultrassom",
    category: "facial",
    title: "Hipro® Ultrassom Microfocado",
    subtitle: "Lifting facial e pescoço não cirúrgico de alta precisão",
    badge: "Tecnologia Hipro",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Tecnologia de ondas ultrassônicas focadas que atingem as camadas mais profundas (SMAS) para efeito lifting imediato e duradouro.",
    fullDesc: "O Hipro® é uma das tecnologias mais nobres presentes na Physicos Jurerê. Ele entrega pontos de coagulação térmica na fáscia muscular e na derme profunda sem romper a epiderme, estimulando uma cascata intensa de neocolagênese. Proporciona arqueamento das sobrancelhas, melhora expressiva do terço inferior da face, diminuição da papada e firmeza do pescoço sem tempo de inatividade.",
    indications: ["Flacidez facial e de pescoço", "Efeito 'lifting' sem intervenção cirúrgica", "Estímulo de colágeno profundo preventivo e corretivo"],
    duration: "45 a 60 minutos",
    recovery: "Imediata (pode retornar à rotina no mesmo dia)",
    benefits: ["Tecnologia padrão ouro aprovada internacionalmente", "Sem agulhas ou tempo de recuperação", "Melhora contínua por até 6 meses"]
  },
  {
    id: "endolaser-facial",
    category: "facial",
    title: "Endolifting Facial & Papada",
    subtitle: "Lifting dérmico a laser e redução de papada sem corte",
    badge: "Rejuvenescimento",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Tratamento a laser para redefinir a linha da mandíbula, eliminar a papada e combater o aspecto de 'buldogue'.",
    fullDesc: "Com o auxílio da fibra óptica a laser, o Endolifting facial atua na camada subdérmica estimulando neocolagênese profunda e contraindo os tecidos flácidos da face e pescoço. O resultado é um contorno mandibular muito mais nítido e rejuvenescido, com aspecto totalmente natural.",
    indications: ["Flacidez facial e pescoço", "Gordura na papada / duplo queixo", "Perda do contorno mandibular"],
    duration: "Em torno de 60 minutos",
    recovery: "Pouco inchaço; rotina habitual preservada",
    benefits: ["Efeito lifting sem bisturi", "Recuperação rápida", "Estímulo contínuo de colágeno por meses"]
  },
  {
    id: "botox-facial",
    category: "facial",
    title: "Toxina Botulínica (Botox VIP)",
    subtitle: "Prevenção e suavização de rugas com expressão natural",
    badge: "Procedimento Ouro",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Tratamento clássico para relaxamento muscular seletivo de testa, glabela e 'pés de galinha' com técnica refinada.",
    fullDesc: "Na Physicos Jurerê, a aplicação de toxina botulínica segue a filosofia de beleza natural, sem deixar o rosto com aspecto congelado. Realizamos um mapeamento anatômico detalhado das suas mímicas para harmonizar seu olhar, suavizar as linhas dinâmicas e prevenir rugas estáticas com discrição e sofisticação.",
    indications: ["Linhas de expressão na testa e glabela", "Rugas periorbitais (pés de galinha)", "Efeito arqueado suave nas sobrancelhas"],
    duration: "30 minutos",
    recovery: "Imediata (sem tempo de inatividade)",
    benefits: ["Olhar descansado e jovial", "Procedimento rápido e indolor", "Duração média de 4 a 6 meses"]
  },
  {
    id: "bioestimuladores",
    category: "facial",
    title: "Bioestimuladores de Colágeno",
    subtitle: "Sculptra® & Radiesse® para restauração da firmeza",
    badge: "Firmeza & Brilho",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Injeção de substâncias biocompatíveis que reprogramam os fibroblastos a produzirem colágeno novo em abundância.",
    fullDesc: "Com o envelhecimento natural perdemos cerca de 1% de colágeno ao ano após os 25 anos. Os bioestimuladores são fundamentais para recuperar o suporte estrutural da pele, melhorando a textura, atenuando a flacidez facial e restaurando o viço e a densidade tecidual com longevidade.",
    indications: ["Flacidez facial e perda de sustentação", "Pele afinada ou sem viço", "Rejuvenescimento de colo e pescoço"],
    duration: "45 minutos",
    recovery: "Retorno imediato às atividades sociais",
    benefits: ["Efeito gradual, elegante e duradouro", "Aumento real da densidade da pele", "Duração de até 24 meses"]
  },
  {
    id: "criolipolise",
    category: "corporal",
    title: "Criolipólise Avançada 360°",
    subtitle: "Congelamento controlado de células adiposas",
    badge: "Remodelagem",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Tecnologia não invasiva consagrada mundialmente para destruição das células de gordura por resfriamento controlado.",
    fullDesc: "A Criolipólise na Physicos conta com manípulos anatômicos 360° que resfriam de forma uniforme a área selecionada, induzindo a apoptose (morte celular programada) dos adipócitos. O corpo elimina naturalmente a gordura nas semanas seguintes, reduzindo centímetros de forma segura e consistente.",
    indications: ["Gordura localizada no abdômen, flancos e costas", "Gordurinha do sutiã e coxas", "Quem busca emagrecimento localizado não cirúrgico"],
    duration: "50 minutos por aplicação",
    recovery: "Sem repouso necessário",
    benefits: ["Eliminação de até 25% a 30% da gordura na área tratada", "Totalmente não invasivo", "Resultados comprovados cientificamente"]
  },
  {
    id: "day-spa-relax",
    category: "spa",
    title: "Ritual Day Spa Physicos Jurerê",
    subtitle: "Experiência multissensorial de relaxamento e renovação",
    badge: "Exclusivo Spa",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Uma imersão completa em bem-estar combinando massoterapia com pedras quentes, aromaterapia e esfoliação nobre.",
    fullDesc: "Projetado para desintoxicar a mente e revigorar o corpo no ambiente exclusivo de Jurerê Internacional. O ritual inclui boas-vindas com blend botânico relaxante, esfoliação corporal aromática, massagem terapêutica com pedras vulcânicas aquecidas, máscara facial hidratante com efeito glow e cromoterapia relaxante.",
    indications: ["Estresse, fadiga muscular e tensão mental", "Momentos pré-evento, noivas ou férias em Jurerê", "Presente de bem-estar inesquecível"],
    duration: "2h a 3h de pura desconexão",
    recovery: "Sensação imediata de renovação e leveza",
    benefits: ["Alívio profundo de dores e contraturas", "Hidratação profunda da pele", "Paz interior e relaxamento absoluto"]
  },
  {
    id: "drenagem-pos-operatorio",
    category: "corporal",
    title: "Drenagem Linfática & Pós-Operatório",
    subtitle: "Recuperação acelerada, prevenção de fibroses e desinchaço",
    badge: "Cuidados Especiais",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Manobras fisioterápicas especializadas para eliminação de líquidos retidos e cicatrização perfeita.",
    fullDesc: "Realizada por profissionais com vasta experiência em recuperação pós-cirúrgica (lipoaspiração, abdominoplastia, mamoplastia) e também para retenção hídrica crônica. Utilizamos técnicas manuais suaves combinadas com recursos terapêuticos avançados para garantir conforto, diminuir edemas e modelar o corpo.",
    indications: ["Pós-cirúrgico de cirurgia plástica", "Retenção hídrica e sensação de pernas pesadas", "Gestantes e pós-parto"],
    duration: "50 a 60 minutos",
    recovery: "Imediato alívio e conforto",
    benefits: ["Aceleração expressiva da cicatrização", "Prevenção de aderências e seromas", "Redução drástica do inchaço"]
  },
  {
    id: "limpeza-glow",
    category: "facial",
    title: "Limpeza de Pele Profunda & Glow Jurerê",
    subtitle: "Desintoxicação celular, extração suave e luminosidade imediata",
    badge: "Essencial",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Protocolo completo com vapor de ozônio, sucção indolor, alta frequência e máscara antioxidante.",
    fullDesc: "Muito mais que uma simples limpeza, nosso protocolo combina desobstrução profunda dos poros com infusão de ativos antioxidantes e ácido hialurônico. Devolve o viço natural, uniformiza o tom da pele e prepara o rosto para absorver tratamentos dermatológicos com máxima eficácia.",
    indications: ["Cravos, miliuns e excesso de oleosidade", "Pele opaca e sem vitalidade", "Preparação para eventos sociais"],
    duration: "75 minutos",
    recovery: "Pele luminosa e calma no mesmo dia",
    benefits: ["Poros visivelmente reduzidos e limpos", "Toque aveludado e textura homogênea", "Brilho natural 'clean girl aesthetic'"]
  }
];

// Initialize on DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  renderProcedures("all");
  setupFilterTabs();
  setupModal();
  setupQuiz();
  setupFAQ();
  setupWhatsAppLinks();
});

// Setup Mobile Menu & Navbar Effects
function setupNavigation() {
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const navHeader = document.getElementById("navbar-header");

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.contains("hidden");
      if (isHidden) {
        mobileMenu.classList.remove("hidden");
      } else {
        mobileMenu.classList.add("hidden");
      }
    });

    // Close menu when clicking links
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navHeader.classList.add("shadow-lg", "bg-slate-950/95");
      navHeader.classList.remove("bg-slate-950/80");
    } else {
      navHeader.classList.remove("shadow-lg", "bg-slate-950/95");
      navHeader.classList.add("bg-slate-950/80");
    }
  });
}

// Render Procedures Cards
function renderProcedures(category = "all") {
  const container = document.getElementById("procedures-grid");
  if (!container) return;

  const filtered = category === "all" 
    ? PROCEDURES 
    : PROCEDURES.filter(item => item.category === category);

  container.innerHTML = filtered.map(proc => `
    <div class="glass-card rounded-2xl overflow-hidden hover-lift border border-amber-900/10 flex flex-col h-full bg-white transition duration-300">
      <div class="relative h-56 img-zoom-container bg-slate-900">
        <img 
          src="${proc.image}" 
          alt="${proc.title}" 
          class="w-full h-full object-cover"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
        <span class="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/90 text-slate-950 shadow-sm backdrop-blur-sm">
          ${proc.badge}
        </span>
      </div>

      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span class="text-xs uppercase font-medium text-amber-700 tracking-wider">
            ${proc.category === 'facial' ? 'Procedimento Facial' : proc.category === 'corporal' ? 'Procedimento Corporal' : 'Day Spa & Bem-Estar'}
          </span>
          <h3 class="text-xl font-bold font-serif-luxury text-slate-900 mt-1 mb-2">
            ${proc.title}
          </h3>
          <p class="text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
            ${proc.shortDesc}
          </p>
        </div>

        <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button 
            onclick="openProcedureModal('${proc.id}')"
            class="text-sm font-semibold text-amber-800 hover:text-amber-950 flex items-center gap-1 group transition"
          >
            <span>Ver Detalhes</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          <a 
            href="${buildWhatsAppUrl(`Olá! Gostaria de agendar uma avaliação para ${proc.title} na Physicos Jurerê.`)}"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 text-xs font-bold rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition shadow-sm"
          >
            Agendar
          </a>
        </div>
      </div>
    </div>
  `).join("");
}

// Category Tabs Filter
function setupFilterTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("active", "bg-slate-900", "text-amber-400", "border-amber-500");
        t.classList.add("bg-white", "text-slate-700", "border-slate-200");
      });
      tab.classList.add("active", "bg-slate-900", "text-amber-400", "border-amber-500");
      tab.classList.remove("bg-white", "text-slate-700", "border-slate-200");

      const category = tab.dataset.category;
      renderProcedures(category);
    });
  });
}

// Modal Logic
function setupModal() {
  const modal = document.getElementById("procedure-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  const backdrop = document.getElementById("modal-backdrop");

  if (!modal) return;

  const closeModal = () => {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

function openProcedureModal(id) {
  const proc = PROCEDURES.find(p => p.id === id);
  if (!proc) return;

  const modal = document.getElementById("procedure-modal");
  const titleEl = document.getElementById("modal-title");
  const subtitleEl = document.getElementById("modal-subtitle");
  const descEl = document.getElementById("modal-desc");
  const imgEl = document.getElementById("modal-image");
  const badgeEl = document.getElementById("modal-badge");
  const durationEl = document.getElementById("modal-duration");
  const recoveryEl = document.getElementById("modal-recovery");
  const indicationsList = document.getElementById("modal-indications");
  const benefitsList = document.getElementById("modal-benefits");
  const ctaBtn = document.getElementById("modal-cta-btn");

  if (titleEl) titleEl.textContent = proc.title;
  if (subtitleEl) subtitleEl.textContent = proc.subtitle;
  if (descEl) descEl.textContent = proc.fullDesc;
  if (imgEl) {
    imgEl.src = proc.image;
    imgEl.alt = proc.title;
  }
  if (badgeEl) badgeEl.textContent = proc.badge;
  if (durationEl) durationEl.textContent = proc.duration;
  if (recoveryEl) recoveryEl.textContent = proc.recovery;

  if (indicationsList) {
    indicationsList.innerHTML = proc.indications.map(item => `
      <li class="flex items-center gap-2 text-sm text-slate-700">
        <span class="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
        ${item}
      </li>
    `).join("");
  }

  if (benefitsList) {
    benefitsList.innerHTML = proc.benefits.map(item => `
      <li class="flex items-center gap-2 text-sm text-slate-700">
        <span class="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
        ${item}
      </li>
    `).join("");
  }

  if (ctaBtn) {
    ctaBtn.href = buildWhatsAppUrl(`Olá! Li os detalhes de *${proc.title}* no site da Physicos Jurerê e gostaria de verificar horários para uma avaliação.`);
  }

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

// Interactive Quiz / Protocol Recommendation
function setupQuiz() {
  const quizForm = document.getElementById("protocol-quiz-form");
  const quizResult = document.getElementById("quiz-result");
  const resultTitle = document.getElementById("result-plan-title");
  const resultDesc = document.getElementById("result-plan-desc");
  const resultCta = document.getElementById("result-plan-cta");
  const resetBtn = document.getElementById("quiz-reset-btn");

  if (!quizForm) return;

  quizForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(quizForm);
    const goal = formData.get("goal");
    const timeline = formData.get("timeline");

    if (!goal || !timeline) {
      alert("Por favor, selecione seu objetivo e prazo.");
      return;
    }

    let recommendation = {
      title: "Protocolo Glow & Definição Jurerê",
      desc: "Combinação ideal de harmonização estética e drenagem com alta tecnologia para resultados harmônicos e imediatos.",
      tag: "Rejuvenescimento & Glow"
    };

    if (goal === "gordura") {
      recommendation = {
        title: "Protocolo LipoSculpt 360° (Endolaser + Criolipólise)",
        desc: "Foco intensivo na quebra definitiva de adipócitos e retração dérmica contra flacidez, perfeito para esculpir o contorno corporal.",
        tag: "Remodelagem Corporal"
      };
    } else if (goal === "flacidez") {
      recommendation = {
        title: "Protocolo Colágeno Puro (Bioestimuladores + Endolifting)",
        desc: "Reativação profunda de fibroblastos para suporte da face e pescoço, sem alteração dos traços naturais.",
        tag: "Firmeza & Sustentação"
      };
    } else if (goal === "spa") {
      recommendation = {
        title: "Day Spa Signature Physicos Jurerê",
        desc: "Imersão de bem-estar com massagem de pedras vulcânicas aquecidas, máscara glow e aromaterapia anti-estresse.",
        tag: "Relaxamento & Desconexão"
      };
    } else if (goal === "pos_operatorio") {
      recommendation = {
        title: "Protocolo Recovery Pós-Cirúrgico Especializado",
        desc: "Drenagem linfática manual hospitalar/ambulatorial, desobstrução de líquidos e prevenção de fibroses com acompanhamento rigoroso.",
        tag: "Recuperação Acelerada"
      };
    }

    if (resultTitle) resultTitle.textContent = recommendation.title;
    if (resultDesc) resultDesc.textContent = recommendation.desc;
    if (resultCta) {
      const msg = `Olá Physicos Jurerê! Fiz o simulador no site e meu resultado foi o *${recommendation.title}* (Objetivo: ${goal}, Prazo: ${timeline}). Gostaria de agendar uma consulta presencial.`;
      resultCta.href = buildWhatsAppUrl(msg);
    }

    quizForm.classList.add("hidden");
    quizResult.classList.remove("hidden");
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      quizForm.reset();
      quizResult.classList.add("hidden");
      quizForm.classList.remove("hidden");
    });
  }
}

// FAQ Accordion
function setupFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    const answerEl = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    if (questionBtn && answerEl) {
      questionBtn.addEventListener("click", () => {
        const isOpen = !answerEl.classList.contains("hidden");
        // Close others
        document.querySelectorAll(".faq-answer").forEach(ans => ans.classList.add("hidden"));
        document.querySelectorAll(".faq-icon").forEach(ic => ic.classList.remove("rotate-180"));

        if (!isOpen) {
          answerEl.classList.remove("hidden");
          if (icon) icon.classList.add("rotate-180");
        }
      });
    }
  });
}

// WhatsApp Helper
function buildWhatsAppUrl(text) {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encoded}`;
}

function setupWhatsAppLinks() {
  // Atualiza automaticamente todos os links do WhatsApp para o número configurado em CLINIC_INFO
  const allWhatsAppLinks = document.querySelectorAll('a[href*="wa.me"]');
  allWhatsAppLinks.forEach(link => {
    try {
      const currentHref = link.getAttribute("href");
      if (currentHref) {
        // Extrai o texto da mensagem existente se houver
        const urlObj = new URL(currentHref.startsWith("http") ? currentHref : `https://${currentHref}`);
        const textParam = urlObj.searchParams.get("text") || "Olá! Gostaria de mais informações sobre a Physicos Jurerê.";
        link.setAttribute("href", buildWhatsAppUrl(textParam));
      }
    } catch (e) {
      // Fallback
      link.setAttribute("href", buildWhatsAppUrl("Olá! Gostaria de agendar um horário na Physicos Jurerê."));
    }
  });
}
