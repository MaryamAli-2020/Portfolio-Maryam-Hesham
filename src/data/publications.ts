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
    title: "Comparative Analysis of Crossover and Mutation Operators in Genetic Algorithms for the Traveling Salesman Problem",
    journal: "zenodo",
    date: "March 2026",
    abstract: "Genetic Algorithms (GAs) are widely used to solve combinatorial problems such as the Traveling Salesman Problem (TSP). This paper compares permutation-based crossover operators (OX1, PMX, CX, ERX) and mutation strategies (Swap, Insert, Scramble, Inversion). The analysis shows how operator choice affects diversity, solution quality, and overall optimization performance.",
    keywords: ["Genetic Algorithms", "Traveling Salesman Problem", "Crossover Operators", "Mutation Strategies"],
    doi: "https://doi.org/10.5281/zenodo.18900542"
  },
  {
    title: "Designing and Evaluating an AI-Enhanced User Interface: A User-Centered Study of UAE Legislation Portal Enhancement",
    journal: "zenodo",
    date: "December 2025",
    abstract: "The integration of artificial intelligence (AI) into user interfaces has the potential to significantly enhance user experience and satisfaction. This paper presents a user-centered study focusing on the enhancement of the UAE Legislation Portal through AI-driven improvements. The research investigates how AI can be effectively utilized to improve navigation, search functionality, and overall usability of the portal. Through a combination of user feedback, usability testing, and performance analysis, this study evaluates the impact of AI enhancements on user engagement and efficiency.",
    keywords: ["AI", "User Interface", "User-Centered Design", "UAE Legislation Portal"],
    doi: "https://doi.org/10.5281/zenodo.18900491"
  },
  {
    title: "Clustering Multi-Scale Datasets: A Performance Comparison of K-Means, K-Medoids, DBSCAN, and Agglomerative Clustering Algorithms",
    journal: "zenodo",
    date: "December 2025",
    abstract: "Clustering is a fundamental task in data mining and machine learning. This paper presents a comprehensive comparison of four popular clustering algorithms—K-Means, K-Medoids, DBSCAN, and Agglomerative Clustering—when applied to multi-scale datasets. The study evaluates each algorithm's performance in terms of cluster quality, computational efficiency, and robustness to noise. Results indicate that the choice of clustering algorithm significantly impacts the outcome, especially when dealing with datasets of varying scales and distributions.",
    keywords: ["Clustering", "K-Means", "K-Medoids", "DBSCAN", "Agglomerative Clustering"],
    doi: "https://doi.org/10.5281/zenodo.18900459"
  },
  {
    title: "AI in Smart City and Smart Home",
    journal: "zenodo",
    date: "December 2025",
    abstract: "The integration of artificial intelligence (AI) into smart city and smart home environments has the potential to significantly enhance the quality of life for residents. This paper explores the applications of AI in these domains, focusing on how intelligent systems can improve energy efficiency, security, and overall user experience. Through a combination of case studies, simulations, and user feedback, this study evaluates the impact of AI implementations in smart cities and homes.",
    keywords: ["AI", "Smart City", "Smart Home", "User Experience"],
    doi: "https://doi.org/10.5281/zenodo.18900064"
  },
  {
    title: "Classifying IBM Transactions for Anti Money Laundering (AML) using GNN Models",
    journal: "Ajman University",
    date: "December 2024",
    abstract: "Money laundering threatens global financial systems by enabling crime and destabilizing economies. This report investigates using Graph Neural Networks (GNNs) to detect such activities in a synthetic IBM transaction dataset. Entities and transactions were modeled as nodes and edges. Three GNNs—GAT, GraphSAGE, and GCN—were evaluated after preprocessing steps like class balancing and currency standardization. GAT identified fraud well but misclassified legitimate cases, GraphSAGE performed consistently, and GCN achieved high AUC-ROC but lower recall. The study highlights class imbalance and graph sparsity as key challenges, suggesting ensemble models and improved features for better results.",
    keywords: ["GNN", "GAT", "GraphSAGE", "GCN", "Python"],
    doi: "10.5281/zenodo.15732883"
  },
  {
    title: "Predictive Analytics for Employee Engagement and Retention",
    journal: "Ajman University",
    date: "April 2024",
    abstract:"Employee attrition remains a major challenge, even for tech giants like IBM. This report explores the key factors behind employee departures—whether due to retirement, resignation, or unexpected events. It combines IBM’s tabular data with insights from platforms like X, Seek, and Trustpilot. Quantitative data covers attrition rates and demographics, while qualitative input comes from employee reviews. The goal is to uncover root causes and help IBM develop strategies to boost retention, such as improving work-life balance, career growth, and company culture.",
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
    abstract: "The research study concentrates on examining the energy consumption patterns of households with the help of data analytics. Smart meters data from 5,567 London residences involved in the UK Power Networks’ Low Carbon London project is applied. This study takes on data preprocessing, feature selection, and machine learning algorithms to segment consumption patterns, break down the electricity load curve, connect consumption data with ACORN classification information, and forecast household electricity consumption. This research shares insights supporting the reduction of climate change and provides sustainable energy solutions.",
    keywords: ["Big Data", "Analytics", "House Hold Energy Consumption", "Smart Meters", "Climate Change", "Patterns", "Machine Learning", "PySpark", "ACORN classification"],
    doi: "10.5281/zenodo.15733044"
  },
  {
    title: "AI-Powered Credit Risk and Loan Approval Prediction: Feature Selection and Imbalanced Data Analysis",
    journal: "Ajman University",
    date: "September 2025",
    abstract: "Credit risk prediction is vital for financial decision-making, as distinguishing safe from risky loan applicants prevents major losses. This project compared baseline models (Logistic Regression, Decision Tree) with advanced methods (LightGBM, XGBoost, CatBoost) using feature selection and data balancing (SMOTE). Baseline tests showed data imbalance issues—Logistic Regression reached 74% accuracy but recalled only 40% of risky loans, while Decision Tree overfit despite 97% accuracy. Advanced models improved fairness and generalization; LightGBM performed best (96% accuracy, 0.97 precision/recall), with XGBoost and CatBoost offering strong stability. Logistic Regression remained a transparent benchmark. Overall, effective credit risk modeling depends on managing data imbalance and evaluation design, yielding a scalable, reliable pipeline for financial use.",
    keywords: ["Loan Detection", "ETL", "Machine Learning", "LightGBM", "XGBoost", "CatBoost", "HighGradientBoosting", "SMOTE", "imbalanced data", "feature engineering"],
    doi: "10.5281/zenodo.17577468"
  },
];