import { Code2, Database, Layout, Brain, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Backend",
    icon: Code2,
    color: "primary",
    skills: ["Java", "Spring Boot", "Django", "RESTful APIs", "Microservices"],
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "accent",
    skills: ["React", "HTML5", "CSS3", "JavaScript", "React Native"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "primary",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
  },
  {
    title: "AI/ML",
    icon: Brain,
    color: "accent",
    skills: ["TensorFlow", "Scikit-learn", "NLP", "Random Forest", "Data Analysis"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "primary",
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Linux", "AWS"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="glass border-border/50 group hover:glow transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl bg-${category.color}/20 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`text-${category.color}`} size={24} />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary/50 text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
