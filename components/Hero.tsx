"use client";
import Image from "next/image";
import {name,jobTitle,portrait} from "@/data/portfolio";
import {useLanguage} from "./LanguageProvider";
import CodeEditor from "./CodeEditor";
import ScrollIndicator from "./ScrollIndicator";
export default function Hero(){const {t}=useLanguage();return <section id="trang-chu" className="hero code-hero"><div className="hero-grid depth-grid" aria-hidden="true"/><div className="hero-ambient" aria-hidden="true"/><div className="hero-scene"><CodeEditor/><div className="avatar-scroll-layer"><div className="avatar-entrance"><div className="avatar-frame"><Image src={portrait} alt={t.avatarAlt} fill priority sizes="240px" style={{objectFit:"cover",objectPosition:"50% 22%"}}/></div></div></div><div className="hero-type-layer"><div className="hero-type-entrance"><p className="hero-greeting">{t.greeting}</p><h1>{name}</h1><p className="hero-role">{jobTitle}<span aria-hidden="true">_</span></p></div></div><ScrollIndicator/></div></section>;}


