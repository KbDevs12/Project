"use client";
import React from "react";
import { FacebookLogo, WhatsappLogo, X, GithubLogo } from "phosphor-react";

const Footer = () => {
  return (
    <div className="h-14 bg-slate-300	background-color: rgb(203 213 225); flex items-center justify-between px-4">
      <footer className="w-full flex justify-between items-center">
        <div>
          <p>© 2024. Your Company, Inc. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookLogo size={32} className="hover:text-gray-700" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <WhatsappLogo size={32} className="hover:text-gray-700" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <X size={32} className="hover:text-gray-700" />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <GithubLogo size={32} className="hover:text-gray-700" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
