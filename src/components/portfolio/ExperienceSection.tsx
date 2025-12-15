import { Building2, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Software Developer",
    company: "ASKAN Technologies",
    location: "Chennai, India",
    period: "July 2024 - December 2024",
    description: "Contributed to backend development and system optimization for enterprise applications.",
    achievements: [
      "Developed and maintained RESTful APIs using Spring Boot",
      "Optimized database queries resulting in 30% faster data retrieval",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
      "Collaborated with cross-functional teams in Agile environment",
      "Participated in code reviews and maintained coding standards",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "Docker", "Git"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-accent" />
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-primary glow" />

              <Card className="glass border-border/50 group hover:glow transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">{exp.title}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <Building2 size={16} className="text-primary" />
                        <span className="text-muted-foreground">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar size={14} className="text-accent" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={14} className="text-accent" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">▹</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
