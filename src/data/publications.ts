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
    title: "Using Deep Learning to Predict Obesity and Its Effect on Human Physiology",
    journal: "2023 24th International Arab Conference on Information Technology, ACIT 2023",
    date: "December 2023",
    abstract: "Obesity is a pressing global health issue with significant implications for human physiology and overall wellbeing. This research paper explores the application of deep learning techniques in predicting obesity and understanding its profound effects on human physiology. Using Deep Learning to predict obesity based on the physical condition of a human being increased the efficacy compared to other Machine Learning models.",
    keywords: ["Accuracy", "active functions", "Deep Learning", "Machine Learning", "obesity", "Visualization"],
    doi: "10.1109/ACIT58888.2023.10453907"
  },
];