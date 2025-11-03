
"use client";

import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import SocialLinks from "@/components/social-links";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { Mail, Phone } from "lucide-react";

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
  useIsomorphicLayoutEffect(() => {
    gsap.set(".tp-gsap-bg", { scaleX: 1 });
    let mm = gsap.matchMedia();
    mm.add("(min-width:1400px)", () => {
      gsap.to(".tp-gsap-bg", {
        scrollTrigger: {
          trigger: ".tp-gsap-bg",
          scrub: 0.02,
          start: "top bottom",
          end: "bottom bottom",
        },
        scaleX: 0.95,
        borderRadius: "30px",
        transformOrigin: "center center",
        ease: "none",
      });
    });
  }, []);

  return (
    <footer className="pb-12 bg-background text-foreground">
      <div className="tp-footer__pl-pr p-relative container">
        <div className="footer-black-bg tp-gsap-bg bg-card border-t" style={{
            backgroundColor: 'hsl(228, 44%, 7%)', 
            color: 'hsl(210, 40%, 98%)',
            borderTopLeftRadius: '30px',
            borderTopRightRadius: '30px',
            borderBottomLeftRadius: '30px',
            borderBottomRightRadius: '30px'
        }}></div>
        <div className="tp-footer__area pt-20" style={{color: 'hsl(210, 40%, 98%)'}}>
          <div className="container">
            <div className="tp-footer__border-bottom pb-6 mb-6 border-b border-white/10">
              <div className="row align-items-center">
                <div
                  className="col-md-12 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  <div className="tp-footer__top-text">
                    <span className="text-2xl font-bold">{title}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tp-footer__top-space">
              <div className="row">
                <div
                  className="col-xl-4 col-lg-4 col-md-6 pb-8 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  <div className="tp-footer__widget footer-col-1">
                    <Link href="/" className="tp-footer__widget-logo mb-4 flex items-center gap-2">
                       <Image
                        src="/logos/main-logo.png"
                        alt="Clean and Green Logo"
                        width={48}
                        height={48}
                        className="rounded-full bg-white p-1"
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
                </div>

                {footer_links.map((item, i) => (
                  <div
                    key={i}
                    className="col-xl-2 col-lg-2 col-md-3 pb-8 wow tpfadeUp"
                    data-wow-duration=".9s"
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
                  </div>
                ))}

                <div
                  className="col-xl-4 col-lg-4 col-md-6 pb-8 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay="1s"
                >
                  <div className="tp-footer__widget footer-col-4">
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
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="tp-copyright__area pt-6 mt-6">
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-md-12 wow tpfadeUp text-center"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                >
                  <div className="tp-copyright__text text-muted-foreground text-sm">
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

    