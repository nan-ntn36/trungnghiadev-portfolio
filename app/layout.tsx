import type { Metadata } from "next";
import { Be_Vietnam_Pro, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { name, design, heroIntro } from "@/data/portfolio";
const sans = Be_Vietnam_Pro({variable:"--font-display",subsets:["latin","vietnamese"],weight:["400","500","600","700","800"],display:"swap"});
const mono = Roboto_Mono({variable:"--font-code",subsets:["latin","vietnamese"],weight:["400","500"],display:"swap"});
export const metadata: Metadata = {title:`${name} — ${design.heroRole}`,description:heroIntro,authors:[{name}],openGraph:{title:`${name} — ${design.heroRole}`,description:heroIntro,type:"website",locale:"vi_VN"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="vi" className={`${sans.variable} ${mono.variable}`}><body>{children}</body></html>;}
