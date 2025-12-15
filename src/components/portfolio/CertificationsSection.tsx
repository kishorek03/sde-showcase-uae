import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    title: "Full Stack Developer Certification",
    issuer: "Udemy",
    icon: "🎓",
  },
  {
    title: "Machine Learning Certification",
    issuer: "Microsoft",
    icon: "🤖",
  },
  {
    title: "AI Build Model Certification",
    issuer: "Microsoft",
    icon: "🧠",
  },
];

export const CertificationsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={cert.title}
              className="glass border-border/50 group hover:glow transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
