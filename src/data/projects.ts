export type ProjectCategory = 'machine-learning' | 'data-analysis' | 'nlp' | 'web-development';

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
    title: "Sentiment Analysis for Product Reviews",
    description: "Built an NLP model to analyze customer sentiment in product reviews with 92% accuracy, helping businesses identify areas for improvement.",
    image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "nlp",
    technologies: ["Python", "BERT", "Scikit-Learn", "Pandas", "Flask"],
    liveUrl: "https://example.com/sentiment-demo",
    githubUrl: "https://github.com/emmadavis/sentiment-analysis"
  },
  {
    title: "COVID-19 Data Visualization Dashboard",
    description: "Designed an interactive dashboard to visualize global COVID-19 statistics, trends, and predictions using time-series forecasting.",
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "data-analysis",
    technologies: ["Python", "Plotly", "Dash", "Pandas", "Prophet"],
    liveUrl: "https://example.com/covid-dashboard",
    githubUrl: "https://github.com/emmadavis/covid-dashboard"
  },
  {
    title: "Image Classification for Medical Diagnostics",
    description: "Developed a convolutional neural network to classify medical images and assist in early disease detection with 89% accuracy.",
    image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "machine-learning",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
    githubUrl: "https://github.com/emmadavis/medical-image-classifier"
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
    title: "Personal Finance Tracker",
    description: "Built a web application that helps users track expenses, set budgets, and visualize spending patterns with interactive charts.",
    image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web-development",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "D3.js"],
    liveUrl: "https://example.com/finance-tracker",
    githubUrl: "https://github.com/emmadavis/finance-tracker"
  },
  {
    title: "Customer Churn Prediction",
    description: "Developed a predictive model to identify customers at risk of churning, allowing businesses to take proactive retention measures.",
    image: "https://images.pexels.com/photos/6476264/pexels-photo-6476264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "machine-learning",
    technologies: ["Python", "XGBoost", "Scikit-Learn", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/emmadavis/churn-prediction"
  }
];