/**
 * Publications Data
 * Based on druckmannlab.com website + Google Scholar verification
 * Organized by: Selected, Preprints, Full List (chronological), Book Chapters
 */

// ===========================================
// SELECTED PUBLICATIONS
// ===========================================

export const SELECTED_PUBLICATIONS = [
  {
    id: "chen2021cell",
    title: "Modularity and robustness of frontal cortical networks",
    authors: "Guang Chen*, Byungwoo Kang*, Jack Lindsey, Shaul Druckmann**, Nuo Li**",
    venue: "Cell",
    year: 2021,
    note: "*Co-first authors, **Co-senior authors",
    links: { paper: "https://www.cell.com/cell/fulltext/S0092-8674(21)00656-5" }
  },
  {
    id: "li2016nature",
    title: "Robust neuronal dynamics in premotor cortex during motor planning",
    authors: "Nuo Li, Kayvon Daie, Karel Svoboda, Shaul Druckmann",
    venue: "Nature",
    year: 2016,
    links: { 
      paper: "https://www.nature.com/articles/nature17643",
      news: "https://www.nature.com/articles/nature17886"
    }
  },
  {
    id: "druckmann2012currbio",
    title: "Neuronal circuits underlying persistent representations despite time varying activity",
    authors: "Shaul Druckmann, Dmitri B. Chklovskii",
    venue: "Current Biology",
    year: 2012,
    links: { paper: "https://www.cell.com/current-biology/fulltext/S0960-9822(12)00877-0" }
  },
  {
    id: "druckmann2010nips",
    title: "Over-complete representations on recurrent neural networks can support persistent percepts",
    authors: "Shaul Druckmann, Dmitri B. Chklovskii",
    venue: "NeurIPS",
    year: 2010,
    links: {}
  }
];

// ===========================================
// PREPRINTS
// ===========================================

export const PREPRINTS = [
  {
    id: "benster2024arxiv",
    title: "A cross-modal approach to silent speech with LLM-enhanced recognition",
    authors: "Tyler Benster, Guy H. Wilson, Reshef Elisha, Francis R. Willett, Shaul Druckmann",
    venue: "arXiv",
    year: 2024,
    links: { paper: "https://arxiv.org/abs/2403.05583" }
  },
  {
    id: "daie2023preprint",
    title: "Feedforward amplification in recurrent networks underlies paradoxical neural coding",
    authors: "Kayvon Daie, Lorenzo Fontolan, Shaul Druckmann, Karel Svoboda",
    venue: "bioRxiv",
    year: 2023,
    links: {}
  }
];

// ===========================================
// FULL LIST OF PUBLICATIONS (chronological, newest first)
// ===========================================

