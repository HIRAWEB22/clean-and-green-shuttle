
"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import SocialLinks from "@/components/social-links";
import { Mail, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/home/animated-section";

// footer_content
const footer_content = {
  title: "Ride Green. Ride Smart. The future of campus mobility.",
  description:
    "Our team is dedicated to providing a seamless, reliable, and sustainable transportation solution for the campus community.",
  phone: "+1 (234) 567-890",
  contact_mail: "support@cleanandgreen.edu",

  copy_right: (
    <>
      Powered By : <Link href="/"> Clean & Green </Link> –{" "}
      {new Date().getFullYear()}
    </>
  ),

  footer_links: [
    {
      id: 1,
      title: "Our Fleet",
      links: [
        { name: "Main Campus Loop", link: "/fleet/campus-loop" },
        { name: "Islamabad City Connect", link: "/fleet/city-connect" },
      ],
    },
    {
      id: 2,
      title: "Other Pages",
      links: [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Track", link: "/track" },
        { name: "Sustainability", link: "/sustainability" },
        { name: "Feedback", link: "/feedback" },
        { name: "Admin", link: "/admin" },
      ],
    },
  ],
};
const { title, description, phone, contact_mail, copy_right, footer_links } =
  footer_content;


export function Footer() {
  return (
    <footer>
      <div
        className="text-primary-foreground overflow-hidden"
        style={{ backgroundColor: 'hsl(228, 44%, 7%)' }}
      >
        <div className="py-8">
          <div className="pb-4 mb-4 border-b border-white/10">
            <div className="container text-center">
              <span className="text-2xl font-bold">{title}</span>
            </div>
          </div>

          <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedSection as="div">
              <div className="tp-footer__widget">
                <Link href="/" className="tp-footer__widget-logo mb-4 flex items-center gap-2">
                  <Image
                    src="/logos/main-logo.png"
                    alt="Clean and Green Logo"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover shadow-md border-2 border-primary/50"
                  />
                  <span className="text-lg font-bold text-white">Clean & Green</span>
                </Link>
                <div className="tp-footer__text">
                  <p className="text-white/70">{description}</p>
                </div>
                <div className="tp-footer__social mt-4">
                  <SocialLinks />
                </div>
              </div>
            </AnimatedSection>

            {footer_links.map((item, i) => (
              <AnimatedSection
                as="div"
                key={item.id}
                style={{animationDelay: `${i * 0.15}s`}}
              >
                <div className={`tp-footer__widget`}>
                  <h4 className="tp-footer__widget-title font-bold mb-4 text-lg text-white">
                    {item.title}
                  </h4>
                  <div className="tp-footer__content">
                    <ul className="space-y-2">
                      {item.links.map((link, i) => (
                        <li key={i}>
                          <Link
                            href={link.link}
                            className="text-white/70 hover:text-white transition-colors"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            <AnimatedSection as="div" style={{animationDelay: `0.3s`}}>
              <div className="tp-footer__widget">
                <h4 className="tp-footer__widget-title font-bold mb-4 text-lg text-white">
                  Contact Us
                </h4>
                <div className="tp-footer__contact-info tp-footer__icon-space">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-primary">
                        <Phone className="h-5 w-5" />
                      </span>
                      <Link
                        href={`tel:${phone}`}
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        {phone}
                      </Link>
                    </li>
                    <li className="flex items-center gap-3">
                       <span className="text-primary">
                         <Mail className="h-5 w-5" />
                       </span>
                      <Link
                        href={`mailto:${contact_mail}`}
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        {contact_mail}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10">
            <div className="container grid grid-cols-1">
              <div
                className="col-md-12 text-center"
              >
                <div className="tp-copyright__text text-white/50 text-sm">
                  <span>{copy_right}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
