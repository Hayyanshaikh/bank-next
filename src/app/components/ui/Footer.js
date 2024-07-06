"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/images/brands/logo.svg";
import Mail from "../../assets/images/icons/mail.svg";
import Phone from "../../assets/images/icons/phone.svg";
import Location from "../../assets/images/icons/loaction.svg";
import Facebook from "../../assets/images/icons/facebook.svg";
import Twitter from "../../assets/images/icons/twitter.svg";
import Linkedin from "../../assets/images/icons/linkedin.svg";

const Footer = () => {
  const navItems = [
    { href: "/", text: "Home" },
    { href: "/careers", text: "Careers" },
    { href: "/about", text: "About" },
    { href: "/security", text: "Security" },
  ];

  const contactData = [
    { src: Mail, alt: "mail", text: "hello@skillbirdge.com" },
    { src: Phone, alt: "phone", text: "+91 91813 23 2309" },
    { src: Location, alt: "location", text: "Somewhere in the World" },
  ];

  const socialIcons = [
    { icon: Facebook, alt: "Facebook", url: "https://facebook.com" },
    { icon: Twitter, alt: "Twitter", url: "https://twitter.com" },
    { icon: Linkedin, alt: "LinkedIn", url: "https://linkedin.com" },
  ];
  return (
    <footer className="pt-[60px] pb-[30px] bg-lighter-background">
      <div className="container">
        <div className="space-y-[40px]">
          <div className="flex flex-col gap-[40px] items-center">
            <Link href="/" className="logo h-auto w-[140px] flex">
              <Image
                src={Logo}
                alt="Picture of the author"
                className="object-contain h-full w-full"
              />
            </Link>
            <ul className="flex gap-[14px] items-center">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-[14px] lg:text-[16px]">{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-[20px] justify-center flex-wrap border-t border-light-background pt-[40px]">
            {contactData.map((contact, index) => (
              <div key={index} className="flex items-center gap-[6px]">
                <Image src={contact.src} alt={contact.alt} />
                <span className="text-[14px] lg:text-[16px]">{contact.text}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-light-background pt-[40px]">
            <div className="flex items-center gap-[20px] justify-between flex-col md:flex-row p-[30px] lg:p-[12px] lg:pr-[24px] rounded-[12px] md:rounded-full border border-light-background bg-background">
              <div className="flex flex-1 items-center gap-[8px] lg:mt-0 -mt-[52px]">
                {socialIcons.map((social, index) => (
                  <button
                    key={index}
                    className="h-[44px] w-[44px] bg-primary rounded-full flex items-center justify-center"
                  >
                    <Image
                      src={social.icon}
                      alt={`${social.alt} Icon`}
                      width={20}
                      height={20}
                    />
                  </button>
                ))}
              </div>
              <div className="flex flex-1 justify-center">
              	<p className="font-light text-color text-[14px]">YourBank All Rights Reserved</p>
              </div>
              <div className="flex justify-end flex-1">
              	<Link href="/" className="font-light text-color text-[14px] border-r-2 pr-2 mr-2 border-color leading-none">Privacy Policy</Link>
              	<Link href="/" className="font-light text-color text-[14px] leading-none">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
