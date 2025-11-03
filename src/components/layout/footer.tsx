
"use client";

import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import SocialLinks from "@/components/social-links";
import ContactIcon from "@/svg/contact-icon";
import EmailIcon from "@/svg/email";
import PhoneIcon from "@/svg/phone-icon";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { MoveRight } from "lucide-react";

// footer_content
const footer_content = {
  title: <>Ride Green. Ride Smart. The future of campus mobility.</>,
  description: (
    <>
      Our team is dedicated to providing a seamless, reliable, and sustainable
      transportation solution for the campus community.
    </>
  ),
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
      cls_1: "col-xl-3 col-lg-3 col-md-5",
      cls_2: "footer-col-2",
      title: "Our Fleet",
      delay: ".7s",
      links: [
        { name: "Main Campus Loop", link: "/fleet/campus-loop" },
        { name: "Islamabad City Connect", link: "/fleet/city-connect" },
      ],
    },
    {
      id: 2,
      cls_1: "col-xl-2 col-lg-2 col-md-6",
      cls_2: "footer-col-3",
      title: "Other Pages",
      delay: ".9s",
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
    <footer className="pb-12 fix bg-background text-foreground">
      <div className="tp-footer__pl-pr p-relative container">
        <div className="footer-black-bg tp-gsap-bg bg-card border-t"></div>
        <div className="tp-footer__area pt-20">
          <div className="container">
            <div className="tp-footer__border-bottom pb-6 mb-6 border-b">
              <div className="row align-items-center">
                <div
                  className="col-md-8 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  <div className="tp-footer__top-text">
                    <span className="text-2xl font-bold">{title}</span>
                  </div>
                </div>
                <div
                  className="col-md-4 wow tpfadeUp text-right"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  <Link
                    href="/track"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Track a Shuttle <MoveRight />
                  </Link>
                </div>
              </div>
            </div>

            <div className="tp-footer__top-space">
              <div className="row">
                <div
                  className="col-xl-4 col-lg-4 col-md-7 pb-8 wow tpfadeUp"
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
                      <span className="text-lg font-bold">Clean & Green</span>
                    </Link>
                    <div className="tp-footer__text">
                      <p className="text-muted-foreground">{description}</p>
                    </div>
                    <div className="tp-footer__social mt-4">
                      <SocialLinks />
                    </div>
                  </div>
                </div>

                {footer_links.map((item, i) => (
                  <div
                    key={i}
                    className={`${item.cls_1} pb-8 wow tpfadeUp`}
                    data-wow-duration=".9s"
                    data-wow-delay={item.delay}
                  >
                    <div className={`tp-footer__widget ${item.cls_2}`}>
                      <h4 className="tp-footer__widget-title font-bold mb-4 text-lg">
                        {item.title}
                      </h4>
                      <div className="tp-footer__content">
                        <ul className="space-y-2">
                          {item.links.map((link, i) => (
                            <li key={i}>
                              <Link
                                href={link.link}
                                className="text-muted-foreground hover:text-primary transition-colors"
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
                  className="col-xl-3 col-lg-3 col-md-6 pb-8 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay="1s"
                >
                  <div className="tp-footer__widget footer-col-4">
                    <h4 className="tp-footer__widget-title font-bold mb-4 text-lg">
                      Contact Us
                    </h4>
                    <div className="tp-footer__contact-info tp-footer__icon-space">
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <span className="text-primary">
                            <PhoneIcon />
                          </span>
                          <Link
                            href={`tel:${phone}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {phone}
                          </Link>
                        </li>
                        <li className="flex items-center gap-3">
                           <span className="text-primary">
                             <EmailIcon />
                           </span>
                          <Link
                            href={`mailto:${contact_mail}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
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
        <div className="tp-copyright__area pt-6 mt-6 border-t border-muted/20">
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
