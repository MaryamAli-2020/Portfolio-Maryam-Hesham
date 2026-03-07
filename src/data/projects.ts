export type ProjectCategory = 'machine-learning' | 'data-analytics' | 'nlp' | 'web-development' | 'ai' | 'automation';

export interface Project {
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projectData: Project[] = [
  {
    title: "Job Gap Analyzer",
    description: "Career Compass is a modern web application built with Next.js and powered by Google's Gemini AI. It helps you navigate your career path by analyzing your resume, matching you with relevant job opportunities, identifying skill gaps against job descriptions, and recommending personalized learning resources to help you land your dream job.",
    image: "https://i.imgur.com/tHMPtm2.png",
    category: "ai",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ShadCN UI", "Firebase Genkit", "Google Gemini", "Lucide React"],
    liveUrl: "https://job-gap-analyzer.vercel.app",
    githubUrl: "https://github.com/MaryamAli-2020/Job-Gap-Analyzer"
  },
  {
    title: "Disasters Dashboard",
    description: "A comprehensive real-time disaster monitoring and relief coordination platform built with Streamlit. This dashboard provides emergency responders, government agencies, and relief organizations with critical information about natural disasters and resource management capabilities.",
    image: "https://i.imgur.com/ZnePnuI.png",
    category: "data-analytics",
    technologies: ["Python", "Plotly", "Streamlit", "Folium", "Pandas", "NumPy", "Requests", "CSS"],
    liveUrl: "https://disasterdashboard.streamlit.app/#d2a0bc97",
    githubUrl: "https://github.com/MaryamAli-2020/disaster_dashboard"
  },
  {
    title: "NAZM | نظم",
    description: "A comprehensive personal dashboard designed to help you organize your academic, personal, and professional life. Built with a modern tech stack, NAZM provides a seamless and customizable experience to keep you on track.",
    image: "https://i.imgur.com/QcWB4Gc.png",
    category: "web-development",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Firebase", "Genkit", "dnd-kit"],
    liveUrl: "https://nazm.vercel.app/",
    githubUrl: "https://github.com/MaryamAli-2020/nazm"
  },
  {
    title: "Lectro | AI Oral Exam Simulator",
    description: "Lectro is an intelligent, AI-powered oral exam simulator designed to help students prepare for exams with confidence. It leverages generative AI to create a dynamic and interactive study experience, adapting to various subjects, grade levels, and even quantitative content with its specialized Math Mode.",
    image: "https://i.imgur.com/eS1jP6i.png",
    category: "ai",
    technologies: ["React", "TypeScript", "Next.js", "Google AI & Genkit", "Tailwind CSS", "ShadCN UI"],
    liveUrl: "https://lectro-chat.vercel.app",
    githubUrl: "https://github.com/MaryamAli-2020/Lectro/tree/master"
  },
  {
    title: "VisionHub",
    description: "VisionHub is a comprehensive video-sharing and professional networking platform designed for content creators, professionals, and users in the entertainment, education, and creative industries. The platform facilitates video sharing, professional networking, real-time messaging, and career development opportunities with enterprise-grade security and scalability.",
    image: "https://i.imgur.com/byePME1.png",
    category: "web-development",
    technologies: ["Vite", "TypeScript", "React", "Shadcn-ui", "Tailwind CSS"],
    liveUrl: "https://visionhub-one.vercel.app",
    githubUrl: "https://github.com/MaryamAli-2020/VisionHub"
  },
  {
    title: "Project Tracker Desktop Widget",
    description: "A lightweight desktop productivity widget for tracking project development stages. Runs silently in your system tray and stays always on top when needed.",
    image: "https://i.imgur.com/WFYyaRl.png",
    category: "web-development",
    technologies: ["Electron", "HTML", "CSS", "JavaScript", "Node"],
    githubUrl: "https://github.com/MaryamAli-2020/project-tracker-widget"
  },
  {
    title: "Smart Sentiment Analyzer",
    description: "A lightweight desktop productivity widget for tracking project development stages. Runs silently in your system tray and stays always on top when needed.",
    image: "https://i.imgur.com/nICMBDZ.png",
    category: "nlp",
    technologies: ["Python", "TypeScript", "MongoDB", "fastAPI", "HuggingFace"],
    liveUrl: "https://smart-review-eta.vercel.app/",
    githubUrl: "https://github.com/MaryamAli-2020/backend/tree/main"
  },
  {
    title: "Face Verification App",
    description: "A Python-based Face Verification system that uses deep learning to compare two facial images and determine if they belong to the same person. This project includes both a backend (face verification logic, API) and a frontend (for user interaction).",
    image: "https://i.imgur.com/brVs6D9.png",
    category: "machine-learning",
    technologies: ["Python", "matplotlib", "tensorflow", "Pandas", "deeplake", "Flask", "OpenCV", "React", "Node.js"],
    githubUrl: "https://github.com/MaryamAli-2020/FACE-RECOGNITION-PYTHON"
  },
  {
    title: "Sales Copilot",
    description: "A Sales Research Assistant designed to help sales representatives prepare for calls by automating prospect and company research, generating actionable insights, and producing structured pre-call reports.",
    image: "https://i.imgur.com/vp3a6cI.png",
    category: "automation",
    technologies: ["Relevance AI", "Gemini", "Firecrawl", "LinkedIn", "LangChain"],
    liveUrl:"https://app.relevanceai.com/agents/d7b62b/330f80d1c01d-4a7b-89fc-d8291875a50c/bee88f98-83a1-4b73-bad6-397962819ce3/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%233c387a&bubble_icon=pd/chat&input_placeholder_text=Type+your+message...&hide_logo=false&conversationId=new",
    githubUrl: "https://github.com/MaryamAli-2020/Sales-Copilot?tab=readme-ov-file"
  },
  {
    title: "Ajman Job Connect",
    description: "Ajman Job Connect is a web app that streamlines job searches in Ajman. Users can input job titles via text or voice to get personalized recommendations. Powered by Flask, MongoDB, and machine learning, it offers an intuitive, efficient job search experience with real-time results and an easy-to-use interface.",
    image: "https://i.imgur.com/ru9bXqD.png",
    category: "machine-learning",
    technologies: ["Python", "CSS", "HTML", "JavaScript", "Flask", "MongoDB", "SpeechRecognition", "pyttsx3", "ffmpeg", "Pandas", "sentence-transformers"],
    githubUrl: "https://github.com/MaryamAli-2020/ajman-job-connect"
  },
  {
   title: "Ajman Data Insights Generator",
   description: "The ‘Ajman Data Insight Generator’ is a web application designed to provide users with detailed insights into various dataset on the Ajman data portal provided by the DDA, that is through interactive visualizations.",
   image: "https://i.imgur.com/MsvtKPO.png",
   category: "data-analytics",
   technologies: ["Flask", "Pandas", "requests", "plotly", "beatifulsoup4", "HTML", "CSS"],
   liveUrl: "https://ajman-data-inisights-generator.vercel.app",
   githubUrl: "https://github.com/MaryamAli-2020/Ajman_Data_Inisights_Generator/tree/main" 
  },
  {
    title: "House Prices Advanced Regression Techniques",
    description: "This report analyzes a sales dataset, covering EDA, data cleaning, feature engineering, regression modeling, ensembling, and result evaluation. It aims to extract insights, optimize sales strategies, and assess the approaches used. It also notes surprising findings and suggests future directions.",
    image: "https://i.pinimg.com/736x/0e/c3/c6/0ec3c67f032dd9fea79b1bebb9c6fde9.jpg",
    category: "machine-learning",
    technologies: ["Pandas", "matplotlib", "seaborn", "sklearn", "NumPy", "LinearRegression", "Ridge", "RandomForestRegressor", "XGBRegressor", "VotingRegressor", "AdaBoostRegressor", "GradientBoostingRegressor", "StackingRegressor"],
    githubUrl: "https://github.com/MaryamAli-2020/House-Prices-Advanced-Regression-Techniques"
  },
  {
    title: "Analyzing Flight Delays and Cancellations to Identify Airlines with Optimal on Time Performance",
    description: "The report explores flight delays and cancellations using Kaggle's 2015 dataset, employing advanced models like XGBoost, LightGBM, and CatBoost. It discusses objectives, data understanding, ETL processes, model descriptions, evaluation metrics, and dashboard design, culminating in actionable insights to address flight disruptions effectively.",
    image: "https://i.imgur.com/GLgcizh.png",
    category: "data-analytics",
    technologies: ["PowerBI", "Python", "Pandas", "Visualization", "XGBoost", "LightGBM", "CATBoost"],
    liveUrl: "https://app.powerbi.com/groups/me/reports/f95f70b5-49cd-4462-95b8-28e0d160628c/ReportSection86ae129c62e73ca1d71c?experience=power-bi",
    githubUrl: "https://github.com/MaryamAli-2020/Analyzing-Flight-Delays-and-Cancellations-to-Identify-Airlines-with-Optimal-On-Time-Performance"
  },
  {
    title: "Big Data Analysis of Household Energy Consumption for Climate Change Mitigation",
    description: "This study examines energy usage patterns in households using data analytics. It utilizes smart meter data from 5,567 London residences to analyze consumption trends, correlate with ACORN classification, and forecast electricity usage. The research aims to inform sustainable energy solutions and mitigate climate change impacts.",
    image: "https://i.pinimg.com/736x/ea/69/a6/ea69a6ab75a5f1334196728a08fb6739.jpg",
    category: "data-analytics",
    technologies: ["PySpark", "LinearRegression", "RandomForestRegression", "DecisionTreeRegression", "Plotly", "matplotlib"],
    githubUrl: "https://github.com/MaryamAli-2020/Big-Data-Analysis-of-Household-Energy-Consumption-for-Climate-Change-Mitigation"
  },
  {
    title: "Arabic Diacritization Using Deep Neural Networks",
    description: "improving the readability and understanding of Arabic text by predicting and applying diacritics accurately.",
    image: "https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-031-80438-0_5/MediaObjects/644024_1_En_5_Fig2_HTML.png",
    category: "nlp",
    technologies: ["Python", "Tensorflow", "sklearn", "matplotlib", "NumPy"],
    githubUrl: "https://github.com/MaryamAli-2020/Arabic-text-diacritization.git"
  },
  {
    title: "StackOverflow Survery Dashboard 2022",
    description: "This project involves cleaning and preprocessing the Stack Overflow 2022 Developer Survey using Python, followed by insightful data visualizations created with Power BI.",
    image: "https://i.imgur.com/Z4elQdd.png",
    category: "data-analytics",
    technologies: ["PowerBI", "Pandas", "matplotlib", "NumPy", "wordcloud", "Plotly"],
    liveUrl: "https://app.powerbi.com/groups/me/reports/5a6203df-bd75-4ae0-a822-bfc49f1904f4/ReportSection?experience=power-bi",
    githubUrl: "https://github.com/MaryamAli-2020/SO-survey-2022/tree/main"
  },
  {
    title: "Supermarket Sales EDA",
    description: "Analyzing a Supermarket Sales Dataset to uncover patterns and insights related to customer behavior, product popularity, and sales trends. ",
    image: "https://i.pinimg.com/736x/92/17/85/9217859015a65a0d50331179cd212e14.jpg",
    category: "data-analytics",
    technologies: ["Python", "matplotlib", "seaborn", "Pandas", "NumPy", "Plotly", "Sklearn", "lightBGM" ],
    githubUrl: "https://github.com/MaryamAli-2020/SUPERMARKETSALES-EDA-ML"
  },
  {
    title: "Obesity Prediction using Deep Learning",
    description: "The high prevalence of obesity around the world has been a major concern globally! In this report will be creating a neural network algorithm that performs its best to detect the occurrence of obesity in humans as well as talk about its importance and how we can prevent it from happening with the help of our dataset.",
    image: "https://i.imgur.com/9uCNNyS.png",
    category: "machine-learning",
    technologies: ["Pandas", "Sklearn", "NumPy", "Seaborn", "matplotlib", "Plotly", "tensorflow"],
    liveUrl: "https://nchr.elsevierpure.com/en/publications/using-deep-learning-to-predict-obesity-and-its-effect-on-human-ph",
    githubUrl: "https://github.com/MaryamAli-2020/Obesity-Prediction-using-DL"
  },
  {
    title: "Predictive Analytics for Employee Engagement and Retention",
    description: "The approach combines predictive analytics with sentiment analysis of employee feedback collected from platforms like X (formerly Twitter), Seek, and Trustpilot. This hybrid analysis provides both quantitative and qualitative perspectives on why employees choose to leave, offering IBM actionable insights to improve retention.",
    image: "https://i.imgur.com/1SU73E9.png",
    category: "machine-learning",
    technologies: ["XGBoost", "LightGBM", "KNN", "SVM", "Logistic Regression", "ANN", "Balanced Bagging Classifier", "SMOTE"],
    liveUrl: "https://predict-employee-retention.streamlit.app/",
    githubUrl: "https://github.com/MaryamAli-2020/Predictive-Analytics-for-Employee-Engagement-and-Retention"
  },
  {
    title: "Classifying IBM Transactions for Anti Money Laundering",
    description: "Explores using Graph Neural Networks (GAT, GraphSAGE, GCN) to detect money laundering in financial data, highlighting their strengths, limitations, and potential for fighting financial crime.",
    image: "https://i.pinimg.com/736x/4e/39/b4/4e39b4ffc34feab7a657049986d91b71.jpg",
    category: "machine-learning",
    technologies: ["GNN", "GAT", "GraphSAGE", "GCN", "Python"],
    githubUrl: "https://github.com/MaryamAli-2020/IBM-DATA-GRAPH/tree/master",
  },
  {
    title: "AI-Powered Credit Risk and Loan Approval Prediction: Feature Selection and Imbalanced Data Analysis",
    description: "Highlights that credit risk modeling success depends not only on algorithm choice, but also on handling data imbalance and carefully designing evaluation frameworks.",
    image: "https://i.imgur.com/fzTDfyc.png",
    category: "machine-learning",
    technologies: ["SMOTE", "XGBoost", "LightGBM", "Catboost", "Python", "sklearn", "seaborn", "martplotlib"],
    githubUrl: "https://github.com/MaryamAli-2020/AI-Powered-Credit-Risk-and-Loan-Approval-Prediction-Feature-Selection-and-Imbalanced-Data-Analysis",
  },
  {
    title: "Clustering Multi-Scale Datasets: A Performance Comparison",
    description: "Compares the performance of K-Means, K-Medoids, DBSCAN, and Agglomerative Clustering algorithms on multi-scale datasets.",
    image: "https://i.imgur.com/FEpRrk0.png",
    category: "machine-learning",
    technologies: ["Python", "scikit-learn", "matplotlib", "seaborn"],
    githubUrl: "https://github.com/MaryamAli-2020/Clustering_Multi-Scale_Datasets_A_Performance_Comparison.git",
  },
  {
    title: "Qanoon | UAE Legislation Portal Enhancement",
    description: "Explore comprehensive legal information across multiple practice areas. Get answers to your questions with our AI-powered assistant available 24/7.",
    image: "https://i.imgur.com/nszeNDj.png",
    category: "ai",
    technologies: ["comprehensive legal information", "AI-powered assistant", "24/7 availability"],
    liveUrl: "https://qanoon-smoky.vercel.app/",
    githubUrl: "https://github.com/MaryamAli-2020/hci-proj.git",
  },
  {
    title: "TSP-Genetic-Algorithm-Comparative-Evolutionary-Analysis",
    description: "Compares the performance of genetic algorithms in solving the Traveling Salesman Problem.",
    image: "https://i.imgur.com/ahnM1iu.png",
    category: "machine-learning",
    technologies: ["Genetic Algorithms", "Python"],
    githubUrl: "https://github.com/MaryamAli-2020/TSP-Genetic-Algorithm-Comparative-Evolutionary-Analysis.git",
  },
];