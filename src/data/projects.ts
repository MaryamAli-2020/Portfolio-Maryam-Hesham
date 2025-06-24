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
    image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "ai",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ShadCN UI", "Firebase Genkit", "Google Gemini", "Lucide React"],
    liveUrl: "job-gap-analyzer.vercel.app",
    githubUrl: "https://github.com/MaryamAli-2020/Job-Gap-Analyzer"
  },
  {
    title: "Disasters Dashboard",
    description: "A comprehensive real-time disaster monitoring and relief coordination platform built with Streamlit. This dashboard provides emergency responders, government agencies, and relief organizations with critical information about natural disasters and resource management capabilities.",
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "data-analysis",
    technologies: ["Python", "Plotly", "Streamlit", "Folium", "Pandas", "NumPy", "Requests", "CSS"],
    liveUrl: "disasterdashboard.streamlit.app/#d2a0bc97",
    githubUrl: "https://github.com/MaryamAli-2020/disaster_dashboard"
  },
  {
    title: "NAZM | نظم",
    description: "A comprehensive personal dashboard designed to help you organize your academic, personal, and professional life. Built with a modern tech stack, NAZM provides a seamless and customizable experience to keep you on track.",
    image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web-development",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Firebase", "Genkit", "dnd-kit"],
    liveUrl: "https://nazm.vercel.app/",
    githubUrl: "https://github.com/MaryamAli-2020/nazm"
  },
  {
    title: "Stock Market Prediction Model",
    description: "Created a machine learning model that predicts stock price movements using historical data and sentiment analysis from financial news.",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "machine-learning",
    technologies: ["Python", "LSTM", "Scikit-Learn", "Pandas", "NLTK"],
    githubUrl: "https://github.com/emmadavis/stock-predictor"
  },
  {
    title: "Lectro | AI Oral Exam Simulator",
    description: "Lectro is an intelligent, AI-powered oral exam simulator designed to help students prepare for exams with confidence. It leverages generative AI to create a dynamic and interactive study experience, adapting to various subjects, grade levels, and even quantitative content with its specialized Math Mode.",
    image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "ai",
    technologies: ["React", "TypeScript", "Next.js", "Google AI & Genkit", "Tailwind CSS", "ShadCN UI"],
    liveUrl: "lectro-chat.vercel.app",
    githubUrl: "https://github.com/MaryamAli-2020/Lectro/tree/master"
  },
  {
    title: "VisionHub",
    description: "VisionHub is a comprehensive video-sharing and professional networking platform designed for content creators, professionals, and users in the entertainment, education, and creative industries. The platform facilitates video sharing, professional networking, real-time messaging, and career development opportunities with enterprise-grade security and scalability.",
    image: "https://images.pexels.com/photos/6476264/pexels-photo-6476264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web-development",
    technologies: ["Vite", "TypeScript", "React", "Shadcn-ui", "Tailwind CSS"],
    liveUrl: "visionhub-one.vercel.app",
    githubUrl: "https://github.com/MaryamAli-2020/VisionHub"
  },
  {
    title: "Project Tracker Desktop Widget",
    description: "A lightweight desktop productivity widget for tracking project development stages. Runs silently in your system tray and stays always on top when needed.",
    image: "",
    category: "web-development",
    technologies: ["Electron", "HTML", "CSS", "JavaScript", "Node"],
    githubUrl: "https://github.com/MaryamAli-2020/project-tracker-widget"
  },
  {
    title: "Smart Sentiment Analyzer",
    description: "A lightweight desktop productivity widget for tracking project development stages. Runs silently in your system tray and stays always on top when needed.",
    image: "",
    category: "nlp",
    technologies: ["Python", "TypeScript", "MongoDB", "fastAPI", "HuggingFace"],
    liveUrl: "smart-sentiment.vercel.app",
    githubUrl: "https://github.com/MaryamAli-2020/backend/tree/main"
  },
  {
    title: "Face Verification App",
    description: "A Python-based Face Verification system that uses deep learning to compare two facial images and determine if they belong to the same person. This project includes both a backend (face verification logic, API) and a frontend (for user interaction).",
    image: "",
    category: "machine-learning",
    technologies: ["Python", "matplotlib", "tensorflow", "Pandas", "deeplake", "Flask", "OpenCV", "React", "Node.js"],
    githubUrl: "https://github.com/MaryamAli-2020/FACE-RECOGNITION-PYTHON"
  },
  {
    title: "Sales Copilot",
    description: "A Sales Research Assistant designed to help sales representatives prepare for calls by automating prospect and company research, generating actionable insights, and producing structured pre-call reports.",
    image: "",
    category: "automation",
    technologies: ["Relevance AI", "Gemini", "Firecrawl", "LinkedIn", "LangChain"],
    liveUrl:"https://app.relevanceai.com/agents/d7b62b/330f80d1c01d-4a7b-89fc-d8291875a50c/bee88f98-83a1-4b73-bad6-397962819ce3/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%233c387a&bubble_icon=pd/chat&input_placeholder_text=Type+your+message...&hide_logo=false&conversationId=new",
    githubUrl: "https://github.com/MaryamAli-2020/Sales-Copilot?tab=readme-ov-file"
  },
  {
    title: "Ajman Job Connect",
    description: "Ajman Job Connect is a web app that streamlines job searches in Ajman. Users can input job titles via text or voice to get personalized recommendations. Powered by Flask, MongoDB, and machine learning, it offers an intuitive, efficient job search experience with real-time results and an easy-to-use interface.",
    image: "",
    category: "machine-learning",
    technologies: ["Python", "CSS", "HTML", "JavaScript", "Flask", "MongoDB", "SpeechRecognition", "pyttsx3", "ffmpeg", "Pandas", "sentence-transformers"],
    githubUrl: "https://github.com/MaryamAli-2020/ajman-job-connect"
  },
  {
   title: "Ajman Data Insights Generator",
   description: "The ‘Ajman Data Insight Generator’ is a web application designed to provide users with detailed insights into various dataset on the Ajman data portal provided by the DDA, that is through interactive visualizations.",
   image: "",
   category: "data-analytics",
   technologies: ["Flask", "Pandas", "requests", "plotly", "beatifulsoup4", "HTML", "CSS"],
   liveUrl: "ajman-data-inisights-generator.vercel.app",
   githubUrl: "https://github.com/MaryamAli-2020/Ajman_Data_Inisights_Generator/tree/main" 
  },
  {
    title: "House Prices Advanced Regression Techniques",
    description: "This report analyzes a sales dataset, covering EDA, data cleaning, feature engineering, regression modeling, ensembling, and result evaluation. It aims to extract insights, optimize sales strategies, and assess the approaches used. It also notes surprising findings and suggests future directions.",
    image: "",
    category: "machine-learning",
    technologies: ["Pandas", "matplotlib", "seaborn", "sklearn", "NumPy", "LinearRegression", "Ridge", "RandomForestRegressor", "XGBRegressor", "VotingRegressor", "AdaBoostRegressor", "GradientBoostingRegressor", "StackingRegressor"],
    githubUrl: "https://github.com/MaryamAli-2020/House-Prices-Advanced-Regression-Techniques"
  },
  {
    title: "Analyzing Flight Delays and Cancellations to Identify Airlines with Optimal on Time Performance",
    description: "The report explores flight delays and cancellations using Kaggle's 2015 dataset, employing advanced models like XGBoost, LightGBM, and CatBoost. It discusses objectives, data understanding, ETL processes, model descriptions, evaluation metrics, and dashboard design, culminating in actionable insights to address flight disruptions effectively.",
    image: "",
    category: "data-analytics",
    technologies: ["PowerBI", "Python", "Pandas", "Visualization", "XGBoost", "LightGBM", "CATBoost"],
    liveUrl: "https://app.powerbi.com/groups/me/reports/f95f70b5-49cd-4462-95b8-28e0d160628c/ReportSection86ae129c62e73ca1d71c?experience=power-bi",
    githubUrl: "https://github.com/MaryamAli-2020/Analyzing-Flight-Delays-and-Cancellations-to-Identify-Airlines-with-Optimal-On-Time-Performance"
  },
  {
    title: "Big Data Analysis of Household Energy Consumption for Climate Change Mitigation",
    description: "This study examines energy usage patterns in households using data analytics. It utilizes smart meter data from 5,567 London residences to analyze consumption trends, correlate with ACORN classification, and forecast electricity usage. The research aims to inform sustainable energy solutions and mitigate climate change impacts.",
    image: "",
    category: "data-analytics",
    technologies: ["PySpark", "LinearRegression", "RandomForestRegression", "DecisionTreeRegression", "Plotly", "matplotlib"],
    githubUrl: "https://github.com/MaryamAli-2020/Big-Data-Analysis-of-Household-Energy-Consumption-for-Climate-Change-Mitigation"
  },
  {
    title: "StackOverflow Survery Dashboard 2022",
    description: "This project involves cleaning and preprocessing the Stack Overflow 2022 Developer Survey using Python, followed by insightful data visualizations created with Power BI.",
    image: "",
    category: "data-analytics",
    technologies: ["PowerBI", "Pandas", "matplotlib", "NumPy", "wordcloud", "Plotly"],
    liveUrl: "https://app.powerbi.com/groups/me/reports/5a6203df-bd75-4ae0-a822-bfc49f1904f4/ReportSection?experience=power-bi",
    githubUrl: "https://github.com/MaryamAli-2020/SO-survey-2022/tree/main"
  },
  {
    title: "Supermarket Sales EDA",
    description: "Analyzing a Supermarket Sales Dataset to uncover patterns and insights related to customer behavior, product popularity, and sales trends. ",
    image: "",
    category: "data-analytics",
    technologies: ["Python", "matplotlib", "seaborn", "Pandas", "NumPy", "Plotly", "Sklearn", "lightBGM" ],
    githubUrl: "https://github.com/MaryamAli-2020/SUPERMARKETSALES-EDA-ML"
  },
  {
    title: "Obesity Prediction using Deep Learning",
    description: "The high prevalence of obesity around the world has been a major concern globally! In this report will be creating a neural network algorithm that performs its best to detect the occurrence of obesity in humans as well as talk about its importance and how we can prevent it from happening with the help of our dataset.",
    image: "",
    category: "machine-learning",
    technologies: ["Pandas", "Sklearn", "NumPy", "Seaborn", "matplotlib", "Plotly", "tensorflow", ""],
    liveUrl: "https://nchr.elsevierpure.com/en/publications/using-deep-learning-to-predict-obesity-and-its-effect-on-human-ph",
    githubUrl: "https://github.com/MaryamAli-2020/Obesity-Prediction-using-DL"
  },
  {
    title: "Predictive Analytics for Employee Engagement and Retention",
    description: "The approach combines predictive analytics with sentiment analysis of employee feedback collected from platforms like X (formerly Twitter), Seek, and Trustpilot. This hybrid analysis provides both quantitative and qualitative perspectives on why employees choose to leave, offering IBM actionable insights to improve retention.",
    image: "",
    category: "machine-learning",
    technologies: ["XGBoost", "LightGBM", "KNN", "SVM", "Logistic Regression", "ANN", "Balanced Bagging Classifier", "SMOTE"],
    liveUrl: "https://predict-employee-retention.streamlit.app/",
    githubUrl: "https://github.com/MaryamAli-2020/Predictive-Analytics-for-Employee-Engagement-and-Retention"
  },
  {
    title: "Classifying IBM Transactions for Anti Money Laundering",
    description: "Explores using Graph Neural Networks (GAT, GraphSAGE, GCN) to detect money laundering in financial data, highlighting their strengths, limitations, and potential for fighting financial crime.",
    image: "",
    category: "machine-learning",
    technologies: ["GNN", "GAT", "GraphSAGE", "GCN", "Python"],
    githubUrl: "https://github.com/MaryamAli-2020/IBM-DATA-GRAPH/tree/master",
  },
];