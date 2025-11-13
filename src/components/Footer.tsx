import { 
  LogIn, 
  DollarSign, 
  FileText, 
  BookOpen, 
  Handshake,
  Scale,
  Shield,
  Twitter,
  Github,
  Linkedin
} from "lucide-react";
import { FooterUI } from "@/components/ui/footer";

export const Footer = () => {
  return (
    <FooterUI
      brand={{
        name: "DataFast",
        description: "DataFast is the best web analytics tool to discover which marketing channels drive revenue and grow your business, fast.",
      }}
      socialLinks={[
        {
          name: "Twitter",
          href: "#",
        },
        {
          name: "Github",
          href: "#",
        },
        {
          name: "LinkedIn",
          href: "#",
        },
      ]}
      columns={[
        {
          title: "Product",
          links: [
            {
              name: "Log in",
              Icon: LogIn,
              href: "#",
            },
            {
              name: "Pricing",
              Icon: DollarSign,
              href: "#pricing",
            },
            {
              name: "Changelog",
              Icon: FileText,
              href: "#changelog",
            },
            {
              name: "Documentation",
              Icon: BookOpen,
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          links: [
            {
              name: "Affiliate Program",
              Icon: Handshake,
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          links: [
            {
              name: "Terms of Service",
              Icon: Scale,
              href: "/terms",
            },
            {
              name: "Privacy Policy",
              Icon: Shield,
              href: "/privacy",
            },
          ],
        },
      ]}
      copyright="DataFast © 2025 - All rights reserved. Made with ☕ and 🧡 by Marc"
    />
  );
};
