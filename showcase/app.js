const data = window.RESEARCH_DATA;

const languageSwitch = document.querySelector("#language-switch");
const heroTitle = document.querySelector("#hero-title");
const heroAuthor = document.querySelector("#hero-author");
const heroStats = document.querySelector("#hero-stats");
const heroPanels = document.querySelector("#hero-panels");
const introCards = document.querySelector("#intro-cards");
const questionList = document.querySelector("#question-list");
const pipelineGrid = document.querySelector("#pipeline-grid");
const modelGrid = document.querySelector("#model-grid");
const strategyGrid = document.querySelector("#strategy-grid");
const taskTabs = document.querySelector("#task-tabs");
const regimeTabs = document.querySelector("#regime-tabs");
const resultsContext = document.querySelector("#results-context");
const resultsChart = document.querySelector("#results-chart");
const resultInsights = document.querySelector("#result-insights");
const keyFindingGrid = document.querySelector("#key-finding-grid");
const datasetGrid = document.querySelector("#dataset-grid");
const distributionGrid = document.querySelector("#distribution-grid");
const reliabilityGrid = document.querySelector("#reliability-grid");
const sampleGrid = document.querySelector("#sample-grid");
const formatGrid = document.querySelector("#format-grid");
const findingGrid = document.querySelector("#finding-grid");

let activeLanguage = window.localStorage.getItem("showcaseLanguage") || "en";
let activeTask = data.results.taskOrder[0];
let activeRegime = Object.keys(data.results[activeTask].regimes)[0];

function copyValue(value) {
  if (
    value &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    (Object.prototype.hasOwnProperty.call(value, "en") ||
      Object.prototype.hasOwnProperty.call(value, "ar"))
  ) {
    return value[activeLanguage] || value.en || value.ar;
  }

  return value;
}

function ui(key) {
  return data.ui[activeLanguage][key];
}

function score(value) {
  return Number(value).toFixed(3);
}

function percent(value, total) {
  return ((value / total) * 100).toFixed(1);
}

function maxReliabilityValue() {
  return Math.max(...data.reliability.map((item) => item.value), 1);
}

function setText(id, value) {
  const element = document.querySelector(`#${id}`);

  if (element) {
    element.textContent = value;
  }
}