export const PUBLICATIONS = [
  // -------- 2026 --------
  {
    id: "wang2026natneurosci",
    title: "Brain-wide analysis reveals movement encoding structured across and within brain areas",
    authors: "Ziyue Aiden Wang, Balint Kurgyis, Susu Chen, Byungwoo Kang, Feng Chen, Yi Liu, Dave Liu, Karel Svoboda, Nuo Li, Shaul Druckmann",
    venue: "Nature Neuroscience",
    year: 2026,
    links: { paper: "https://www.nature.com/articles/s41593-025-02114-x" }
  },
  {
    id: "kang2026natcomm",
    title: "Recurrent connections facilitate occluded object recognition by explaining-away",
    authors: "Byungwoo Kang, Benjamin Midler, Feng Chen, Shaul Druckmann",
    venue: "Nature Communications",
    year: 2026,
    links: { paper: "https://www.nature.com/articles/s41467-026-68806-5" }
  },
  // -------- 2025 --------
  {
    id: "chen2025neurips",
    title: "Rethinking fine-tuning when scaling test-time compute: Limiting confidence improves mathematical reasoning",
    authors: "Feng Chen, Alvaro Raventos, Nikhil Cheng, Surya Ganguli, Shaul Druckmann",
    venue: "NeurIPS",
    year: 2025,
    links: { paper: "https://arxiv.org/abs/2502.07154" }
  },
  {
    id: "zhao2025neurips",
    title: "Informed correctors for discrete diffusion models",
    authors: "Yixiu Zhao, Jiaxin Shi, Feng Chen, Shaul Druckmann, Lester Mackey, Scott Linderman",
    venue: "NeurIPS",
    year: 2025,
    links: { paper: "https://arxiv.org/abs/2407.21243" }
  },
  {
    id: "wilson2025natbiomed",
    title: "Long-term unsupervised recalibration of cursor-based intracortical brain-computer interfaces using a hidden Markov model",
    authors: "Guy H. Wilson, Elias A. Stein, Foram Kamdar, Donald T. Avansino, Tsam Kiu Pun, Ronnie Gross, Leigh R. Hochberg, Krishna V. Shenoy, Jaimie M. Henderson, Shaul Druckmann, Francis R. Willett",
    venue: "Nature Biomedical Engineering",
    year: 2025,
    links: {}
  },
  {
    id: "praegel2025elife",
    title: "Age and learning shapes sound representations in auditory cortex during adolescence",
    authors: "Benedikt Praegel, Feng Chen, Adria Dym, Amichai Lavi-Rudel, Shaul Druckmann, Adi Mizrahi",
    venue: "eLife",
    year: 2025,
    links: {}
  },
  {
    id: "kunz2025cell",
    title: "Inner speech in motor cortex and implications for speech neuroprostheses",
    authors: "Erin M. Kunz, Benyamin Abramovich Krasa, Foram Kamdar, Donald T. Avansino, Nick Hahn, Seonghyun Yoon, Akansha Singh, Samuel R. Nason-Tomaszewski, Nicholas S. Card, Justin J. Jude, Brandon G. Jacques, Payton H. Bechefsky, Carrina Iacobacci, Leigh R. Hochberg, Daniel B. Rubin, Ziv M. Williams, David M. Brandman, Sergey D. Stavisky, Nicholas AuYong, Chethan Pandarinath, Shaul Druckmann, Jaimie M. Henderson, Francis R. Willett",
    venue: "Cell",
    year: 2025,
    links: { paper: "https://www.cell.com/cell/fulltext/S0092-8674(25)00681-6" }
  },
  {
    id: "pang2025currbio",
    title: "A recurrent neural circuit in Drosophila temporally sharpens visual inputs",
    authors: "Michelle M. Pang, Feng Chen, Marjorie Xie, Shaul Druckmann, Thomas R. Clandinin, Helen H. Yang",
    venue: "Current Biology",
    year: 2025,
    links: {}
  },
  // -------- 2024 --------
  {
    id: "westeinde2024nature",
    title: "Transforming a head direction signal into a goal-oriented steering command",
    authors: "Elena A. Westeinde, Emily Kellogg, Paul M. Dawson, Jenny Lu, Lydia Hamburg, Benjamin Midler, Shaul Druckmann, Rachel I. Wilson",
    venue: "Nature",
    year: 2024,
    links: {}
  },
  {
    id: "chen2024cell",
    title: "Brain-wide neural activity underlying memory-guided movement",
    authors: "Susu Chen, Yi Liu, Ziyue Aiden Wang, Jennifer Colonell, Liu D. Liu, Han Hou, Nai-Wen Tien, Tim Wang, Timothy Harris, Shaul Druckmann, Nuo Li, Karel Svoboda",
    venue: "Cell",
    year: 2024,
    links: {}
  },
  {
    id: "banerjee2024natneurosci",
    title: "Temporal scaling of motor cortical dynamics reveals hierarchical control of vocal production",
    authors: "Arkarup Banerjee, Feng Chen, Shaul Druckmann, Michael A. Long",
    venue: "Nature Neuroscience",
    year: 2024,
    links: {}
  },
  {
    id: "brezovec2024currbio",
    title: "Mapping the neural dynamics of locomotion across the Drosophila brain",
    authors: "Bella E. Brezovec, Andrew B. Berger, Yukun A. Hao, Feng Chen, Shaul Druckmann, Thomas R. Clandinin",
    venue: "Current Biology",
    year: 2024,
    links: {}
  },
  {
    id: "fryer2024plosbio",
    title: "A high-throughput behavioral screening platform for measuring chemotaxis by C. elegans",
    authors: "Emily Fryer, Sujay Guha, Lucero E. Rogel-Hernandez, Theresa Logan-Garbisch, Hodan Farah, Ehsan Rezaei, Iris N. Mollhoff, Adam L. Nekimken, Angela Xu, Lara Selin Seyahi, Sylvia Fechner, Shaul Druckmann, Thomas R. Clandinin, Seung Y. Rhee, Miriam B. Goodman",
    venue: "PLoS Biology",
    year: 2024,
    links: {}
  },
  // -------- 2023 --------
  {
    id: "willett2023nature",
    title: "A high-performance speech neuroprosthesis",
    authors: "Francis R. Willett, Erin M. Kunz, Chaofei Fan, Donald T. Avansino, Guy H. Wilson, Eun Young Choi, Foram Kamdar, Matthew F. Glasser, Leigh R. Hochberg, Shaul Druckmann, Krishna V. Shenoy, Jaimie M. Henderson",
    venue: "Nature",
    year: 2023,
    links: { paper: "https://www.nature.com/articles/s41586-023-06377-x" }
  },
  {
    id: "yang2023cell",
    title: "Hypothalamic neurons that mirror aggression",
    authors: "Taehong Yang, Daniel W. Bayless, Yichao Wei, Dan Landayan, Ivo M. Marcelo, Yangpeng Wang, Laura A. DeNardo, Liqun Luo, Shaul Druckmann, Nirao M. Shah",
    venue: "Cell",
    year: 2023,
    links: {}
  },
  {
    id: "druckmann2023jocn",
    title: "Unraveling the entangled brain: How do we go about it?",
    authors: "Shaul Druckmann, Nicole C. Rust",
    venue: "Journal of Cognitive Neuroscience",
    year: 2023,
    links: {}
  },
  // -------- 2022 --------
  {
    id: "larsen2022plos",
    title: "Towards a more general understanding of the algorithmic utility of recurrent connections",
    authors: "Brett W. Larsen, Shaul Druckmann",
    venue: "PLoS Computational Biology",
    year: 2022,
    links: {}
  },
  {
    id: "lu2022nature",
    title: "Transforming representations of movement from body- to world-centric space",
    authors: "Jenny Lu, Amir H. Behbahani, Lydia Hamburg, Elena A. Westeinde, Paul M. Dawson, Cheng Lyu, Gaby Maimon, Michael H. Dickinson, Shaul Druckmann, Rachel I. Wilson",
    venue: "Nature",
    year: 2022,
    links: {}
  },
  {
    id: "hamnett2022currbio",
    title: "Regional cytoarchitecture of the adult and developing mouse enteric nervous system",
    authors: "Ryan Hamnett, Lori B. Dershowitz, Vandana Sampathkumar, Ziyue Wang, Julieta Gomez-Frittelli, Vincent De Andrade, Narayanan Kasthuri, Shaul Druckmann, Julia A. Kaltschmidt",
    venue: "Current Biology",
    year: 2022,
    links: {}
  },
  // -------- 2021 --------
  {
    id: "chen2021cell",
    title: "Modularity and robustness of frontal cortical networks",
    authors: "Guang Chen*, Byungwoo Kang*, Jack Lindsey, Shaul Druckmann**, Nuo Li**",
    venue: "Cell",
    year: 2021,
    note: "*Co-first authors, **Co-senior authors",
    links: {}
  },
  {
    id: "daie2021natneurosci",
    title: "Targeted photostimulation uncovers circuit motifs supporting short-term memory",
    authors: "Kayvon Daie, Karel Svoboda, Shaul Druckmann",
    venue: "Nature Neuroscience",
    year: 2021,
    links: {}
  },
  // -------- 2020 --------
  {
    id: "wilson2020jne",
    title: "Decoding spoken English phonemes from intracortical electrode arrays in dorsal precentral gyrus",
    authors: "Guy H. Wilson, Sergey D. Stavisky, Francis R. Willett, Donald T. Avansino, Jessica N. Kelemen, Leigh R. Hochberg, Jaimie M. Henderson, Shaul Druckmann, Krishna V. Shenoy",
    venue: "Journal of Neural Engineering",
    year: 2020,
    links: {}
  },
  {
    id: "wei2020plos",
    title: "A comparison of neuronal population dynamics measured with calcium imaging and electrophysiology",
    authors: "Ziqiang Wei, Bei-Jung Lin, Tsai-Wen Chen, Kayvon Daie, Karel Svoboda, Shaul Druckmann",
    venue: "PLoS Computational Biology",
    year: 2020,
    links: {}
  },
  {
    id: "kang2020opinion",
    title: "Approaches to inferring multi-regional interactions from simultaneous population recordings",
    authors: "Byungwoo Kang, Shaul Druckmann",
    venue: "Current Opinion in Neurobiology",
    year: 2020,
    note: "Review",
    links: {}
  },
  // -------- 2019 --------
  {
    id: "stavisky2019elife",
    title: "Neural ensemble dynamics in dorsal motor cortex during speech in people with paralysis",
    authors: "Sergey D. Stavisky, Francis R. Willett, Guy H. Wilson, Brian A. Murphy, Paymon Rezaii, Donald T. Avansino, William D. Memberg, Jonathan P. Miller, Robert F. Kirsch, Leigh R. Hochberg, A. Bolu Ajiboye, Shaul Druckmann, Krishna V. Shenoy, Jaimie M. Henderson",
    venue: "eLife",
    year: 2019,
    links: {}
  },
  {
    id: "wan2019cell",
    title: "Single-cell reconstruction of emerging population activity in an entire developing circuit",
    authors: "Yinan Wan, Ziqiang Wei, Loren L. Looger, Minoru Koyama, Shaul Druckmann*, Philipp J. Keller*",
    venue: "Cell",
    year: 2019,
    note: "*Co-senior authors",
    links: {}
  },
  {
    id: "kazemipour2019natmethods",
    title: "Kilohertz frame-rate two-photon tomography",
    authors: "Abbas Kazemipour, Ondrej Novak, Daniel Flickinger, Jonathan S. Marvin, Ahmed S. Abdelfattah, Jonathan King, Philip M. Borden, Jeong Jun Kim, Sarah H. Al-Abdullatif, Parker E. Deal, Evan W. Miller, Eric R. Schreiter, Shaul Druckmann, Karel Svoboda, Loren L. Looger, Kaspar Podgorski",
    venue: "Nature Methods",
    year: 2019,
    links: {}
  },
  {
    id: "wei2019natcomm",
    title: "An orderly single-trial organization of population dynamics in premotor cortex predicts behavioral variability",
    authors: "Ziqiang Wei, Hidehiko Inagaki, Nuo Li, Karel Svoboda, Shaul Druckmann",
    venue: "Nature Communications",
    year: 2019,
    links: {}
  },
  // -------- 2018 --------
  {
    id: "ranganathan2018natneurosci",
    title: "Active dendritic integration and mixed neocortical network representations during an adaptive sensing behavior",
    authors: "Gayathri N. Ranganathan, Paul F. Apostolides, Mark T. Harnett, Ning-Long Xu, Shaul Druckmann, Jeffrey C. Magee",
    venue: "Nature Neuroscience",
    year: 2018,
    links: {}
  },
  {
    id: "kwon2018jneurosci",
    title: "Schaffer collateral inputs to CA1 excitatory and inhibitory neurons follow different connectivity rules",
    authors: "Osung Kwon, Linqing Feng, Shaul Druckmann, Jinhyun Kim",
    venue: "Journal of Neuroscience",
    year: 2018,
    links: {}
  },
  // -------- 2017 --------
  {
    id: "guo2017nature",
    title: "Maintenance of persistent activity in a frontal thalamocortical loop",
    authors: "Zengcai V. Guo, Hidehiko K. Inagaki, Kayvon Daie, Shaul Druckmann, Charles R. Gerfen, Karel Svoboda",
    venue: "Nature",
    year: 2017,
    links: {}
  },
  {
    id: "turnerevans2017elife",
    title: "Angular velocity integration in a fly heading circuit",
    authors: "Daniel Turner-Evans, Stephanie Wegener, Hervé Rouault, Romain Franconville, Tanya Wolff, Johannes D. Seelig, Shaul Druckmann, Vivek Jayaraman",
    venue: "eLife",
    year: 2017,
    links: {}
  },
  {
    id: "kim2017science",
    title: "Ring attractor dynamics in the Drosophila central brain",
    authors: "Sung Soo Kim, Hervé Rouault, Shaul Druckmann*, Vivek Jayaraman*",
    venue: "Science",
    year: 2017,
    note: "*Co-corresponding authors",
    links: {}
  },
  // -------- 2016 --------
  {
    id: "li2016nature",
    title: "Robust neuronal dynamics in premotor cortex during motor planning",
    authors: "Nuo Li, Kayvon Daie, Karel Svoboda, Shaul Druckmann",
    venue: "Nature",
    year: 2016,
    links: {}
  },
  // -------- 2015 --------
  {
    id: "markram2015cell",
    title: "Reconstruction and simulation of neocortical microcircuitry",
    authors: "Henry Markram, Eilif Muller, Srikanth Ramaswamy, Michael W. Reimann, Marwan Abdellah, ... Shaul Druckmann, et al.",
    venue: "Cell",
    year: 2015,
    links: {}
  },
  {
    id: "schulze2015elife",
    title: "Dynamical feature extraction at the sensory periphery guides chemotaxis",
    authors: "Aljoscha Schulze, Alex Gomez-Marin, Vani G. Rajendran, Gus Lott, Marco Musy, Parvez Ahammad, Ajinkya Deogade, James Sharpe, Julia Riedl, David Jarriault, Eric T. Trautman, Christopher Werner, Madhusudhan Venkadesan, Shaul Druckmann, Vivek Jayaraman, Matthieu Louis",
    venue: "eLife",
    year: 2015,
    links: {}
  },
  {
    id: "rah2015frontneuroanat",
    title: "From a meso- to micro-scale connectome: array tomography and mGRASP",
    authors: "Jong-Cheol Rah, Linqing Feng, Shaul Druckmann, Hojin Lee, Jinhyun Kim",
    venue: "Frontiers in Neuroanatomy",
    year: 2015,
    links: {}
  },
  // -------- 2014 --------
  {
    id: "druckmann2014neuron",
    title: "Structured synaptic connectivity between hippocampal regions",
    authors: "Shaul Druckmann, Linqing Feng, Brian Lee, Chaehyun Yook, Ting Zhao, Jeffrey C. Magee, Jinhyun Kim",
    venue: "Neuron",
    year: 2014,
    links: {}
  },
  // -------- 2013 --------
  {
    id: "druckmann2013cerebcortex",
    title: "A hierarchical structure of cortical interneuron electrical diversity revealed by automated statistical analysis",
    authors: "Shaul Druckmann, Sean Hill, Felix Schürmann, Henry Markram, Idan Segev",
    venue: "Cerebral Cortex",
    year: 2013,
    links: {}
  },
  {
    id: "yook2013cmls",
    title: "Mapping mammalian synaptic connectivity",
    authors: "Chaehyun Yook, Shaul Druckmann, Jinhyun Kim",
    venue: "Cellular and Molecular Life Sciences",
    year: 2013,
    links: {}
  },
  // -------- 2012 --------
  {
    id: "druckmann2012currbio",
    title: "Neuronal circuits underlying persistent representations despite time varying activity",
    authors: "Shaul Druckmann, Dmitri B. Chklovskii",
    venue: "Current Biology",
    year: 2012,
    links: {}
  },
  {
    id: "druckmann2012nips",
    title: "A mechanistic model of early sensory processing based on subtracting sparse representations",
    authors: "Shaul Druckmann, Tao Hu, Dmitri B. Chklovskii",
    venue: "NeurIPS",
    year: 2012,
    links: {}
  },
  // -------- 2011 --------
  {
    id: "druckmann2011plos",
    title: "Effective stimuli for constructing reliable neuron models",
    authors: "Shaul Druckmann, Thomas K. Berger, Felix Schürmann, Sean Hill, Henry Markram, Idan Segev",
    venue: "PLoS Computational Biology",
    year: 2011,
    links: {}
  },
  // -------- 2010 --------
  {
    id: "druckmann2010nips",
    title: "Over-complete representations on recurrent neural networks can support persistent percepts",
    authors: "Shaul Druckmann, Dmitri B. Chklovskii",
    venue: "NeurIPS",
    year: 2010,
    links: {}
  },
  // -------- 2008 --------
  {
    id: "druckmann2008biocyber",
    title: "Evaluating automated parameter constraining procedures of neuron models by experimental and surrogate data",
    authors: "Shaul Druckmann, Thomas K. Berger, Sean Hill, Felix Schürmann, Henry Markram, Idan Segev",
    venue: "Biological Cybernetics",
    year: 2008,
    links: {}
  },
  // -------- 2007 --------
  {
    id: "druckmann2007frontneurosci",
    title: "A novel multiple objective optimization framework for constraining conductance-based neuron models by experimental data",
    authors: "Shaul Druckmann, Yoav Banitt, Albert A. Gidon, Felix Schürmann, Henry Markram, Idan Segev",
    venue: "Frontiers in Neuroscience",
    year: 2007,
    links: {}
  }
];

