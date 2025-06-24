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
    abstract: "Money laundering poses a serious threat to global financial systems, enabling criminal activities and undermining economic stability. This report explores the use of Graph Neural Networks (GNNs) to detect such activities using a synthetic financial transaction dataset from IBM. By leveraging the graph structure—where nodes represent entities and edges represent enriched transactions—three GNN models were applied: GAT, GraphSAGE, and GCN. Each underwent preprocessing steps like class balancing, currency standardization, and graph refinement. Results showed GAT excelled in identifying fraudulent cases but misclassified legitimate ones, GraphSAGE achieved balanced performance, and GCN offered strong class separation with high AUC-ROC but lower recall for legitimate transactions. The study underscores the challenges of class imbalance and sparse connectivity, recommending improved feature engineering, ensemble methods, and alternative architectures. Overall, it demonstrates the promising role of GNNs in detecting money laundering and guiding future AI-driven financial crime detection systems.",
    keywords: ["GNN", "GAT", "GraphSAGE", "GCN", "Python"],
    doi: "10.5281/zenodo.15732883"
  },
  {
    title: "Predictive Analytics for Employee Engagement and Retention",
    journal: "Ajman University",
    date: "April 2024",
    abstract: "Employee attrition is a persistent challenge, even for major tech companies like IBM. These issues may stem from retirement, voluntary departures, or unforeseen events. The loss of skilled and experienced employees can disrupt a company's stability and productivity, presenting a significant challenge for HR management. This report aims to investigate the underlying causes of employee attrition at IBM, focusing on identifying the key factors that drive employees to leave. The approach involves a comprehensive analysis combining tabular data provided by IBM with insights extracted from social media platforms like X, Seek, and Trustpilot. Quantitative data includes historical attrition rates and demographic information, while qualitative insights are gathered from employee reviews and feedback. Understanding the root causes of attrition is essential for IBM to develop targeted strategies that enhance retention and engagement. Addressing work-life balance, providing career growth opportunities, and fostering a positive organizational culture can significantly reduce attrition, ultimately improving employee satisfaction and loyalty.",
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