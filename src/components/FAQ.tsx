import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Starter or Growth?",
      answer: "Choose Starter if you're just beginning or have a smaller project with up to 10k monthly events and 1 website. Growth is perfect for scaling businesses that need to track multiple websites (up to 30) with higher traffic volumes and advanced features like attribution tracking."
    },
    {
      question: "10k, 100k, 1M+ events per month?",
      answer: "An event is any tracked action on your website - page views, clicks, form submissions, etc. Use our slider above to estimate your monthly events based on your traffic. Most small sites use 10-50k events, medium sites 100-500k, and high-traffic sites 1M+."
    },
    {
      question: "What happens if I get more events than my plan?",
      answer: "We'll notify you when you're approaching your limit. You can easily upgrade to a higher tier at any time. We never stop tracking your data - you'll just need to upgrade before the next billing cycle to continue accessing full features."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You'll only be charged if you decide to continue after the trial period."
    },
    {
      question: "Is DataFast GDPR compliant?",
      answer: "Absolutely. DataFast is fully GDPR compliant. We respect user privacy, don't use cookies without consent, and provide all necessary tools for data deletion and export requests. All data is encrypted and securely stored."
    },
    {
      question: "Do I need to make money to use DataFast?",
      answer: "No, DataFast is perfect for projects at any stage - from side projects and MVPs to profitable businesses. Our affordable plans make professional analytics accessible whether you're pre-revenue or scaling fast."
    },
    {
      question: "Do I need to code to use DataFast?",
      answer: "Minimal coding required. Just add a simple tracking snippet to your website (similar to Google Analytics). After that, everything is managed through our intuitive dashboard - no coding needed for setup, reports, or insights."
    },
    {
      question: "Can I migrate my existing data?",
      answer: "Yes, we support data migration from most major analytics platforms including Google Analytics. Our team can help you import your historical data so you don't lose your tracking history when switching to DataFast."
    },
    {
      question: "Can I see SEO keywords that drive traffic to my website?",
      answer: "Yes! DataFast tracks referral sources and search terms that drive traffic to your site. You'll see which keywords, campaigns, and sources are bringing in visitors, helping you optimize your SEO and marketing efforts."
    },
    {
      question: "Which payment providers are supported?",
      answer: "We support all major payment methods through Stripe, including credit cards, debit cards, and digital wallets. We accept Visa, Mastercard, American Express, and more. All payments are secure and encrypted."
    },
    {
      question: "Does DataFast track across subdomains?",
      answer: "Yes, DataFast can track users seamlessly across all your subdomains (e.g., app.yourdomain.com, blog.yourdomain.com). This gives you a complete view of the user journey across your entire web presence."
    },
    {
      question: "Does DataFast track across different domains?",
      answer: "Yes, with our Growth plan, you can track users across multiple domains. This is perfect if you have separate websites that are part of the same customer journey or business ecosystem."
    },
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          FAQ
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border/50 rounded-lg px-6 bg-card/30"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
