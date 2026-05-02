/**
 * Research Areas & Lab Info
 * 
 * Edit this file to update research focus areas, 
 * collaborators, and lab information.
 */

// ===========================================
// RESEARCH AREAS
// ===========================================

export const RESEARCH_AREAS = [
  {
    id: "neural-dynamics",
    number: "01",
    label: "Neural Dynamics",
    title: "Population Dynamics & Computation",
    description: [
      "How do populations of neurons work together to represent information and perform computations? We study the collective dynamics of neural populations across brain regions to understand the principles governing neural computation.",
      "Our work has revealed that neural population activity often evolves along low-dimensional manifolds, suggesting that circuit connectivity constrains dynamics in ways that may be functionally important for computation."
    ],
    keywords: ["Dimensionality reduction", "State space analysis", "Neural manifolds", "Motor preparation"]
  },
  {
    id: "circuit-mechanisms",
    number: "02",
    label: "Circuit Mechanisms",
    title: "From Connectivity to Computation",
    description: [
      "What circuit-level mechanisms give rise to neural computations? We investigate how synaptic connectivity and network architecture shape the computations performed by neural circuits.",
      "By combining theoretical analysis with experimental data, we aim to understand how specific circuit motifs—such as recurrent excitation, lateral inhibition, and feedback loops—contribute to computation."
    ],
    keywords: ["Circuit motifs", "Recurrent networks", "Connectivity inference", "Network models"]
  },
  {
    id: "decision-making",
    number: "03",
    label: "Decision Making",
    title: "Neural Basis of Decisions",
    description: [
      "How do neural circuits accumulate evidence, form decisions, and translate them into motor actions? We study the neural dynamics underlying decision-making across multiple brain regions.",
      "Our research examines how sensory information is integrated over time, how categorical decisions emerge from continuous neural representations, and how decisions are converted into actions."
    ],
    keywords: ["Evidence accumulation", "Attractor dynamics", "Choice probability", "Reaction times"]
  },
  {
    id: "methods",
    number: "04",
    label: "Methods",
    title: "Analytical Tools & Techniques",
    description: [
      "We develop new analytical tools and computational methods for extracting insights from large-scale neural recordings, enabling principled analysis of high-dimensional neural data.",
      "Our methods span dimensionality reduction, dynamical systems identification, statistical inference, and machine learning approaches tailored to the unique challenges of neural data."
    ],
    keywords: ["Dimensionality reduction", "Dynamical systems", "Statistical inference", "Open-source software"]
  }
];

// ===========================================
// COLLABORATORS
// ===========================================

export const COLLABORATORS = [
  {
    name: "Karel Svoboda Lab",
    affiliation: "Allen Institute for Neural Dynamics",
    topic: "Motor cortex dynamics during decision-making",
    website: "https://www.janelia.org/lab/svoboda-lab"
  },
  {
    name: "Krishna Shenoy Lab",
    affiliation: "Stanford University",
    topic: "Neural population dynamics and motor control",
    website: "https://shenoy.stanford.edu"
  },
  {
    name: "Mark Churchland Lab",
    affiliation: "Columbia University",
    topic: "Dynamical systems approaches to motor cortex",
    website: "https://churchland.zuckermaninstitute.columbia.edu"
  },
  {
    name: "Surya Ganguli Lab",
    affiliation: "Stanford University",
    topic: "Theory of neural computation",
    website: "https://ganguli-gang.stanford.edu"
  }
];

// ===========================================
// LAB INFO
// ===========================================

export const LAB_INFO = {
  name: "Druckmann Lab",
  university: "Stanford University",
  tagline: "Understanding neural computation through population dynamics",
  address: {
    building: "Fairchild Building",
    room: "D259",
    street: "299 Campus Drive",
    city: "Stanford",
    state: "CA",
    zip: "94304"
  },
  contact: {
    email: "druckmann@stanford.edu",
    phone: ""
  },
  affiliations: [
    { name: "Stanford Neurobiology", url: "http://neurobiology.stanford.edu/" },
    { name: "Psychiatry & Behavioral Sciences", url: "https://med.stanford.edu/psychiatry.html" },
    { name: "Stanford Bio-X", url: "https://biox.stanford.edu/" },
    { name: "Wu Tsai Neurosciences Institute", url: "https://neuroscience.stanford.edu/" }
  ],
  social: {
    github: "https://github.com/druckmann-lab",
    twitter: "",
    scholar: ""
  }
};
