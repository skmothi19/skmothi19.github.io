import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Azure Medallion Data Pipeline",
    description: "End-to-end production data pipeline ingesting real-time stock market data via REST APIs into ADLS Gen2. Implemented Medallion architecture with PySpark transformations across Bronze→Silver→Gold layers, Delta Lake MERGE for incremental upserts, and Synapse Serverless SQL views for analytics.",
    image: "/projects/Azure.png",
    tags: ["Azure Data Factory", "PySpark", "Delta Lake", "Databricks", "ADLS Gen2", "Synapse"],
    demoUrl: "#",
    githubUrl: "https://github.com/skmothi19/azure-medallion-data-pipeline",
  },
  {
    id: 2,
    title: "Customer Churn Prediction",
    description: "End-to-end ML pipeline predicting customer churn on telecom dataset. Includes EDA, feature engineering, class imbalance handling with SMOTE, model comparison (Logistic Regression, Random Forest, XGBoost). Achieved 87%+ ROC-AUC with hyperparameter tuning and feature importance visualization.",
    image: "/projects/ml-churn.png",
    tags: ["Python", "XGBoost", "Scikit-learn", "Pandas", "SMOTE", "Model Evaluation"],
    demoUrl: "#",
    githubUrl: "https://github.com/skmothi19/customer-churn-prediction",
  },
  {
    id: 3,
    title: "RNN Sentiment Analysis",
    description: "LSTM-based RNN for sequence sentiment classification. Built complete NLP preprocessing pipeline with stopword removal, stemming, TF-IDF vectorization. Implemented custom PyTorch DataLoaders for efficient batch training on text sequences.",
    image: "/projects/rnn-sentiment.png",
    tags: ["PyTorch", "LSTM", "RNN", "NLP", "TF-IDF", "NLTK"],
    demoUrl: "#",
    githubUrl: "https://github.com/skmothi19/rnn-sentiment-analysis",
  },
  {
    id: 4,
    title: "CNN Image Classifier",
    description: "Deep learning CNN for image classification using convolution, pooling, and fully-connected layers. Implemented model checkpointing to save and restore best-performing weights. Optimized for accuracy and inference speed.",
    image: "/projects/cnn-classifier.png",
    tags: ["PyTorch", "CNN", "Computer Vision", "Model Checkpointing", "Deep Learning"],
    demoUrl: "#",
    githubUrl: "https://github.com/skmothi19/cnn-image-classifier",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-gradient-to-br from-card to-card/80 rounded-lg overflow-hidden shadow-lg card-hover border border-primary/10 hover:border-primary/40 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-semibold border rounded-full bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 text-xs font-semibold border rounded-full bg-secondary text-secondary-foreground border-secondary/50">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors"> {project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-primary/10">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/70 hover:text-primary transition-colors duration-300 p-2 hover:bg-primary/10 rounded-lg"
                      title="View Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/70 hover:text-primary transition-colors duration-300 p-2 hover:bg-primary/10 rounded-lg"
                      title="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                  <span className="text-xs text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                    View Project
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/skmothi19"
          >
            Check My Github <ArrowRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
};
