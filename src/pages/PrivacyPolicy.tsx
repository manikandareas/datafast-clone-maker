import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, Database, Cookie, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: Database,
      title: "1. Information We Collect",
      content: "We collect information that you provide directly to us, including name, email address, and payment information. We also automatically collect certain information about your device when you use our service, including IP address, browser type, operating system, and analytics data about your website visitors."
    },
    {
      icon: Eye,
      title: "2. How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, respond to your comments and questions, and monitor and analyze trends, usage, and activities in connection with our services."
    },
    {
      icon: Lock,
      title: "3. Data Security",
      content: "We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. We use industry-standard encryption technologies when transferring and receiving data. However, no method of transmission over the Internet is 100% secure."
    },
    {
      icon: Cookie,
      title: "4. Cookies and Tracking",
      content: "We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
    },
    {
      icon: Database,
      title: "5. Data Retention",
      content: "We retain your personal information for as long as necessary to provide you with our services, comply with legal obligations, resolve disputes, and enforce our agreements. Analytics data is retained according to your subscription plan and can be deleted upon request."
    },
    {
      icon: Shield,
      title: "6. Your Data Rights",
      content: "You have the right to access, update, or delete your personal information at any time. You can also request a copy of your data or object to certain processing activities. To exercise these rights, please contact us at privacy@datafast.com. We will respond to your request within 30 days."
    },
    {
      icon: Mail,
      title: "7. Third-Party Services",
      content: "We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and customer service. These third parties are bound by confidentiality agreements and are prohibited from using your data for any other purpose."
    },
    {
      icon: Shield,
      title: "8. International Data Transfers",
      content: "Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. We ensure appropriate safeguards are in place for such transfers."
    },
    {
      icon: Lock,
      title: "9. Children's Privacy",
      content: "Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us and we will take steps to delete such information."
    },
    {
      icon: Database,
      title: "10. Changes to Privacy Policy",
      content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last updated' date. You are advised to review this Privacy Policy periodically for any changes."
    },
    {
      icon: Mail,
      title: "11. GDPR Compliance",
      content: "For users in the European Union, we comply with GDPR requirements. This includes your rights to access, rectification, erasure, restriction of processing, data portability, and objection. You also have the right to lodge a complaint with a supervisory authority."
    },
    {
      icon: Shield,
      title: "12. Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us at privacy@datafast.com or write to us at DataFast Privacy Team, 123 Analytics Street, San Francisco, CA 94102."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-sm z-10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Last updated: November 13, 2025
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction Card */}
        <Card className="p-6 mb-8 border-primary/20 bg-primary/5">
          <div className="flex gap-3">
            <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold mb-2">Your Privacy Matters</h2>
              <p className="text-sm text-muted-foreground">
                At DataFast, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our service. 
                Please read this policy carefully to understand our practices regarding your data.
              </p>
            </div>
          </div>
        </Card>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <IconComponent className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-8">
                  {section.content}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <Card className="p-6 mt-12 bg-muted/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold">Questions about your privacy?</p>
                <p className="text-sm text-muted-foreground">
                  We're here to help protect your data
                </p>
              </div>
            </div>
            <Button asChild>
              <a href="mailto:privacy@datafast.com">Contact Privacy Team</a>
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
