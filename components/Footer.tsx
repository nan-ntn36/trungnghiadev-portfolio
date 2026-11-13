"use client";
import {name,copyrightYear} from "@/data/portfolio";import {useLanguage} from "./LanguageProvider";
export default function Footer(){const {t}=useLanguage();return <footer className="footer container"><span>© {copyrightYear} {name}<span className="footer-note"> · {t.footer}</span></span><a href="#trang-chu">{t.backTop} ↑</a></footer>;}
