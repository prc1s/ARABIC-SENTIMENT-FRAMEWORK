const RESEARCH_DATA = {
  meta: {
    title: {
      en:
        "Empirical Investigation of Generative LLM Adaptation Strategies and Supervised Encoder Models for Arabic Sentiment Analysis",
      ar:
        "دراسة تجريبية لاستراتيجيات تكييف النماذج اللغوية الكبيرة التوليدية والنماذج الترميزية الخاضعة للإشراف في تحليل المشاعر العربية",
    },
    author: "Mohammed Aljowaie",
    thesisFile: "assets/arabic_sentiment_fyp_Final.pdf",
  },
  ui: {
    en: {
      documentTitle:
        "Empirical Investigation of Generative LLM Adaptation Strategies and Supervised Encoder Models for Arabic Sentiment Analysis",
      brandTitle: "Arabic Sentiment Analysis",
      brandSubtitle: "research showcase",
      navOverview: "Overview",
      navPipeline: "Pipeline",
      navModels: "Models",
      navResults: "Results",
      navFindings: "Findings",
      navDatasets: "Datasets",
      navExamples: "Examples",
      navThesis: "Thesis",
      heroEyebrow: "Final-year research showcase",
      heroHeading:
        "Empirical Investigation of Generative LLM Adaptation Strategies and Supervised Encoder Models for Arabic Sentiment Analysis",
      heroLede:
        "Comparing Allam, mBERT, and AraBERT across sentence-level sentiment analysis, conditioned ABSA, and unconditioned ABSA under prompting, retrieval, and PEFT.",
      heroDownload: "Download Thesis",
      heroResults: "Explore Results",
      heroExamples: "View Examples",
      heroPanelEyebrow: "What this project shows",
      heroPanelHeading: "Three task formulations, one consistent comparison frame.",
      overviewEyebrow: "Overview",
      overviewHeading: "The study in one glance.",
      overviewCopy:
        "This page turns the thesis into a live demo: clear model comparisons, real results, and a stronger narrative than a static slide deck.",
      questionsHeading: "Research questions",
      pipelineEyebrow: "Pipeline",
      pipelineHeading: "How the experiments were structured.",
      pipelineCopy:
        "The comparison moves from datasets to task formulations to model families, keeping evaluation consistent across the whole project.",
      modelsEyebrow: "Models",
      modelsHeading: "Who the models are, and why each one matters in this comparison.",
      modelsCopy:
        "The site introduces the systems before the charts, so the audience can understand what each model is actually bringing to the table.",
      resultsEyebrow: "Results",
      resultsHeading: "Switch tasks and compare the strongest methods.",
      resultsCopy:
        "Every score below comes from the saved experiment outputs, with the most meaningful metric foregrounded for each task.",
      findingsEyebrow: "Key Findings",
      findingsHeading: "The strongest takeaways, pulled out of the charts.",
      findingsCopy:
        "This section foregrounds the thesis's most critical findings: low-resource encoder strength, the 3k-to-24k crossover, few-shot prompt degradation, the structural turning point in unconditioned ABSA, and reliability tradeoffs.",
      datasetsEyebrow: "Datasets",
      datasetsHeading: "Two datasets, three task views, very different balance profiles.",
      datasetsCopy:
        "The project deliberately spans both near-balanced sentence-level classification and highly imbalanced aspect-level prediction.",
      examplesEyebrow: "Examples",
      examplesHeading: "Arabic task examples.",
      examplesCopy:
        "Representative Arabic inputs and output formats used in the study.",
      samplePanelHeading: "Example inputs",
      formatPanelHeading: "Task formats",
      reliabilityEyebrow: "Reliability",
      reliabilityHeading: "Format adherence matters when the model has to generate structure.",
      reliabilityCopy:
        "Invalid outputs were counted whenever generative responses failed the expected schema and had to be treated as incorrect.",
      reliabilityCardHeading: "RAG stayed stable. Low-resource PEFT did not.",
      reliabilityCardCopy:
        "The contrast in invalid outputs helps explain why raw model capability and usable system behaviour can diverge.",
      decisionEyebrow: "Decision Guide",
      decisionHeading: "Which model family makes sense in which situation?",
      decisionCopy:
        "The thesis does not end with a single winner. It ends with a selection rule: choose the model family that matches your data regime, task structure, and tolerance for output-format risk.",
      decisionDownload: "Open Thesis PDF",
      decisionResults: "Jump To Results",
      footerCopy:
        "Designed as a live research demo for inspection day and future portfolio sharing.",
      currentView: "Current view",
      languageEnglish: "EN",
      languageArabic: "AR",
      familyEncoder: "encoder",
      familyGenerative: "generative",
      observedLabel: "Observed in this study",
      evidenceLabel: "Evidence",
      whyMattersLabel: "Why it matters",
      roleLabel: "Role in the study",
      whyLabel: "Why it matters",
      limitationLabel: "Main limitation",
    },
    ar: {
      documentTitle:
        "دراسة تجريبية لاستراتيجيات تكييف النماذج اللغوية الكبيرة التوليدية والنماذج الترميزية الخاضعة للإشراف في تحليل المشاعر العربية",
      brandTitle: "تحليل المشاعر العربية",
      brandSubtitle: "عرض بحثي",
      navOverview: "نظرة عامة",
      navPipeline: "المنهجية",
      navModels: "النماذج",
      navResults: "النتائج",
      navFindings: "الاستنتاجات",
      navDatasets: "البيانات",
      navExamples: "أمثلة",
      navThesis: "الرسالة",
      heroEyebrow: "عرض مشروع التخرج",
      heroHeading:
        "دراسة تجريبية لاستراتيجيات تكييف النماذج اللغوية الكبيرة التوليدية والنماذج الترميزية الخاضعة للإشراف في تحليل المشاعر العربية",
      heroLede:
        "مقارنة بين Allam و mBERT و AraBERT عبر تحليل المشاعر على مستوى الجملة، و ABSA المشروط، و ABSA غير المشروط تحت التلقين والاسترجاع و PEFT.",
      heroDownload: "تحميل الرسالة",
      heroResults: "استعراض النتائج",
      heroExamples: "عرض الأمثلة",
      heroPanelEyebrow: "ما الذي يوضحه المشروع",
      heroPanelHeading: "ثلاث صيغ للمهام ضمن إطار مقارنة واحد ومتسق.",
      overviewEyebrow: "نظرة عامة",
      overviewHeading: "الدراسة في لمحة واحدة.",
      overviewCopy:
        "تحول هذه الصفحة الرسالة إلى عرض حي: مقارنة واضحة بين النماذج، ونتائج حقيقية، وسرد أقوى من الشرائح التقليدية.",
      questionsHeading: "أسئلة البحث",
      pipelineEyebrow: "المنهجية",
      pipelineHeading: "كيف تم تنظيم التجارب.",
      pipelineCopy:
        "تتحرك المقارنة من البيانات إلى صيغ المهام ثم إلى عائلات النماذج، مع إبقاء التقييم متسقاً عبر المشروع كله.",
      modelsEyebrow: "النماذج",
      modelsHeading: "ما هي النماذج، ولماذا يهم كل واحد منها في هذه المقارنة؟",
      modelsCopy:
        "تقدم الصفحة الأنظمة قبل الرسوم البيانية حتى يفهم الجمهور ما الذي يضيفه كل نموذج فعلياً.",
      resultsEyebrow: "النتائج",
      resultsHeading: "بدّل بين المهام وقارن أقوى الأساليب.",
      resultsCopy:
        "كل درجة هنا مأخوذة من مخرجات التجارب المحفوظة، مع إبراز المقياس الأكثر معنى لكل مهمة.",
      findingsEyebrow: "أهم الاستنتاجات",
      findingsHeading: "أقوى الخلاصات المستخرجة مباشرة من الرسوم.",
      findingsCopy:
        "يعرض هذا القسم أهم نتائج الرسالة بوضوح: قوة النماذج الترميزية في البيئات منخفضة البيانات، ونقطة التحول بين 3k و24k، وتدهور التلقين قليل الأمثلة، والتحول البنيوي في ABSA غير المشروط، ومفاضلات الاعتمادية.",
      datasetsEyebrow: "البيانات",
      datasetsHeading: "مجموعتا بيانات، وثلاث صيغ للمهام، وتوازن مختلف جداً بين الفئات.",
      datasetsCopy:
        "يغطي المشروع تصنيفاً شبه متوازن على مستوى الجملة وتنبؤاً جانبياً غير متوازن بدرجة كبيرة.",
      examplesEyebrow: "أمثلة",
      examplesHeading: "أمثلة عربية للمهام.",
      examplesCopy:
        "مدخلات عربية وصيغ مخرجات تمثيلية مستخدمة في الدراسة.",
      samplePanelHeading: "أمثلة إدخال",
      formatPanelHeading: "صيغ المهام",
      reliabilityEyebrow: "الاعتمادية",
      reliabilityHeading: "الالتزام بالشكل مهم عندما يطلب من النموذج توليد بنية منظمة.",
      reliabilityCopy:
        "تم احتساب المخرجات غير الصالحة كلما فشلت الاستجابات التوليدية في مطابقة الصيغة المطلوبة وعوملت كأخطاء.",
      reliabilityCardHeading: "RAG ظل مستقراً، لكن PEFT منخفض البيانات لم يكن كذلك.",
      reliabilityCardCopy:
        "يوضح هذا التباين في المخرجات غير الصالحة لماذا قد تختلف القدرة الخام للنموذج عن السلوك القابل للاستخدام عملياً.",
      decisionEyebrow: "دليل الاختيار",
      decisionHeading: "أي عائلة نماذج تناسب أي حالة؟",
      decisionCopy:
        "لا تنتهي الرسالة بفائز واحد. بل تنتهي بقاعدة اختيار: اختر العائلة التي تناسب حجم البيانات، وبنية المهمة، ومدى تحملك لمخاطر تنسيق المخرجات.",
      decisionDownload: "فتح ملف الرسالة",
      decisionResults: "العودة إلى النتائج",
      footerCopy:
        "مصمم كعرض بحثي حي ليوم المناقشة ولاستخدامه لاحقاً ضمن ملفك الشخصي.",
      currentView: "العرض الحالي",
      languageEnglish: "EN",
      languageArabic: "ع",
      familyEncoder: "ترميزي",
      familyGenerative: "توليدي",
      observedLabel: "ما الذي ظهر في الدراسة",
      evidenceLabel: "الدليل",
      whyMattersLabel: "لماذا يهم",
      roleLabel: "دوره في الدراسة",
      whyLabel: "لماذا يهم",
      limitationLabel: "أهم قيد",
    },
  },
  heroStats: [
    { value: "3", label: { en: "task formulations", ar: "صيغ للمهام" } },
    { value: "34", label: { en: "aspect categories", ar: "فئات جانبية" } },
    { value: "0.764", label: { en: "best macro-F1 on SLSA", ar: "أفضل Macro-F1 في SLSA" } },
    { value: "+20.9 pts", label: { en: "LoRA lead in unconditioned ABSA", ar: "تفوق LoRA في ABSA غير المشروط" } },
  ],
  heroPanels: [
    {
      title: { en: "Low-resource classification", ar: "التصنيف منخفض البيانات" },
      copy:
        {
          en: "AraBERT is the safer choice when the task is straightforward and labelled data is limited.",
          ar: "يعد AraBERT الخيار الأكثر أماناً عندما تكون المهمة مباشرة والبيانات الموسومة محدودة.",
        },
    },
    {
      title: { en: "Structured extraction", ar: "الاستخراج المنظم" },
      copy:
        {
          en: "End-to-end generative decoding becomes decisive once the task requires joint aspect extraction and sentiment prediction.",
          ar: "يصبح التوليد من طرف إلى طرف حاسماً عندما تتطلب المهمة استخراج الجانب وتحديد المشاعر معاً.",
        },
    },
    {
      title: { en: "Prompt degradation matters", ar: "تدهور التلقين مهم" },
      copy:
        {
          en: "Few-shot prompting is not automatically better. On the classification-style tasks, it often degrades below zero-shot and becomes one of the study's clearest negative findings.",
          ar: "التلقين قليل الأمثلة ليس أفضل تلقائياً. ففي المهام ذات الطابع التصنيفي يهبط غالباً تحت التلقين الصفري، ويعد ذلك من أوضح النتائج السلبية في الدراسة.",
        },
    },
  ],
  introCards: [
    {
      title: { en: "Research focus", ar: "محور البحث" },
      copy:
        {
          en: "The project compares encoder baselines with generative adaptation strategies across SLSA, conditioned ABSA, and unconditioned ABSA within one consistent framework.",
          ar: "يقارن المشروع بين النماذج الترميزية الأساسية واستراتيجيات تكييف النماذج التوليدية عبر SLSA و ABSA المشروط و ABSA غير المشروط ضمن إطار واحد متسق.",
        },
    },
    {
      title: { en: "Model families", ar: "عائلات النماذج" },
      copy:
        {
          en: "Allam 7B is evaluated through zero-shot, few-shot, RAG, and LoRA/PEFT, then compared against fully fine-tuned mBERT and AraBERT baselines.",
          ar: "يتم تقييم Allam 7B عبر التلقين الصفري، والتلقين قليل الأمثلة، و RAG، و LoRA/PEFT، ثم مقارنته بخطي أساس مدرّبين بالكامل هما mBERT و AraBERT.",
        },
    },
    {
      title: { en: "Core finding", ar: "النتيجة الأساسية" },
      copy:
        {
          en: "There is no universal winner: encoders dominate low-resource classification, while PEFT-adapted generation becomes strongest with more data or more structural complexity.",
          ar: "لا يوجد فائز مطلق: تتفوق النماذج الترميزية في التصنيف منخفض البيانات، بينما يصبح التوليد المدعوم بـ PEFT الأقوى مع زيادة البيانات أو تعقيد البنية.",
        },
    },
  ],
  questions: [
    {
      id: "RQ1",
      text:
        {
          en: "How do generative adaptation strategies compare to supervised encoder models across simple and structured Arabic sentiment tasks?",
          ar: "كيف تقارن استراتيجيات تكييف النماذج التوليدية بالنماذج الترميزية الخاضعة للإشراف عبر مهام المشاعر العربية البسيطة والمنظمة؟",
        },
    },
    {
      id: "RQ2",
      text:
        {
          en: "How does task complexity change the relative strengths of generative and encoder-based approaches?",
          ar: "كيف يغيّر تعقيد المهمة من نقاط القوة النسبية بين المقاربات التوليدية والترميزية؟",
        },
    },
    {
      id: "RQ3",
      text:
        {
          en: "How does training data size shift the gap between prompt-based methods, PEFT, and encoder fine-tuning?",
          ar: "كيف يغيّر حجم بيانات التدريب الفجوة بين الأساليب المعتمدة على التلقين و PEFT وضبط النماذج الترميزية؟",
        },
    },
    {
      id: "RQ4",
      text:
        {
          en: "Which generative adaptation strategy provides the most reliable performance across tasks?",
          ar: "أي استراتيجية تكييف توليدية تقدم الأداء الأكثر اعتمادية عبر المهام؟",
        },
    },
  ],
  pipeline: [
    {
      step: "01",
      title: { en: "Datasets", ar: "البيانات" },
      copy:
        {
          en: "KAUST Arabic sentiment data supports SLSA, while SemEval 2016 Arabic hotel reviews support both conditioned and unconditioned ABSA.",
          ar: "تدعم بيانات KAUST العربية للمشاعر مهمة SLSA، بينما تدعم مراجعات الفنادق العربية من SemEval 2016 مهمتي ABSA المشروط وغير المشروط.",
        },
      meta: {
        en: "24,000 or 3,000 SLSA train examples, plus 1,564 ABSA training reviews",
        ar: "24,000 أو 3,000 مثال تدريب لـ SLSA، إضافة إلى 1,564 مراجعة تدريب لـ ABSA",
      },
    },
    {
      step: "02",
      title: { en: "Task formulations", ar: "صيغ المهام" },
      copy:
        {
          en: "The experiments move from single-label classification to provided-aspect sentiment prediction and finally to full aspect-sentiment extraction.",
          ar: "تنتقل التجارب من التصنيف أحادي التسمية إلى التنبؤ بالمشاعر مع جانب معطى، ثم إلى الاستخراج الكامل لأزواج الجانب والمشاعر.",
        },
      meta: {
        en: "SLSA -> conditioned ABSA -> unconditioned ABSA",
        ar: "SLSA ← ABSA المشروط ← ABSA غير المشروط",
      },
    },
    {
      step: "03",
      title: { en: "Model comparison", ar: "مقارنة النماذج" },
      copy:
        {
          en: "Allam 7B is adapted with prompting, retrieval, and LoRA; mBERT and AraBERT are fine-tuned as discriminative baselines.",
          ar: "يتم تكييف Allam 7B عبر التلقين والاسترجاع و LoRA، بينما يُضبط mBERT و AraBERT كخطوط أساس ترميزية تمييزية.",
        },
      meta: {
        en: "4 generative strategies + 2 encoder baselines",
        ar: "4 استراتيجيات توليدية + خطا أساس ترميزيان",
      },
    },
    {
      step: "04",
      title: { en: "Evaluation", ar: "التقييم" },
      copy:
        {
          en: "Macro-F1 is prioritised for SLSA and conditioned ABSA, while micro-F1, precision, and recall are used for unconditioned ABSA.",
          ar: "يُعطى Macro-F1 الأولوية في SLSA و ABSA المشروط، بينما يستخدم micro-F1 والدقة والاسترجاع في ABSA غير المشروط.",
        },
      meta: {
        en: "Invalid outputs are explicitly counted for generative runs",
        ar: "يتم احتساب المخرجات غير الصالحة صراحةً في التجارب التوليدية",
      },
    },
  ],
  modelFamilies: [
    {
      name: "Allam 7B",
      badge: { en: "Arabic generative backbone", ar: "نموذج توليدي عربي أساسي" },
      role:
        {
          en: "The single generative base model used throughout the study, then adapted with prompting, retrieval, and LoRA/PEFT.",
          ar: "النموذج التوليدي الأساسي الوحيد المستخدم في الدراسة، ثم جرى تكييفه عبر التلقين والاسترجاع و LoRA/PEFT.",
        },
      why:
        {
          en: "It tests whether Arabic-first generation can move beyond simple label prediction and handle structured sentiment outputs directly.",
          ar: "يختبر ما إذا كان التوليد الموجّه للعربية يمكنه تجاوز التنبؤ البسيط بالتصنيف والتعامل مباشرة مع مخرجات مشاعر منظمة.",
        },
      strengths: [
        { en: "Becomes the best model on 24k SLSA once adapted with LoRA", ar: "يصبح أفضل نموذج في SLSA عند 24k بعد تكييفه بـ LoRA" },
        { en: "Clearly dominates unconditioned ABSA through end-to-end generation", ar: "يتفوق بوضوح في ABSA غير المشروط عبر التوليد من طرف إلى طرف" },
        { en: "Supports one backbone across all three task formulations", ar: "يوفر نموذجاً أساسياً واحداً عبر صيغ المهام الثلاث كلها" },
      ],
      risk:
        {
          en: "Without adaptation, or under low-resource PEFT, output format reliability can become a serious bottleneck.",
          ar: "من دون تكييف، أو تحت PEFT منخفض البيانات، قد تتحول موثوقية تنسيق المخرجات إلى عنق زجاجة حقيقي.",
        },
      highlight: { en: "0.764 macro-F1 on 24k SLSA with LoRA", ar: "0.764 Macro-F1 في SLSA عند 24k مع LoRA" },
    },
    {
      name: "mBERT",
      badge: { en: "Multilingual encoder baseline", ar: "خط أساس ترميزي متعدد اللغات" },
      role:
        {
          en: "A strong cross-lingual encoder baseline used to test how far a multilingual supervised model can go on the same tasks.",
          ar: "خط أساس ترميزي قوي عابر للغات لاختبار مدى قدرة نموذج خاضع للإشراف متعدد اللغات على التعامل مع المهام نفسها.",
        },
      why:
        {
          en: "It provides the broad multilingual reference point rather than an Arabic-specialised one.",
          ar: "يوفر نقطة مرجعية متعددة اللغات عامة بدلاً من نقطة مرجعية مخصصة للعربية.",
        },
      strengths: [
        { en: "Competitive low-resource supervised baseline", ar: "خط أساس خاضع للإشراف منافس في بيئات البيانات المحدودة" },
        { en: "High conditioned-ABSA accuracy under the encoder setup", ar: "يحقق دقة مرتفعة في ABSA المشروط ضمن الإعداد الترميزي" },
        { en: "Helps separate language-specific gains from generic transformer gains", ar: "يساعد على فصل مكاسب التخصص اللغوي عن مكاسب المحولات العامة" },
      ],
      risk:
        {
          en: "It trails AraBERT in most saved runs and suffers from the same pipeline recall bottleneck in unconditioned ABSA.",
          ar: "يتأخر عن AraBERT في معظم النتائج المحفوظة ويعاني من مشكلة الاسترجاع نفسها في خط الأنابيب الخاص بـ ABSA غير المشروط.",
        },
      highlight: { en: "0.630 macro-F1 on 3k SLSA", ar: "0.630 Macro-F1 في SLSA عند 3k" },
    },
    {
      name: "AraBERT v2",
      badge: { en: "Arabic-specific encoder", ar: "نموذج ترميزي مخصص للعربية" },
      role:
        {
          en: "The strongest encoder baseline in the project and the main discriminative reference point for Arabic sentiment work.",
          ar: "أقوى خط أساس ترميزي في المشروع والنقطة المرجعية التمييزية الرئيسية في مهام المشاعر العربية.",
        },
      why:
        {
          en: "It shows what happens when Arabic-specific pretraining is paired with standard supervised fine-tuning.",
          ar: "يوضح ما يحدث عندما يقترن التدريب المسبق المخصص للعربية بضبط خاضع للإشراف بصورة قياسية.",
        },
      strengths: [
        { en: "Best low-resource SLSA result in the repository", ar: "أفضل نتيجة منخفضة البيانات في SLSA" },
        { en: "Best saved encoder result for conditioned ABSA", ar: "أفضل نتيجة ترميزية محفوظة في ABSA المشروط" },
        { en: "Most dependable choice when the task is classification and labelled data is limited", ar: "الخيار الأكثر اعتمادية عندما تكون المهمة تصنيفية والبيانات الموسومة محدودة" },
      ],
      risk:
        {
          en: "Its two-stage design still breaks down on unconditioned ABSA because missed aspects destroy recall downstream.",
          ar: "لا يزال تصميمه ثنائي المرحلة ينهار في ABSA غير المشروط لأن الجوانب المفقودة تدمر الاسترجاع في المراحل اللاحقة.",
        },
      highlight: { en: "0.696 macro-F1 on 3k SLSA", ar: "0.696 Macro-F1 في SLSA عند 3k" },
    },
  ],
  adaptationStrategies: [
    {
      name: { en: "Zero-shot prompting", ar: "التلقين الصفري" },
      badge: { en: "No task updates", ar: "من دون تحديثات تدريبية" },
      summary:
        {
          en: "The model receives only an instruction and no demonstrations or parameter changes.",
          ar: "يتلقى النموذج تعليمة فقط من دون أمثلة توضيحية أو تحديث للمعاملات.",
        },
      observed:
        {
          en: "Useful as a floor, but consistently weaker than fine-tuned alternatives and usually weaker than RAG.",
          ar: "يفيد كنقطة مرجعية دنيا، لكنه أضعف باستمرار من البدائل المضبوطة وغالباً أضعف من RAG.",
        },
    },
    {
      name: { en: "Few-shot prompting", ar: "التلقين قليل الأمثلة" },
      badge: { en: "In-context examples", ar: "أمثلة داخل السياق" },
      summary:
        {
          en: "Three-shot and five-shot prompts add labelled demonstrations directly into the context window.",
          ar: "تضيف إعدادات الثلاثة والخمسة أمثلة شواهد موسومة مباشرة داخل نافذة السياق.",
        },
      observed:
        {
          en: "Helps structured extraction more than classification, but degrades sharply on SLSA and conditioned ABSA due to label-bias effects.",
          ar: "يفيد الاستخراج المنظم أكثر من التصنيف، لكنه يتدهور بوضوح في SLSA و ABSA المشروط بسبب انحياز التسميات.",
        },
    },
    {
      name: { en: "Retrieval-augmented generation", ar: "التوليد المعزز بالاسترجاع" },
      badge: { en: "Inference-time retrieval", ar: "استرجاع وقت الاستدلال" },
      summary:
        {
          en: "Retrieved labelled examples are inserted into the prompt without updating the model weights.",
          ar: "تُدرج أمثلة موسومة مسترجعة داخل التلقين من دون تحديث أوزان النموذج.",
        },
      observed:
        {
          en: "A practical middle ground: stronger than pure prompting, near-zero invalid outputs, but still below the best LoRA and encoder runs.",
          ar: "حل عملي وسط: أقوى من التلقين الخالص، وبمخرجات غير صالحة شبه معدومة، لكنه ما زال دون أفضل نتائج LoRA والنماذج الترميزية.",
        },
    },
    {
      name: { en: "LoRA / PEFT", ar: "LoRA / PEFT" },
      badge: { en: "Parameter-efficient fine-tuning", ar: "ضبط فعّال للمعاملات" },
      summary:
        {
          en: "Low-rank adapters are trained while the base Allam model remains frozen.",
          ar: "يتم تدريب موائمات منخفضة الرتبة بينما يبقى نموذج Allam الأساسي مجمداً.",
        },
      observed:
        {
          en: "The strongest generative strategy overall, with the clearest gains once more data is available or the task requires structured generation.",
          ar: "أقوى استراتيجية توليدية إجمالاً، مع أوضح المكاسب عندما تتوفر بيانات أكثر أو تتطلب المهمة توليداً منظماً.",
        },
    },
  ],
  results: {
    taskOrder: ["slsa", "conditioned", "unconditioned"],
    slsa: {
      label: { en: "SLSA", ar: "SLSA" },
      title: { en: "Sentence-level sentiment analysis", ar: "تحليل المشاعر على مستوى الجملة" },
      description:
        {
          en: "A near-balanced three-class classification problem with both low-resource and high-resource regimes.",
          ar: "مهمة تصنيف ثلاثية الفئات شبه متوازنة، تشمل نظامي بيانات محدوداً وكبيراً.",
        },
      metricLabel: { en: "Macro-F1", ar: "Macro-F1" },
      regimes: {
        small: {
          label: { en: "3k train regime", ar: "نظام تدريب 3k" },
          context:
            {
              en: "Low-resource SLSA. AraBERT leads here, and few-shot prompting drops sharply below zero-shot.",
              ar: "SLSA منخفض البيانات. يتصدر AraBERT هنا، بينما يهبط التلقين قليل الأمثلة بوضوح تحت التلقين الصفري.",
            },
          entries: [
            {
              label: "AraBERT v2",
              family: "encoder",
              score: 0.696,
              detail: "Accuracy 0.696",
            },
            {
              label: "Allam LoRA",
              family: "generative",
              score: 0.66,
              detail: "Accuracy 0.654, invalid 375",
            },
            {
              label: "Allam RAG",
              family: "generative",
              score: 0.644,
              detail: "Accuracy 0.657, invalid 3",
            },
            {
              label: "mBERT",
              family: "encoder",
              score: 0.63,
              detail: "Accuracy 0.628",
            },
            {
              label: "Allam zero-shot",
              family: "generative",
              score: 0.445,
              detail: "Accuracy 0.463, invalid 26",
            },
            {
              label: "Allam five-shot",
              family: "generative",
              score: 0.196,
              detail: "Accuracy 0.343, invalid 20",
            },
            {
              label: "Allam three-shot",
              family: "generative",
              score: 0.188,
              detail: "Accuracy 0.339, invalid 20",
            },
          ],
          insights: [
            { en: "AraBERT is the strongest low-resource option.", ar: "AraBERT هو أقوى خيار في بيئة البيانات المحدودة." },
            { en: "RAG narrows the gap without any parameter updates.", ar: "يقرب RAG الفجوة من دون أي تحديث للمعاملات." },
            { en: "Few-shot prompting appears to trigger label bias instead of helping.", ar: "يبدو أن التلقين قليل الأمثلة يفعّل انحياز التسميات بدلاً من أن يساعد." },
          ],
        },
        big: {
          label: { en: "24k train regime", ar: "نظام تدريب 24k" },
          context:
            {
              en: "High-resource SLSA. This is the crossover point where LoRA overtakes AraBERT.",
              ar: "SLSA عالي البيانات. هذه هي نقطة التحول التي يتجاوز فيها LoRA نموذج AraBERT.",
            },
          entries: [
            {
              label: "Allam LoRA",
              family: "generative",
              score: 0.764,
              detail: "Accuracy 0.761, invalid 71",
            },
            {
              label: "AraBERT v2",
              family: "encoder",
              score: 0.743,
              detail: "Accuracy 0.742",
            },
            {
              label: "mBERT",
              family: "encoder",
              score: 0.708,
              detail: "Accuracy 0.706",
            },
            {
              label: "Allam RAG",
              family: "generative",
              score: 0.654,
              detail: "Accuracy 0.666, invalid 2",
            },
            {
              label: "Allam zero-shot",
              family: "generative",
              score: 0.445,
              detail: "Accuracy 0.463, invalid 26",
            },
            {
              label: "Allam five-shot",
              family: "generative",
              score: 0.196,
              detail: "Accuracy 0.343, invalid 20",
            },
            {
              label: "Allam three-shot",
              family: "generative",
              score: 0.188,
              detail: "Accuracy 0.339, invalid 20",
            },
          ],
          insights: [
            { en: "LoRA becomes the top performer once enough labelled data is available.", ar: "يصبح LoRA الأفضل عندما تتوفر بيانات موسومة كافية." },
            { en: "RAG improves stability but does not catch the best fine-tuned systems.", ar: "يحسن RAG الاستقرار لكنه لا يلحق بأفضل الأنظمة المضبوطة." },
            { en: "The 3k -> 24k jump is where the encoder-versus-generative tradeoff visibly changes.", ar: "عند الانتقال من 3k إلى 24k يتغير التوازن بوضوح بين المقاربة الترميزية والتوليدية." },
          ],
        },
      },
    },
    conditioned: {
      label: { en: "Conditioned ABSA", ar: "ABSA المشروط" },
      title: { en: "Aspect given, sentiment predicted", ar: "الجانب معطى والمشاعر متوقعة" },
      description:
        {
          en: "The aspect category is already known, so the comparison isolates aspect-level sentiment classification.",
          ar: "تكون فئة الجانب معروفة مسبقاً، لذلك تعزل المقارنة مهمة تصنيف المشاعر على مستوى الجانب.",
        },
      metricLabel: { en: "Macro-F1", ar: "Macro-F1" },
      regimes: {
        default: {
          label: { en: "452 review test split", ar: "اختبار من 452 مراجعة" },
          context:
            {
              en: "Conditioned ABSA stays encoder-friendly, but LoRA closes much of the gap to AraBERT.",
              ar: "يبقى ABSA المشروط مناسباً للنماذج الترميزية، لكن LoRA يردم جزءاً كبيراً من الفجوة مع AraBERT.",
            },
          entries: [
            {
              label: "AraBERT v2",
              family: "encoder",
              score: 0.474,
              detail: "Accuracy 0.844 over 2,158 expanded aspect rows",
            },
            {
              label: "Allam LoRA",
              family: "generative",
              score: 0.455,
              detail: "Accuracy 0.826 over 452 reviews",
            },
            {
              label: "mBERT",
              family: "encoder",
              score: 0.435,
              detail: "Accuracy 0.844 over 2,158 expanded aspect rows",
            },
            {
              label: "Allam five-shot",
              family: "generative",
              score: 0.409,
              detail: "Accuracy 0.721",
            },
            {
              label: "Allam RAG (1 retrieved)",
              family: "generative",
              score: 0.393,
              detail: "Accuracy 0.690",
            },
            {
              label: "Allam zero-shot",
              family: "generative",
              score: 0.384,
              detail: "Accuracy 0.721",
            },
            {
              label: "Allam three-shot",
              family: "generative",
              score: 0.364,
              detail: "Accuracy 0.550",
            },
            {
              label: "Allam RAG (3 retrieved)",
              family: "generative",
              score: 0.327,
              detail: "Accuracy 0.518",
            },
          ],
          insights: [
            { en: "AraBERT is still the best saved run for this task.", ar: "ما زال AraBERT أفضل نتيجة محفوظة لهذه المهمة." },
            { en: "LoRA outperforms mBERT and approaches AraBERT despite the class imbalance.", ar: "يتفوق LoRA على mBERT ويقترب من AraBERT رغم اختلال توازن الفئات." },
            { en: "More retrieved examples make RAG worse here, which supports the thesis claim about retrieval noise.", ar: "المزيد من الأمثلة المسترجعة يجعل RAG أسوأ هنا، وهو ما يدعم فرضية ضجيج الاسترجاع." },
          ],
        },
      },
    },
    unconditioned: {
      label: { en: "Unconditioned ABSA", ar: "ABSA غير المشروط" },
      title: { en: "Aspect extraction plus sentiment in one task", ar: "استخراج الجانب والمشاعر في مهمة واحدة" },
      description:
        {
          en: "The hardest formulation. Encoder pipelines have to extract aspects first, while generative methods can emit aspect-sentiment pairs directly.",
          ar: "أصعب صيغة في المشروع. تحتاج الأنظمة الترميزية إلى استخراج الجوانب أولاً، بينما تستطيع الأساليب التوليدية إنتاج أزواج الجانب والمشاعر مباشرة.",
        },
      metricLabel: { en: "Micro-F1", ar: "Micro-F1" },
      regimes: {
        default: {
          label: { en: "452 review test split", ar: "اختبار من 452 مراجعة" },
          context:
            {
              en: "This is the structural inflection point of the thesis: end-to-end generation clearly wins once extraction errors can cascade.",
              ar: "هذه هي نقطة التحول البنيوية في الرسالة: يتفوق التوليد من طرف إلى طرف بوضوح عندما تبدأ أخطاء الاستخراج بالتراكم.",
            },
          entries: [
            {
              label: "Allam LoRA",
              family: "generative",
              score: 0.661,
              detail: "Precision 0.677, recall 0.646, invalid 1",
            },
            {
              label: "Allam LoRA + RAG",
              family: "generative",
              score: 0.655,
              detail: "Precision 0.674, recall 0.637, invalid 0",
            },
            {
              label: "Allam RAG",
              family: "generative",
              score: 0.463,
              detail: "Precision 0.554, recall 0.398, invalid 0",
            },
            {
              label: "Allam five-shot",
              family: "generative",
              score: 0.453,
              detail: "Precision 0.600, recall 0.364, invalid 0",
            },
            {
              label: "AraBERT v2",
              family: "encoder",
              score: 0.452,
              detail: "Precision 0.765, recall 0.321",
            },
            {
              label: "mBERT",
              family: "encoder",
              score: 0.449,
              detail: "Precision 0.756, recall 0.319",
            },
            {
              label: "Allam three-shot",
              family: "generative",
              score: 0.415,
              detail: "Precision 0.557, recall 0.330, invalid 0",
            },
            {
              label: "Allam zero-shot",
              family: "generative",
              score: 0.348,
              detail: "Precision 0.367, recall 0.330, invalid 0",
            },
          ],
          insights: [
            { en: "LoRA beats AraBERT by 20.9 points of micro-F1.", ar: "يتفوق LoRA على AraBERT بفارق 20.9 نقطة في micro-F1." },
            { en: "Encoder precision is high, but recall collapses because missed aspects cannot be recovered later in the pipeline.", ar: "تكون دقة النماذج الترميزية مرتفعة، لكن الاسترجاع ينهار لأن الجوانب المفقودة لا يمكن استعادتها لاحقاً." },
            { en: "RAG helps compared with prompting, but still sits well below the fine-tuned generative model.", ar: "يساعد RAG مقارنة بالتلقين، لكنه يظل أدنى بوضوح من النموذج التوليدي المضبوط." },
          ],
        },
      },
    },
  },
  datasets: [
    {
      title: { en: "KAUST Arabic SLSA", ar: "بيانات KAUST العربية لـ SLSA" },
      badge: { en: "Sentence-level", ar: "على مستوى الجملة" },
      facts: [
        { en: "24,000 examples in the large training regime", ar: "24,000 مثال في نظام التدريب الكبير" },
        { en: "3,000 examples in the low-resource regime", ar: "3,000 مثال في النظام منخفض البيانات" },
        { en: "3,001 fixed test sentences", ar: "3,001 جملة اختبار ثابتة" },
        { en: "Near-uniform class balance across Positive, Negative, and Mixed", ar: "توازن شبه متساوٍ بين الإيجابي والسلبي والمختلط" },
      ],
    },
    {
      title: { en: "SemEval 2016 Arabic hotel reviews", ar: "مراجعات الفنادق العربية SemEval 2016" },
      badge: { en: "Aspect-based", ar: "قائم على الجوانب" },
      facts: [
        { en: "1,564 training reviews, 275 dev reviews, 452 test reviews", ar: "1,564 مراجعة تدريب، و275 تطوير، و452 اختبار" },
        { en: "34 distinct aspect categories", ar: "34 فئة جانب مختلفة" },
        { en: "7,635 conditioned train instances after review-to-opinion expansion", ar: "7,635 مثال تدريب مشروط بعد توسيع المراجعات إلى آراء" },
        { en: "Severe polarity imbalance, especially for Conflict", ar: "اختلال شديد في توازن المشاعر، خصوصاً فئة التعارض" },
      ],
    },
  ],
  distributions: [
    {
      title: { en: "SLSA test label balance", ar: "توزيع تسميات اختبار SLSA" },
      caption: { en: "3,001 held-out sentences", ar: "3,001 جملة محجوزة للاختبار" },
      segments: [
        { label: { en: "Mixed", ar: "مختلط" }, value: 1012, color: "sand" },
        { label: { en: "Negative", ar: "سلبي" }, value: 994, color: "rust" },
        { label: { en: "Positive", ar: "إيجابي" }, value: 995, color: "teal" },
      ],
    },
    {
      title: { en: "ABSA test polarity balance", ar: "توزيع مشاعر اختبار ABSA" },
      caption: { en: "2,158 aspect instances extracted from 452 reviews", ar: "2,158 مثال جانب مستخرج من 452 مراجعة" },
      segments: [
        { label: { en: "Positive", ar: "إيجابي" }, value: 1235, color: "teal" },
        { label: { en: "Negative", ar: "سلبي" }, value: 773, color: "rust" },
        { label: { en: "Neutral", ar: "محايد" }, value: 125, color: "olive" },
        { label: { en: "Conflict", ar: "متضارب" }, value: 25, color: "ink" },
      ],
    },
  ],
  reliability: [
    { label: "SLSA LoRA (3k)", value: 375, note: { en: "Low-resource PEFT", ar: "PEFT منخفض البيانات" } },
    { label: "SLSA LoRA (24k)", value: 71, note: { en: "More data reduces failures", ar: "المزيد من البيانات يقلل الإخفاقات" } },
    { label: "SLSA zero-shot", value: 26, note: { en: "Stable but weak", ar: "مستقر لكنه أضعف" } },
    { label: "SLSA three-shot", value: 20, note: { en: "Still low adherence issues", ar: "ما تزال مشكلات الالتزام بالشكل محدودة" } },
    { label: "SLSA five-shot", value: 20, note: { en: "Still low adherence issues", ar: "ما تزال مشكلات الالتزام بالشكل محدودة" } },
    { label: "SLSA RAG (3k)", value: 3, note: { en: "Near-zero invalid outputs", ar: "مخرجات غير صالحة شبه معدومة" } },
    { label: "SLSA RAG (24k)", value: 2, note: { en: "Near-zero invalid outputs", ar: "مخرجات غير صالحة شبه معدومة" } },
    { label: "Unconditioned LoRA", value: 1, note: { en: "Structured outputs mostly reliable", ar: "المخرجات المنظمة موثوقة غالباً" } },
    { label: "LoRA + RAG hybrid", value: 0, note: { en: "Fully valid in the saved run", ar: "صالحة بالكامل في النتيجة المحفوظة" } },
  ],
  keyFindings: [
    {
      metric: "0.696 vs 0.660",
      title: { en: "AraBERT owns the low-resource classification regime", ar: "AraBERT يتصدر التصنيف منخفض البيانات" },
      summary:
        {
          en: "On 3k SLSA, AraBERT is the top saved run and stays ahead of LoRA, RAG, and mBERT.",
          ar: "في SLSA عند 3k، يحقق AraBERT أفضل نتيجة محفوظة ويتقدم على LoRA وRAG وmBERT.",
        },
      evidence:
        {
          en: "AraBERT reaches 0.696 macro-F1, ahead of Allam LoRA at 0.660 and Allam RAG at 0.644.",
          ar: "يصل AraBERT إلى 0.696 في Macro-F1 متقدماً على Allam LoRA عند 0.660 وAllam RAG عند 0.644.",
        },
      meaning:
        {
          en: "If the problem is standard classification and labelled Arabic data is scarce, the Arabic-specific encoder is the safer choice.",
          ar: "إذا كانت المشكلة تصنيفاً معيارياً وكانت البيانات العربية الموسومة قليلة، فإن النموذج الترميزي المخصص للعربية هو الخيار الأكثر أماناً.",
        },
    },
    {
      metric: "0.764 vs 0.743",
      title: { en: "The crossover appears when SLSA scales from 3k to 24k", ar: "تظهر نقطة التحول عندما يرتفع SLSA من 3k إلى 24k" },
      summary:
        {
          en: "LoRA overtakes AraBERT in the high-resource SLSA regime instead of just narrowing the gap.",
          ar: "يتجاوز LoRA نموذج AraBERT في نظام SLSA عالي البيانات بدلاً من مجرد تقليص الفجوة.",
        },
      evidence:
        {
          en: "Allam LoRA reaches 0.764 macro-F1 on 24k SLSA, beating AraBERT at 0.743.",
          ar: "يحقق Allam LoRA قيمة 0.764 في Macro-F1 على SLSA عند 24k متفوقاً على AraBERT الذي سجل 0.743.",
        },
      meaning:
        {
          en: "The thesis is not just about current rankings; it shows that the preferred architecture changes as data availability grows.",
          ar: "لا تتعلق الرسالة بالترتيب الحالي فقط، بل توضح أن البنية المفضلة تتغير مع نمو البيانات المتاحة.",
        },
    },
    {
      metric: "+20.9 pts micro-F1",
      title: { en: "Unconditioned ABSA is the structural turning point", ar: "ABSA غير المشروط هو نقطة التحول البنيوية" },
      summary:
        {
          en: "This is where end-to-end generative decoding stops being merely competitive and becomes decisively better.",
          ar: "هنا يتوقف التوليد من طرف إلى طرف عن كونه مجرد منافس ليصبح أفضل بوضوح.",
        },
      evidence:
        {
          en: "Allam LoRA scores 0.661 micro-F1, while AraBERT reaches 0.452 and mBERT 0.449.",
          ar: "يسجل Allam LoRA قيمة 0.661 في micro-F1، بينما يصل AraBERT إلى 0.452 وmBERT إلى 0.449.",
        },
      meaning:
        {
          en: "Once aspect extraction errors can cascade, the generative formulation becomes a real architectural advantage rather than just another adaptation trick.",
          ar: "عندما تبدأ أخطاء استخراج الجوانب بالتراكم، تصبح الصياغة التوليدية ميزة معمارية حقيقية وليست مجرد حيلة تكييف إضافية.",
        },
    },
    {
      metric: "0.445 -> 0.188",
      title: { en: "Few-shot prompt degradation is a central finding", ar: "تدهور التلقين قليل الأمثلة نتيجة مركزية" },
      summary:
        {
          en: "Adding demonstrations often hurts instead of helping on the classification-style tasks in this project.",
          ar: "إضافة الأمثلة التوضيحية تضر كثيراً بدلاً من أن تساعد في المهام ذات الطابع التصنيفي في هذا المشروع.",
        },
      evidence:
        {
          en: "On SLSA, zero-shot macro-F1 is 0.445, but three-shot drops to 0.188 and five-shot only recovers to 0.196. In conditioned ABSA, three-shot also falls below zero-shot.",
          ar: "في SLSA يبلغ Macro-F1 في التلقين الصفري 0.445، لكن إعداد الثلاثة أمثلة يهبط إلى 0.188 ولا يتعافى إعداد الخمسة إلا إلى 0.196. وفي ABSA المشروط يهبط إعداد الثلاثة أمثلة أيضاً تحت التلقين الصفري.",
        },
      meaning:
        {
          en: "This is one of the thesis's clearest cautionary results: more prompt examples are not automatically better, especially under label-bias effects.",
          ar: "هذه من أوضح النتائج التحذيرية في الرسالة: زيادة أمثلة التلقين لا تعني تلقائياً أداء أفضل، خصوصاً تحت تأثير انحياز التسميات.",
        },
    },
    {
      metric: "375 vs 3 invalid outputs",
      title: { en: "Reliability and raw capability are not the same thing", ar: "الاعتمادية والقدرة الخام ليستا الشيء نفسه" },
      summary:
        {
          en: "Low-resource LoRA can be semantically strong but operationally fragile because malformed outputs become unusable.",
          ar: "قد يكون LoRA منخفض البيانات قوياً دلالياً لكنه هش عملياً لأن المخرجات المشوهة تصبح غير قابلة للاستخدام.",
        },
      evidence:
        {
          en: "SLSA LoRA on 3k data logs 375 invalid outputs, while RAG in the same setting logs only 3.",
          ar: "يسجل SLSA LoRA على بيانات 3k عدد 375 مخرجاً غير صالح، بينما يسجل RAG في الإعداد نفسه 3 فقط.",
        },
      meaning:
        {
          en: "For practical systems, output validity can change which method is actually deployable even when the headline metric is higher.",
          ar: "في الأنظمة العملية قد تغيّر صلاحية المخرجات أي الأساليب يمكن نشره فعلياً حتى لو كان المقياس الرئيسي أعلى.",
        },
    },
    {
      metric: "0.844 acc, 0.474 macro-F1",
      title: { en: "Conditioned ABSA exposes the class-imbalance problem", ar: "ABSA المشروط يكشف مشكلة اختلال توازن الفئات" },
      summary:
        {
          en: "High accuracy hides weaker minority-class behaviour in the aspect-level setup.",
          ar: "تخفي الدقة العالية أداءً أضعف على الفئات الأقل تمثيلاً في إعداد الجوانب.",
        },
      evidence:
        {
          en: "AraBERT reaches roughly 0.844 accuracy but only 0.474 macro-F1 on conditioned ABSA.",
          ar: "يحقق AraBERT نحو 0.844 في الدقة لكنه لا يتجاوز 0.474 في Macro-F1 على ABSA المشروط.",
        },
      meaning:
        {
          en: "The site should frame conditioned ABSA as more than a leaderboard; it is also a lesson in why macro-F1 matters.",
          ar: "يجب أن تعرض الصفحة ABSA المشروط بوصفه أكثر من مجرد ترتيب نتائج، بل كدرس في أهمية مقياس Macro-F1.",
        },
    },
  ],
  samples: [
    {
      task: { en: "SLSA example", ar: "مثال SLSA" },
      text:
        "النظافة قريب من مول الإمارات طاقم الاستقبال غير متعاون ابدا . القرب من مول الإمارات والنظافة. طاقم استقبال سيئ جدا وتعالي على الضيف من قبلهم",
      outcome: { en: "Label: Mixed", ar: "التصنيف: مختلط" },
      note:
        {
          en: "A single review can contain strong positive and negative cues at the same time, which makes Mixed a meaningful class instead of just a fallback.",
          ar: "قد تحتوي المراجعة الواحدة على مؤشرات إيجابية وسلبية قوية معاً، مما يجعل فئة المختلط فئة دلالية حقيقية وليست مجرد حل احتياطي.",
        },
    },
    {
      task: { en: "ABSA example", ar: "مثال ABSA" },
      text:
        "فندق حلو جدا جدا جميل وعائلي ومناسب ولكن المواقف غير مجانية قريب من البحر مرتب بصراحة لا يعاب عليه إلا مواقف السيارات",
      outcome:
        {
          en: "Pairs: FACILITIES#PRICES -> negative, LOCATION#GENERAL -> positive, HOTEL#GENERAL -> conflict",
          ar: "الأزواج: FACILITIES#PRICES -> سلبي، LOCATION#GENERAL -> إيجابي، HOTEL#GENERAL -> متضارب",
        },
      note:
        {
          en: "This illustrates why unconditioned ABSA is structurally hard: the model has to surface multiple aspect-polarity pairs from one sentence.",
          ar: "يوضح هذا لماذا يعد ABSA غير المشروط صعباً بنيوياً: على النموذج استخراج عدة أزواج من الجوانب والمشاعر من جملة واحدة.",
        },
    },
  ],
  taskFormats: [
    {
      title: { en: "SLSA label space", ar: "تسميات مهمة SLSA" },
      body: {
        en: "The model predicts one label for the whole sentence: Positive, Negative, or Mixed.",
        ar: "يتنبأ النموذج بتسمية واحدة للجملة كاملة: إيجابي، سلبي، أو مختلط.",
      },
    },
    {
      title: { en: "Conditioned ABSA", ar: "ABSA المشروط" },
      body: {
        en: "The aspect is already given, so the model predicts only the sentiment linked to that aspect.",
        ar: "يكون الجانب معطى مسبقاً، لذلك يتنبأ النموذج بالمشاعر المرتبطة بذلك الجانب فقط.",
      },
    },
    {
      title: { en: "Unconditioned ABSA", ar: "ABSA غير المشروط" },
      body: {
        en: "The model must first surface the aspects and then assign a polarity to each one in the same output.",
        ar: "على النموذج استخراج الجوانب أولاً ثم إسناد مشاعر لكل جانب ضمن المخرج نفسه.",
      },
    },
    {
      title: { en: "Common Arabic aspect terms", ar: "أمثلة على الجوانب العربية" },
      body: {
        en: "service, location, prices, cleanliness, rooms, hotel quality",
        ar: "الخدمة، الموقع، الأسعار، النظافة، الغرف، جودة الفندق",
      },
    },
  ],
  decisionGuide: [
    {
      title: { en: "Choose AraBERT when the task is classification and data is limited", ar: "اختر AraBERT عندما تكون المهمة تصنيفية والبيانات محدودة" },
      copy:
        {
          en: "For low-resource SLSA and encoder-style conditioned ABSA, AraBERT is the most dependable supervised baseline in the saved results.",
          ar: "في SLSA منخفض البيانات و ABSA المشروط ذي الطابع الترميزي، يعد AraBERT أكثر خطوط الأساس الخاضعة للإشراف اعتمادية في النتائج المحفوظة.",
        },
    },
    {
      title: { en: "Choose Allam LoRA when the task is structurally complex or data-rich", ar: "اختر Allam LoRA عندما تكون المهمة معقدة بنيوياً أو غنية بالبيانات" },
      copy:
        {
          en: "LoRA is the best generative strategy overall and becomes the strongest option once enough labelled data exists or the task requires structured generation.",
          ar: "يعد LoRA أفضل استراتيجية توليدية إجمالاً، ويصبح الخيار الأقوى عندما تتوفر بيانات موسومة كافية أو تتطلب المهمة توليداً منظماً.",
        },
    },
    {
      title: { en: "Choose RAG when you need a stable middle ground", ar: "اختر RAG عندما تحتاج إلى حل وسطي مستقر" },
      copy:
        {
          en: "RAG usually beats pure prompting, keeps invalid outputs near zero, and gives you adaptation without a fine-tuning run.",
          ar: "يتفوق RAG غالباً على التلقين الخالص، ويحافظ على مخرجات غير صالحة شبه معدومة، ويمنحك تكييفاً من دون تشغيل ضبط كامل.",
        },
    },
    {
      title: { en: "Treat few-shot prompting cautiously", ar: "تعامل بحذر مع التلقين قليل الأمثلة" },
      copy:
        {
          en: "The thesis results show clear prompt degradation in the classification-style tasks, so few-shot prompting should be treated as a risky choice rather than a safe default.",
          ar: "تظهر نتائج الرسالة تدهوراً واضحاً في التلقين قليل الأمثلة في المهام ذات الطابع التصنيفي، لذلك يجب التعامل معه كخيار يحمل مخاطرة لا كخيار افتراضي آمن.",
        },
    },
  ],
};

window.RESEARCH_DATA = RESEARCH_DATA;
