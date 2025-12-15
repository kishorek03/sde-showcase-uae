import { useEffect, useRef, useState } from "react";
import { GraduationCap, Briefcase, Target, TrendingUp, Brain, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: 30, suffix: "%", label: "Data Retrieval Improvement", icon: TrendingUp },
  { value: 70, suffix: "%", label: "Deployment Time Reduction", icon: Zap },
  { value: 91, suffix: "%", label: "ML Model Accuracy", icon: Brain },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a dedicated Software Development Engineer with expertise in{" "}
              <span className="text-foreground font-medium">Java, Spring Boot, and React</span>.
              Passionate about building scalable backend systems and intuitive user interfaces
              that solve real-world problems.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 glass p-4 rounded-lg">
                <div className="p-2 rounded-lg bg-primary/20">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-sm text-muted-foreground">
                    B.E. Computer Science — Rajalakshmi Institute of Technology
                  </p>
                  <p className="text-sm text-muted-foreground">CGPA: 8.0/10</p>
                </div>
              </div>

              <div className="flex items-start gap-4 glass p-4 rounded-lg">
                <div className="p-2 rounded-lg bg-accent/20">
                  <Briefcase className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Software Developer at ASKAN Technologies
                  </p>
                  <p className="text-sm text-muted-foreground">6 months of professional experience</p>
                </div>
              </div>

              <div className="flex items-start gap-4 glass p-4 rounded-lg">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Target className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Goal</h4>
                  <p className="text-sm text-muted-foreground">
                    Seeking a challenging SDE role in UAE to leverage my full-stack expertise
                    and contribute to innovative projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="glass border-border/50 overflow-hidden group hover:glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="text-primary" size={32} />
                    </div>
                    <div>
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      <p className="text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
