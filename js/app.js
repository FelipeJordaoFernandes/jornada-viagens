const packageDetails = {
  japao: {
    title: "Japão",
    price: "R$ 4000",
    summary:
      "Pacote com passagem aérea, hospedagem e roteiro cultural pelas principais cidades japonesas.",
    highlights: ["7 diárias", "Café da manhã incluso", "Passeios em Tóquio e Osaka"],
  },
  "san-andreas": {
    title: "San Andreas",
    price: "R$ 3000",
    summary:
      "Uma viagem urbana para quem gosta de paisagens icônicas, compras e entretenimento.",
    highlights: ["5 diárias", "Hotel bem localizado", "Transfer aeroporto-hotel"],
  },
  paraiba: {
    title: "Paraiba",
    price: "R$ 1200",
    summary:
      "Praias, gastronomia regional e descanso em um pacote nacional com ótimo custo-benefício.",
    highlights: ["4 diárias", "Passeio pelo litoral", "Opção de pagamento no Pix"],
  },
  manaus: {
    title: "Manaus",
    price: "R$ 1600",
    summary:
      "Experiência amazônica com cultura local, natureza e passeios guiados pela região.",
    highlights: ["4 diárias", "Tour pelo centro histórico", "Passeio de barco opcional"],
  },
  tokyo: {
    title: "Tóquio",
    price: "A partir de R$ 4000",
    summary:
      "Roteiro para explorar templos, tecnologia, gastronomia e bairros clássicos da capital japonesa.",
    highlights: ["Roteiro personalizado", "Suporte da equipe Jornada", "Indicações gastronômicas"],
  },
  osaka: {
    title: "Osaka",
    price: "A partir de R$ 3800",
    summary:
      "Destino perfeito para gastronomia, vida noturna e conexão com outras cidades do Japão.",
    highlights: ["Roteiro gastronômico", "Fácil acesso a Kyoto", "Hospedagem central"],
  },
  hiroshima: {
    title: "Hiroshima",
    price: "Consulte disponibilidade",
    summary:
      "Uma cidade histórica, marcada por memória, paz e excelentes experiências culturais.",
    highlights: ["Museus e memória histórica", "Gastronomia local", "Bate-volta para Miyajima"],
  },
  kyoto: {
    title: "Kyoto",
    price: "Consulte disponibilidade",
    summary:
      "Templos, jardins e tradições japonesas em um dos destinos mais bonitos do país.",
    highlights: ["Templos históricos", "Cerimônia do chá", "Roteiro cultural"],
  },
};

const categoryFilters = {
  todos: "Todos",
  internacional: "Internacionais",
  nacional: "Nacionais",
};

const packageCategories = {
  japao: "internacional",
  "san-andreas": "internacional",
  paraiba: "nacional",
  manaus: "nacional",
};

const itemAliases = {
  toquio: "tokyo",
};

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function setupNavigation() {
  const menuCheckbox = document.querySelector("#menu");
  const menuLabel = document.querySelector('label[for="menu"]');
  const nav = document.querySelector(".navigation-menu nav");

  if (!menuCheckbox || !menuLabel || !nav) return;

  const button = document.createElement("button");
  button.className = "menu-toggle";
  button.type = "button";
  button.setAttribute("aria-controls", "site-navigation");
  button.setAttribute("aria-expanded", "false");
  button.innerHTML = menuLabel.innerHTML;

  nav.id = "site-navigation";
  menuLabel.replaceWith(button);

  button.addEventListener("click", () => {
    menuCheckbox.checked = !menuCheckbox.checked;
    button.setAttribute("aria-expanded", String(menuCheckbox.checked));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuCheckbox.checked = false;
      button.setAttribute("aria-expanded", "false");
    }
  });
}

function getItemKey(element) {
  const title = normalizeText(element.querySelector("h3")?.textContent || "");
  const classKey = Object.keys(packageDetails).find((key) =>
    element.classList.contains(key),
  );

  if (classKey) return classKey;

  const aliasKey = Object.entries(itemAliases).find(([alias]) =>
    title.includes(alias),
  )?.[1];

  if (aliasKey) return aliasKey;

  return Object.keys(packageDetails).find((key) => title.includes(key)) || "";
}

