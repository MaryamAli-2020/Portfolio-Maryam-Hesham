interface Publication {
  title: string;
  journal: string;
  date: string;
  abstract: string;
  keywords: string[];
  doi?: string;
}

export const publicationData: Publication[] = [
  {
    title: "Efficient Training of Large Language Models on Resource-Constrained Devices",
    journal: "Conference on Neural Information Processing Systems (NeurIPS)",
    date: "December 2024",
    abstract: "We present a novel approach for training large language models on devices with limited computational resources. Our method reduces memory requirements by 40% while maintaining 95% of the performance of full-scale models.",
    keywords: ["Large Language Models", "Efficient Computing", "Model Compression", "Edge AI"],
    doi: "10.1109/example.2024.123456"
  },
  {
    title: "Explainable AI for Healthcare: Interpretable Models for Clinical Decision Support",
    journal: "Journal of Biomedical Informatics",
    date: "October 2024",
    abstract: "This study explores the application of explainable AI techniques in clinical settings, focusing on how transparency in machine learning models can improve physician trust and adoption of AI-assisted decision support systems.",
    keywords: ["Explainable AI", "Healthcare", "Clinical Decision Support", "Trustworthy AI"],
    doi: "10.1016/j.jbi.2024.103982"
  },
  {
    title: "Visual Analytics for Time Series Data: A Comparative Study of Visualization Techniques",
    journal: "IEEE Transactions on Visualization and Computer Graphics",
    date: "May 2024",
    abstract: "We evaluate and compare various visualization techniques for time series data analysis, providing guidelines for selecting appropriate visual representations based on data characteristics and analytical tasks.",
    keywords: ["Data Visualization", "Time Series Analysis", "Visual Analytics", "User Studies"],
    doi: "10.1109/TVCG.2024.456789"
  }
];