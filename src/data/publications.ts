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
  {
    title: "Classifying IBM Transactions for Anti Money Laundering (AML) using GNN Models",
    journal: "Ajman University",
    date: "December 2024",
    abstract: "Explores using Graph Neural Networks (GAT, GraphSAGE, GCN) to detect money laundering in financial data, highlighting their strengths, limitations, and potential for fighting financial crime.",
    keywords: ["GNN", "GAT", "GraphSAGE", "GCN", "Python"],
    doi: "10.5281/zenodo.15732883"
  },
  {
    title: "Predictive Analytics for Employee Engagement and Retention",
    journal: "Ajman University",
    date: "April 2024",
    abstract: "The approach combines predictive analytics with sentiment analysis of employee feedback collected from platforms like X (formerly Twitter), Seek, and Trustpilot. This hybrid analysis provides both quantitative and qualitative perspectives on why employees choose to leave, offering IBM actionable insights to improve retention.",
    keywords: ["XGBoost", "SMOTE", "lightGBM", "KNN", "SVM", "HR", "ANN", "Logistic Regression", "Balanced bagging classifier", "Social Media"],
    doi: "10.5281/zenodo.15732942"
  },
  {
    title: "Analyzing Flight Delays and Cancellations to Identify Airlines with Optimal On-Time Performance",
    journal: "Ajman University",
    date: "November 2024",
    abstract: "This report analyzes flight delays and cancellations using Kaggle’s 2015 dataset through a detailed ETL (Extract, Transform, Load) process and advanced machine learning models, including XGBoost, LightGBM, and CatBoost. The ETL phase covers data loading, feature selection, exploration, and preprocessing. Model selection is based on each algorithm’s strengths—XGBoost for versatility, LightGBM for speed, and CatBoost for handling categorical data. A literature review highlights their practical applications and comparative advantages. The project also features a Power BI dashboard with card visuals, bar charts, and slicers to present key insights such as cancellation rates, airline performance, and peak delay periods. Together, these elements provide a comprehensive approach to understanding and addressing flight disruptions.",
    keywords: ["PowerBI", "Python", "Machine Learning"],
    doi: "10.5281/zenodo.15732987"
  },
  {
    title: "Big Data Analysis of Household Energy Consumption for Climate Change Mitigation",
    journal: "Ajman University",
    date: "October 2024",
    abstract: "he research study concentrates on examining the energy consumption patterns of households with the help of data analytics. Smart meters data from 5,567 London residences involved in the UK Power Networks’ Low Carbon London project is applied. This study takes on data preprocessing, feature selection, and machine learning algorithms to segment consumption patterns, break down the electricity load curve, connect consumption data with ACORN classification information, and forecast household electricity consumption. This research shares insights supporting the reduction of climate change and provides sustainable energy solutions.",
    keywords: ["Big Data", "Analytics", "House Hold Energy Consumption", "Smart Meters", "Climate Change", "Patterns", "Machine Learning", "PySpark", "ACORN classification"],
    doi: "10.5281/zenodo.15733044"
  },
  
];