// ===========================================
// BOOK CHAPTERS
// ===========================================

export const BOOK_CHAPTERS = [
  {
    id: "druckmann2014book1",
    title: "Automated Parameter Constraining of Single-Neuron Models",
    authors: "Shaul Druckmann",
    venue: "The Computing Dendrite: From Structure to Function",
    editors: "H. Cuntz, M. Remme, B. Torben-Nielsen (eds.)",
    publisher: "Springer New York",
    year: 2014,
    links: {}
  },
  {
    id: "druckmann2014book2",
    title: "Evolutionary Algorithms",
    authors: "Shaul Druckmann",
    venue: "Encyclopedia of Computational Neuroscience",
    editors: "D. Jaeger, R. Jung (eds.)",
    publisher: "Springer New York",
    year: 2014,
    links: {}
  },
  {
    id: "druckmann2013book",
    title: "Computational Neuroscience: Capturing the Essence",
    authors: "Shaul Druckmann, Albert Gidon, Idan Segev",
    venue: "Neurosciences-From Molecule to Behavior: a university textbook",
    editors: "G. Galizia, P. Lledo (eds.)",
    publisher: "Springer Berlin",
    year: 2013,
    pages: "671-694",
    links: {}
  }
];

// ===========================================
// HELPER FUNCTIONS
// ===========================================

export function formatAuthor(name) {
  return name;
}

export function isPI(name) {
  return name.toLowerCase().includes('druckmann');
}

// Get all publications for display
export function getAllPublications() {
  return [...PUBLICATIONS];
}

// Get publications by year
export function getPublicationsByYear() {
  const byYear = {};
  PUBLICATIONS.forEach(pub => {
    if (!byYear[pub.year]) byYear[pub.year] = [];
    byYear[pub.year].push(pub);
  });
  return byYear;
}

// Get publications by member name (matches full name in authors string)
export function getPublicationsByMember(memberName) {
  const nameToSearch = memberName.trim().toLowerCase();
  const match = pub => pub.authors.toLowerCase().includes(nameToSearch);
  
  return {
    publications: PUBLICATIONS.filter(match),
    preprints: PREPRINTS.filter(match),
    bookChapters: BOOK_CHAPTERS.filter(match),
  };
}

// Get years sorted descending
export function getYearsSorted() {
  const years = new Set(PUBLICATIONS.map(p => p.year));
  return Array.from(years).sort((a, b) => b - a);
}