function renderStaticUI() {
  document.title = ui("documentTitle");
  document.documentElement.lang = activeLanguage === "ar" ? "ar" : "en";
  document.documentElement.dir = activeLanguage === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("mode-ar", activeLanguage === "ar");

  [
    "brandTitle",
    "brandSubtitle",
    "navOverview",
    "navPipeline",
    "navModels",
    "navResults",
    "navFindings",
    "navDatasets",
    "navExamples",
    "navThesis",
    "heroEyebrow",
    "heroHeading",
    "heroLede",
    "heroDownload",
    "heroResults",
    "heroExamples",
    "heroPanelEyebrow",
    "heroPanelHeading",
    "overviewEyebrow",
    "overviewHeading",
    "overviewCopy",
    "questionsHeading",
    "pipelineEyebrow",
    "pipelineHeading",
    "pipelineCopy",
    "modelsEyebrow",
    "modelsHeading",
    "modelsCopy",
    "resultsEyebrow",
    "resultsHeading",
    "resultsCopy",
    "findingsEyebrow",
    "findingsHeading",
    "findingsCopy",
    "datasetsEyebrow",
    "datasetsHeading",
    "datasetsCopy",
    "examplesEyebrow",
    "examplesHeading",
    "examplesCopy",
    "samplePanelHeading",
    "formatPanelHeading",
    "reliabilityEyebrow",
    "reliabilityHeading",
    "reliabilityCopy",
    "reliabilityCardHeading",
    "reliabilityCardCopy",
    "decisionEyebrow",
    "decisionHeading",
    "decisionCopy",
    "decisionDownload",
    "decisionResults",
    "footerCopy",
  ].forEach((key) => {
    const target = key
      .replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`)
      .replace(/^nav-/, "nav-");
    setText(target, ui(key));
  });
}

function renderLanguageSwitch() {
  languageSwitch.innerHTML = `
    <button class="lang-button ${activeLanguage === "en" ? "is-active" : ""}" data-lang="en" type="button">
      ${ui("languageEnglish")}
    </button>
    <button class="lang-button ${activeLanguage === "ar" ? "is-active" : ""}" data-lang="ar" type="button">
      ${ui("languageArabic")}
    </button>
  `;

  languageSwitch.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      activeLanguage = button.dataset.lang;
      window.localStorage.setItem("showcaseLanguage", activeLanguage);
      renderAll();
    });
  });
}

function renderHero() {
  heroTitle.textContent = copyValue(data.meta.title);
  heroAuthor.textContent =
    activeLanguage === "ar" ? `إعداد ${data.meta.author}` : `By ${data.meta.author}`;

  heroStats.innerHTML = data.heroStats
    .map(
      (stat) => `
        <article class="stat-card">
          <strong>${stat.value}</strong>
          <span>${copyValue(stat.label)}</span>
        </article>
      `,
    )
    .join("");

  heroPanels.innerHTML = data.heroPanels
    .map(
      (panel) => `
        <article class="signal-card">
          <h3>${copyValue(panel.title)}</h3>
          <p>${copyValue(panel.copy)}</p>
        </article>
      `,
    )
    .join("");
}

function renderOverview() {
  introCards.innerHTML = data.introCards
    .map(
      (card) => `
        <article class="info-card">
          <h3>${copyValue(card.title)}</h3>
          <p>${copyValue(card.copy)}</p>
        </article>
      `,
    )
    .join("");

  questionList.innerHTML = data.questions
    .map(
      (question) => `
        <article class="question-card">
          <span>${question.id}</span>
          <p>${copyValue(question.text)}</p>
        </article>
      `,
    )
    .join("");
}

function renderPipeline() {
  pipelineGrid.innerHTML = data.pipeline
    .map(
      (step) => `
        <article class="timeline-card" data-reveal>
          <span class="timeline-step">${step.step}</span>
          <h3>${copyValue(step.title)}</h3>
          <p>${copyValue(step.copy)}</p>
          <small>${copyValue(step.meta)}</small>
        </article>
      `,
    )
    .join("");
}

function renderModels() {
  modelGrid.innerHTML = data.modelFamilies
    .map(
      (model) => `
        <article class="model-card" data-reveal>
          <div class="model-header">
            <span class="pill">${copyValue(model.badge)}</span>
            <h3>${model.name}</h3>
            <strong class="model-highlight">${copyValue(model.highlight)}</strong>
          </div>
          <div class="model-block">
            <p class="model-label">${ui("roleLabel")}</p>
            <p>${copyValue(model.role)}</p>
          </div>
          <div class="model-block">
            <p class="model-label">${ui("whyLabel")}</p>
            <p>${copyValue(model.why)}</p>
          </div>
          <div class="model-points">
            ${model.strengths.map((strength) => `<p>${copyValue(strength)}</p>`).join("")}
          </div>
          <div class="model-risk">
            <p class="model-label">${ui("limitationLabel")}</p>
            <p>${copyValue(model.risk)}</p>
          </div>
        </article>
      `,
    )
    .join("");

  strategyGrid.innerHTML = data.adaptationStrategies
    .map(
      (strategy) => `
        <article class="strategy-card" data-reveal>
          <div class="strategy-topline">
            <span class="pill">${copyValue(strategy.badge)}</span>
            <h3>${copyValue(strategy.name)}</h3>
          </div>
          <p>${copyValue(strategy.summary)}</p>
          <div class="strategy-note">
            <strong>${ui("observedLabel")}</strong>
            <p>${copyValue(strategy.observed)}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderTaskTabs() {
  taskTabs.innerHTML = data.results.taskOrder
    .map((taskKey) => {
      const task = data.results[taskKey];
      const activeClass = taskKey === activeTask ? "is-active" : "";
      return `
        <button class="tab-button ${activeClass}" data-task="${taskKey}" type="button">
          <span>${copyValue(task.label)}</span>
          <small>${copyValue(task.metricLabel)}</small>
        </button>
      `;
    })
    .join("");

  taskTabs.querySelectorAll("[data-task]").forEach((button) => {
    button.addEventListener("click", () => {
      activeTask = button.dataset.task;
      activeRegime = Object.keys(data.results[activeTask].regimes)[0];
      renderTaskTabs();
      renderResults();
    });
  });
}

function renderRegimeTabs() {
  const regimes = data.results[activeTask].regimes;
  const keys = Object.keys(regimes);

  if (keys.length === 1) {
    regimeTabs.innerHTML = "";
    regimeTabs.classList.add("is-hidden");
    return;
  }

  regimeTabs.classList.remove("is-hidden");
  regimeTabs.innerHTML = keys
    .map((regimeKey) => {
      const regime = regimes[regimeKey];
      const activeClass = regimeKey === activeRegime ? "is-active" : "";
      return `
        <button class="tab-button ${activeClass}" data-regime="${regimeKey}" type="button">
          <span>${copyValue(regime.label)}</span>
        </button>
      `;
    })
    .join("");

  regimeTabs.querySelectorAll("[data-regime]").forEach((button) => {
    button.addEventListener("click", () => {
      activeRegime = button.dataset.regime;
      renderResults();
    });
  });
}

function renderResults() {
  const task = data.results[activeTask];
  const regime = task.regimes[activeRegime];

  renderRegimeTabs();

  resultsContext.innerHTML = `
    <div>
      <p class="eyebrow">${ui("currentView")}</p>
      <h3>${copyValue(task.title)}</h3>
      <p>${copyValue(task.description)}</p>
    </div>
    <div class="context-note">
      <strong>${copyValue(task.metricLabel)}</strong>
      <span>${copyValue(regime.context)}</span>
    </div>
  `;

  resultsChart.innerHTML = regime.entries
    .map(
      (entry) => `
        <article class="chart-row">
          <div class="chart-label">
            <strong>${entry.label}</strong>
            <span class="family-chip family-${entry.family}">${entry.family === "encoder" ? ui("familyEncoder") : ui("familyGenerative")}</span>
          </div>
          <div class="chart-track">
            <div class="chart-fill family-${entry.family}" style="width: ${entry.score * 100}%"></div>
          </div>
          <div class="chart-score">
            <strong>${score(entry.score)}</strong>
            <span>${entry.detail}</span>
          </div>
        </article>
      `,
    )
    .join("");

  resultInsights.innerHTML = regime.insights
    .map(
      (insight) => `
        <article class="mini-card">
          <p>${copyValue(insight)}</p>
        </article>
      `,
    )
    .join("");
}

function renderKeyFindings() {
  keyFindingGrid.innerHTML = data.keyFindings
    .map(
      (finding) => `
        <article class="key-finding-card" data-reveal>
          <span class="metric-chip">${finding.metric}</span>
          <h3>${copyValue(finding.title)}</h3>
          <p>${copyValue(finding.summary)}</p>
          <div class="key-finding-block">
            <strong>${ui("evidenceLabel")}</strong>
            <p>${copyValue(finding.evidence)}</p>
          </div>
          <div class="key-finding-block">
            <strong>${ui("whyMattersLabel")}</strong>
            <p>${copyValue(finding.meaning)}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderDatasets() {
  datasetGrid.innerHTML = data.datasets
    .map(
      (dataset) => `
        <article class="dataset-card" data-reveal>
          <div class="dataset-topline">
            <span class="pill">${copyValue(dataset.badge)}</span>
            <h3>${copyValue(dataset.title)}</h3>
          </div>
          <div class="fact-list">
            ${dataset.facts.map((fact) => `<p>${copyValue(fact)}</p>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");

  distributionGrid.innerHTML = data.distributions
    .map((distribution) => {
      const total = distribution.segments.reduce((sum, segment) => sum + segment.value, 0);
      return `
        <article class="distribution-card" data-reveal>
          <h3>${copyValue(distribution.title)}</h3>
          <p>${copyValue(distribution.caption)}</p>
          <div class="distribution-bar">
            ${distribution.segments
              .map(
                (segment) => `
                  <span
                    class="distribution-segment tone-${segment.color}"
                    style="width: ${segment.value / total * 100}%"
                    title="${copyValue(segment.label)}: ${segment.value}"
                  ></span>
                `,
              )
              .join("")}
          </div>
          <div class="distribution-legend">
            ${distribution.segments
              .map(
                (segment) => `
                  <div class="legend-item">
                    <span class="legend-dot tone-${segment.color}"></span>
                    <strong>${copyValue(segment.label)}</strong>
                    <span>${segment.value} (${percent(segment.value, total)}%)</span>
                  </div>
                `,
              )
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderReliability() {
  const maximum = maxReliabilityValue();

  reliabilityGrid.innerHTML = data.reliability
    .map(
      (item) => `
        <article class="reliability-row">
          <div class="reliability-label">
            <strong>${item.label}</strong>
            <span>${copyValue(item.note)}</span>
          </div>
          <div class="reliability-track">
            <div class="reliability-fill" style="width: ${(item.value / maximum) * 100}%"></div>
          </div>
          <strong class="reliability-value">${item.value}</strong>
        </article>
      `,
    )
    .join("");
}

function renderLab() {
  sampleGrid.innerHTML = data.samples
    .map(
      (sample) => `
        <article class="sample-card">
          <div class="sample-topline">
            <span class="pill">${copyValue(sample.task)}</span>
          </div>
          <p class="sample-text" dir="auto">${sample.text}</p>
          <strong>${copyValue(sample.outcome)}</strong>
          <p>${copyValue(sample.note)}</p>
        </article>
      `,
    )
    .join("");

  formatGrid.innerHTML = data.taskFormats
    .map(
      (entry) => `
        <article class="format-card">
          <h3>${copyValue(entry.title)}</h3>
          <p>${copyValue(entry.body)}</p>
        </article>
      `,
    )
    .join("");
}

function renderFindings() {
  findingGrid.innerHTML = data.decisionGuide
    .map(
      (finding) => `
        <article class="finding-card">
          <h3>${copyValue(finding.title)}</h3>
          <p>${copyValue(finding.copy)}</p>
        </article>
      `,
    )
    .join("");
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  document.querySelectorAll("[data-reveal]").forEach((element) => {
    element.classList.remove("is-visible");
    observer.observe(element);
  });
}

function renderAll() {
  renderStaticUI();
  renderLanguageSwitch();
  renderHero();
  renderOverview();
  renderPipeline();
  renderModels();
  renderTaskTabs();
  renderResults();
  renderKeyFindings();
  renderDatasets();
  renderReliability();
  renderLab();
  renderFindings();
  setupReveal();
}

renderAll();
