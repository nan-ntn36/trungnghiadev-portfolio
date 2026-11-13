"use client";
import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { Language, translations, name } from "@/data/portfolio";
const LanguageContext=createContext<{language:Language;setLanguage:(language:Language)=>void}>({language:"vi",setLanguage:()=>{}});
let memoryLanguage:Language="vi";
function snapshot():Language{try{return localStorage.getItem("portfolio-language")==="en"?"en":"vi";}catch{return memoryLanguage;}}
function subscribe(notify:()=>void){window.addEventListener("storage",notify);window.addEventListener("portfolio:language",notify);return()=>{window.removeEventListener("storage",notify);window.removeEventListener("portfolio:language",notify);};}
export function LanguageProvider({children}:{children:React.ReactNode}){
 const language=useSyncExternalStore(subscribe,snapshot,():Language=>"vi");
 useEffect(()=>{document.documentElement.lang=language;document.title=`${name} — ${translations[language].role}`;document.querySelector('meta[name="description"]')?.setAttribute("content",translations[language].intro);document.querySelector('meta[property="og:description"]')?.setAttribute("content",translations[language].intro);document.querySelector('meta[property="og:title"]')?.setAttribute("content",document.title);document.querySelector('meta[property="og:locale"]')?.setAttribute("content",language==="vi"?"vi_VN":"en_US");},[language]);
 const change=(value:Language)=>{memoryLanguage=value;try{localStorage.setItem("portfolio-language",value);}catch{}window.dispatchEvent(new Event("portfolio:language"));};
 return <LanguageContext.Provider value={{language,setLanguage:change}}>{children}</LanguageContext.Provider>;
}
export function useLanguage(){const context=useContext(LanguageContext);return {...context,t:translations[context.language]};}
