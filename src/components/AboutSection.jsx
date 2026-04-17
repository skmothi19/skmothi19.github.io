import { Briefcase, Code, User, FileDown, FileText } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Data Engineer | Hyderabad, India
            </h3>

            <p className="text-muted-foreground">
              Data Engineer with 1+ year of full-time experience building scalable, production-grade ETL/ELT data pipelines on the Azure cloud platform. Currently at <strong>Interstate</strong> (Apr 2025 – Present), where I design parameterized ADF pipelines, architect metadata-driven frameworks, and implement Medallion architecture with Delta Lake, processing millions of records daily.
            </p>

            <p className="text-muted-foreground">
              <strong>Key Achievements:</strong> Reduced manual ingestion by ~40% through reusable pipeline templates • Built metadata-driven frameworks enabling 5+ new datasets with ~30% faster development • Implemented event-driven ingestion via Azure Event Hubs, reducing data latency to under 5 minutes • Achieved 99%+ SLA adherence on critical trading pipelines • Delivered curated datasets via Synapse Serverless SQL supporting BI, analytics, and risk teams
            </p>

            <p className="text-muted-foreground">
              Proficient in <strong>Python, SQL, PySpark, Azure Data Factory, Azure Databricks, Delta Lake, ADLS Gen2, Synapse Analytics, and Azure Event Hubs</strong>. Expert in implementing secure data pipelines with Entra ID, Managed Identities, and Azure Key Vault. Experienced in Agile/Scrum workflows, Git, and monitoring production systems with Azure Monitor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
              <a 
                href="/resume.pdf" 
                download="Shaik_Mothi_Basha_Resume.pdf"
                className="cosmic-button flex items-center justify-center gap-2"
              >
                <FileDown className="h-5 w-5" />
                Download Resume
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cosmic-button flex items-center justify-center gap-2"
              >
                <FileText className="h-5 w-5" />
                View Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">ETL/ELT Pipeline Architecture</h4>
                  <p className="text-muted-foreground">
                    Designing metadata-driven, scalable data pipelines using Azure Data Factory
                    and implementing Medallion architecture with Delta Lake.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Transformation & Quality</h4>
                  <p className="text-muted-foreground">
                    Building PySpark transformations in Azure Databricks to cleanse, validate,
                    and enrich data while ensuring consistency and analytics readiness.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover curve-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud Data Solutions</h4>
                  <p className="text-muted-foreground">
                    Implementing secure, event-driven data ingestion with Azure Event Hubs and
                    managing production monitoring with Azure Monitor & Log Analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
