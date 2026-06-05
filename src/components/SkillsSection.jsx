import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Azure Cloud
  { name: "Azure Data Factory", category: "azure", level: 95 },
  { name: "Azure Databricks", category: "azure", level: 90 },
  { name: "Azure Synapse Analytics", category: "azure", level: 85 },
  { name: "ADLS Gen2", category: "azure", level: 90 },
  { name: "Azure Event Hubs", category: "azure", level: 88 },
  { name: "Azure Key Vault", category: "azure", level: 85 },
  { name: "Azure Monitor", category: "azure", level: 85 },
  { name: "Entra ID", category: "azure", level: 80 },

  // Big Data & Processing
  { name: "PySpark", category: "bigdata", level: 92 },
  { name: "Spark SQL", category: "bigdata", level: 90 },
  { name: "Delta Lake", category: "bigdata", level: 90 },
  { name: "Medallion Architecture", category: "bigdata", level: 92 },
  { name: "ETL/ELT Pipelines", category: "bigdata", level: 95 },
  { name: "Batch Processing", category: "bigdata", level: 90 },
  { name: "Event-Driven Ingestion", category: "bigdata", level: 88 },

  // Machine Learning
  { name: "Scikit-learn", category: "ml", level: 85 },
  { name: "XGBoost", category: "ml", level: 85 },
  { name: "Feature Engineering", category: "ml", level: 88 },
  { name: "Model Evaluation", category: "ml", level: 85 },
  { name: "Random Forest", category: "ml", level: 82 },
  { name: "Gradient Boosting", category: "ml", level: 80 },

  // Deep Learning
  { name: "PyTorch", category: "dl", level: 85 },
  { name: "CNNs", category: "dl", level: 85 },
  { name: "RNNs/LSTMs", category: "dl", level: 85 },
  { name: "ANNs", category: "dl", level: 82 },
  { name: "NLP Preprocessing", category: "dl", level: 80 },
  { name: "TF-IDF", category: "dl", level: 80 },

  // Programming & Tools
  { name: "Python", category: "tools", level: 92 },
  { name: "SQL", category: "tools", level: 90 },
  { name: "Git/GitHub", category: "tools", level: 85 },
  { name: "Jira", category: "tools", level: 85 },
  { name: "Agile/Scrum", category: "tools", level: 85 },

  // Data Engineering
  { name: "Data Quality", category: "engineering", level: 90 },
  { name: "Metadata-Driven Pipelines", category: "engineering", level: 92 },
  { name: "Incremental Loads", category: "engineering", level: 90 },
  { name: "OPENROWSET/Serverless SQL", category: "engineering", level: 85 },
  { name: "Monitoring & Logging", category: "engineering", level: 88 },
  { name: "Data Validation", category: "engineering", level: 90 },
];

const categories = ["all", "azure", "bigdata", "ml", "dl", "engineering", "tools"];

const categoryLabels = {
  all: "All Skills",
  azure: "☁️ Azure Cloud",
  bigdata: "⚡ Big Data",
  ml: "🤖 Machine Learning",
  dl: "🧠 Deep Learning",
  engineering: "🛠️ Data Engineering",
  tools: "🔧 Tools & Languages",
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const getCategoryColor = (category) => {
    const colors = {
      azure: "from-blue-500/20 to-cyan-500/20",
      bigdata: "from-yellow-500/20 to-orange-500/20",
      ml: "from-purple-500/20 to-pink-500/20",
      dl: "from-indigo-500/20 to-purple-500/20",
      engineering: "from-green-500/20 to-emerald-500/20",
      tools: "from-slate-500/20 to-gray-500/20",
    };
    return colors[category] || "from-gray-500/20 to-slate-500/20";
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-primary"> Technical Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-stack data engineering & ML/DL capabilities across Azure cloud, big data technologies, and machine learning frameworks
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300 font-medium capitalize text-sm md:text-base",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50 scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
              )}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className={cn(
                "group relative overflow-hidden bg-gradient-to-br rounded-xl p-5 transition-all duration-500",
                "hover:shadow-xl hover:scale-105 border border-transparent hover:border-primary/50",
                getCategoryColor(skill.category),
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-bold text-primary bg-primary/20 px-2 py-1 rounded-full">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="w-full bg-secondary/40 h-2.5 rounded-full overflow-hidden border border-primary/20">
                  <div
                    className="bg-gradient-to-r from-primary to-primary/60 h-full rounded-full origin-left transition-all duration-700 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animation: `slideIn 1s ease-out`,
                    }}
                  />
                </div>

                <div className="mt-2 flex justify-between">
                  <span className="text-xs text-muted-foreground">Proficiency</span>
                  <span className="text-xs text-primary font-semibold">
                    {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Intermediate"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes slideIn {
            from {
              width: 0;
            }
          }
        `}</style>
      </div>
    </section>
  );
};
