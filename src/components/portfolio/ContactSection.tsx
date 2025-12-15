import { Mail, Phone, Linkedin, MapPin, Calendar, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "faizeenjabbar80@gmail.com",
    href: "mailto:faizeenjabbar80@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8610012287",
    href: "tel:+918610012287",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Mohamed Faizeen J",
    href: "https://www.linkedin.com/in/mohamed-faizeen-j/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sharjah, UAE",
    href: null,
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm actively looking for SDE opportunities in UAE. Let's connect and discuss how I can contribute to your team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Availability Banner */}
          <Card className="glass border-primary/30 mb-8 glow">
            <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-green-500/20">
                  <Calendar className="text-green-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Available Immediately</h3>
                  <p className="text-sm text-muted-foreground">Ready to join and contribute from day one</p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground">Employment Visa Status</p>
                <p className="font-semibold text-green-500">Valid UAE Employment Visa</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <Card
                key={contact.label}
                className="glass border-border/50 group hover:glow transition-all duration-300"
              >
                <CardContent className="p-6">
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                        <contact.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                        <contact.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="font-medium">{contact.value}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow">
              <a href="mailto:faizeenjabbar80@gmail.com">
                <Send className="mr-2" size={18} />
                Send Me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
