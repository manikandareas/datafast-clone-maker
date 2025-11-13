import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Scale, FileText, Shield, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using DataFast, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "2. Use License",
      content: "Permission is granted to temporarily access DataFast for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose; attempt to decompile or reverse engineer any software contained on DataFast; remove any copyright or other proprietary notations from the materials."
    },
    {
      title: "3. Service Description",
      content: "DataFast provides web analytics and marketing intelligence services. We reserve the right to modify or discontinue the service at any time without notice. We shall not be liable to you or any third party should we exercise our right to modify or discontinue the service."
    },
    {
      title: "4. User Accounts",
      content: "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of any breach of security or unauthorized use of your account."
    },
    {
      title: "5. Data Collection and Usage",
      content: "By using our service, you consent to the collection and use of information in accordance with our Privacy Policy. We collect analytics data to provide you with insights about your website traffic and user behavior."
    },
    {
      title: "6. Payment Terms",
      content: "Certain aspects of DataFast may be provided for a fee. You agree to pay all fees and charges incurred in connection with your account. All fees are non-refundable unless otherwise stated. We reserve the right to change our pricing at any time."
    },
    {
      title: "7. Intellectual Property",
      content: "The service and its original content, features, and functionality are and will remain the exclusive property of DataFast. The service is protected by copyright, trademark, and other laws."
    },
    {
      title: "8. Limitation of Liability",
      content: "In no event shall DataFast, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
    },
    {
      title: "9. Termination",
      content: "We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms."
    },
    {
      title: "10. Changes to Terms",
      content: "We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion."
    },
    {
      title: "11. Governing Law",
      content: "These Terms shall be governed and construed in accordance with applicable laws, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights."
    },
    {
      title: "12. Contact Information",
      content: "If you have any questions about these Terms, please contact us at legal@datafast.com"
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
              <Scale className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Terms of Service</h1>
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
            <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold mb-2">Important Notice</h2>
              <p className="text-sm text-muted-foreground">
                Please read these terms of service carefully before using DataFast. 
                By accessing or using our service, you agree to be bound by these terms. 
                If you disagree with any part of the terms, you may not access the service.
              </p>
            </div>
          </div>
        </Card>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-3 mb-3">
                <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-8">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <Card className="p-6 mt-12 bg-muted/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold">Questions about our terms?</p>
                <p className="text-sm text-muted-foreground">
                  We're here to help
                </p>
              </div>
            </div>
            <Button asChild>
              <a href="mailto:legal@datafast.com">Contact Legal Team</a>
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default TermsOfService;
