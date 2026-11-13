import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";import Hero from "@/components/Hero";import Expertise from "@/components/Expertise";import Projects from "@/components/Projects";import Experience from "@/components/Experience";import Contact from "@/components/Contact";import Footer from "@/components/Footer";import Motion from "@/components/Motion";import {LanguageProvider} from "@/components/LanguageProvider";
export default function Home(){return <LanguageProvider><Header/><main id="noi-dung" tabIndex={-1}><Hero/><Expertise/><Projects/><Experience/><Contact/></main><Footer/><Motion/><CustomCursor/></LanguageProvider>;}

