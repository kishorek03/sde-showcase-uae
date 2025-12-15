import { ExternalLink, Github, Zap, Brain, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Shop Transaction Management System",
    description: "Enterprise-grade transaction management platform with Spring Boot backend and React Native mobile app.",
    icon: Zap,
    featured: true,
    techStack: ["Java", "Spring Boot", "MySQL", "Docker", "CI/CD", "React Native"],
    highlights: [
      "Built 10+ RESTful APIs with ACID compliance",
      "Implemented secure transaction handling",
      "Reduced deployment time by 70% with Docker & CI/CD",
      "Optimized database queries for 30% faster data retrieval",
    ],
    metrics: [
      { label: "APIs Built", value: "10+" },
      { label: "Deployment Time", value: "-70%" },
      { label: "Query Speed", value: "+30%" },
    ],
  },
  {
    title: "Fake Product Review Detection System",
    description: "ML-powered system using NLP and Random Forest classification to detect fraudulent product reviews.",
    icon: Brain,
    featured: false,
    techStack: ["Java", "Python", "Django", "TensorFlow", "Scikit-learn", "NLP"],
    highlights: [
      "Achieved 91% accuracy with Random Forest classifier",
      "Built Django REST API for model integration",
      "Improved processing throughput by 40%",
      "Implemented sentiment analysis pipeline",
    ],
    metrics: [
      { label: "ML Accuracy", value: "91%" },
      { label: "Throughput", value: "+40%" },
    ],
  },
  {
    title: "Interactive Data Visualization Platform",
    description: "MERN stack dashboard with real-time analytics and dynamic filtering capabilities.",
    icon: BarChart3,
    featured: false,
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Chart.js"],
    highlights: [
      "Implemented 9+ dynamic filters for data exploration",
      "Reduced data load time by 35%",
      "Built responsive charts with real-time updates",
      "Created exportable report generation feature",
    ],
    metrics: [
      { label: "Dynamic Filters", value: "9+" },
      { label: "Load Time", value: "-35%" },
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating full-stack development, 
            machine learning, and system optimization skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`glass border-border/50 overflow-hidden group hover:glow transition-all duration-500 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Left: Project Info */}
                <div className="lg:col-span-3 p-6 md:p-8">
                  <CardHeader className="p-0 pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                          <project.icon className="text-primary" size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
                          {project.featured && (
                            <Badge className="mt-2 bg-primary/20 text-primary border-primary/30">
                              Featured Project
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0">
                    <CardDescription className="text-base mb-6">
                      {project.description}
                    </CardDescription>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-secondary/50 text-foreground border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">▹</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                {/* Right: Metrics */}
                <div className="lg:col-span-2 bg-gradient-to-br from-primary/10 to-accent/10 p-6 md:p-8 flex flex-col justify-center">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                    Key Metrics
                  </h4>
                  <div className="space-y-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-3xl md:text-4xl font-bold gradient-text">
                          {metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