function setupPackageFilters() {
  const offers = document.querySelector(".offers");
  const cardsContainer = offers?.querySelector(".offers-cards");
  const cards = [...(cardsContainer?.querySelectorAll(".card") || [])];

  if (!offers || !cardsContainer || cards.length === 0) return;

  const filters = document.createElement("div");
  filters.className = "package-filters";
  filters.setAttribute("aria-label", "Filtrar ofertas");

  Object.entries(categoryFilters).forEach(([filter, label], index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-button${index === 0 ? " is-active" : ""}`;
    button.dataset.filter = filter;
    button.setAttribute("aria-pressed", String(index === 0));
    button.textContent = label;
    filters.append(button);
  });

  cardsContainer.before(filters);

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    filters.querySelector(".is-active")?.classList.remove("is-active");
    filters.querySelectorAll("button").forEach((filterButton) => {
      filterButton.setAttribute("aria-pressed", "false");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");

    cards.forEach((card) => {
      const key = getItemKey(card);
      const category = packageCategories[key];
      const shouldShow = button.dataset.filter === "todos" || category === button.dataset.filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
}

function createDetailsModal() {
  const modal = document.createElement("dialog");
  modal.className = "details-modal";
  modal.innerHTML = `
    <div class="details-modal__content">
      <div class="details-modal__header">
        <div>
          <h2></h2>
          <p class="details-modal__price"></p>
        </div>
        <button class="modal-close" type="button" aria-label="Fechar detalhes">&times;</button>
      </div>
      <p class="details-modal__summary"></p>
      <ul></ul>
      <a class="button" href="contact.html">Quero esse pacote</a>
    </div>
  `;

  modal.querySelector(".modal-close").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });

  document.body.append(modal);
  return modal;
}

function setupDetailsModal() {
  const links = [...document.querySelectorAll('a.button[href="#"]')];
  if (links.length === 0) return;

  const modal = createDetailsModal();

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const article = link.closest("article");
      const key = article ? getItemKey(article) : "";
      const details = packageDetails[key];

      if (!details) return;

      event.preventDefault();
      modal.querySelector("h2").textContent = details.title;
      modal.querySelector(".details-modal__price").textContent = details.price;
      modal.querySelector(".details-modal__summary").textContent = details.summary;
      modal.querySelector("ul").innerHTML = details.highlights
        .map((highlight) => `<li>${highlight}</li>`)
        .join("");
      modal.showModal();
    });
  });
}

function setupContactForm() {
  const form = document.querySelector(".form form");
  if (!form) return;

  form.noValidate = true;

  const fields = [...form.querySelectorAll("input, textarea")];
  const status = document.createElement("p");
  status.className = "form-status";
  status.hidden = true;
  form.append(status);

  fields.forEach((field) => {
    const wrapper = document.createElement("label");
    wrapper.className = "form-field";
    const message = document.createElement("span");
    message.className = "field-message";
    message.setAttribute("aria-live", "polite");

    field.before(wrapper);
    wrapper.append(field, message);
  });

  function validateField(field) {
    const wrapper = field.closest(".form-field");
    const message = wrapper.querySelector(".field-message");
    let error = "";

    if (!field.value.trim()) {
      error = "Preencha este campo.";
    } else if (field.type === "email" && !field.validity.valid) {
      error = "Informe um e-mail válido.";
    } else if (field.type === "tel" && field.value.replace(/\D/g, "").length < 10) {
      error = "Informe um telefone com DDD.";
    } else if (field.name === "message" && field.value.trim().length < 20) {
      error = "Conte um pouco mais para entendermos sua solicitação.";
    }

    wrapper.classList.toggle("has-error", Boolean(error));
    message.textContent = error;
    return !error;
  }

  fields.forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => {
      if (field.closest(".form-field").classList.contains("has-error")) {
        validateField(field);
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isValid = fields.map(validateField).every(Boolean);

    if (!isValid) {
      form.querySelector(".has-error input, .has-error textarea")?.focus();
      return;
    }

    status.hidden = false;
    status.textContent =
      "Mensagem enviada com sucesso! Em um projeto real, estes dados seriam enviados para uma API.";
    form.reset();
  });
}

function setupScrollReveal() {
  const elements = document.querySelectorAll(
    ".section-title, .card, .category, .destination-items article, .payment-items, .testimonial-container article, .tokyo-items > div",
  );

  if (!("IntersectionObserver" in window)) return;

  elements.forEach((element) => element.classList.add("reveal-on-scroll"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  elements.forEach((element) => observer.observe(element));
}

setupNavigation();
setupPackageFilters();
setupDetailsModal();
setupContactForm();
setupScrollReveal();
