"use client";
import {useEffect} from "react";
import {useLanguage} from "./LanguageProvider";
export default function Motion(){
 const {language}=useLanguage();
 useEffect(()=>{
  let cancelled=false;let media:ReturnType<typeof import("gsap")["gsap"]["matchMedia"]>|undefined;let refreshFrame=0;let refresh=()=>{};let inspect:((event:Event)=>void)|undefined;
  async function setup(){try{
   const [{gsap},{ScrollTrigger}]=await Promise.all([import("gsap"),import("gsap/ScrollTrigger")]);if(cancelled)return;gsap.registerPlugin(ScrollTrigger);media=gsap.matchMedia();
   media.add({desktop:"(min-width: 1050px)",mobile:"(max-width: 1049px)",motion:"(prefers-reduced-motion: no-preference)",pointer:"(hover: hover) and (pointer: fine)"},context=>{
    if(!context.conditions?.motion)return;const desktop=Boolean(context.conditions.desktop);const intensity=desktop?1:.24;
    const hero=document.querySelector<HTMLElement>(".code-hero");const editor=document.querySelector<HTMLElement>(".editor-tilt");if(!hero||!editor)return;
    // Entrance and pointer transforms each own an inner wrapper; scroll owns the outer layer.
    const entrance=gsap.timeline({defaults:{duration:.55,ease:"power2.out"}});
    entrance.from(".editor-entrance",{y:18,z:-35,rotationX:3,clearProps:"transform"},0).from(".code-line",{x:7,stagger:.035,clearProps:"transform"},.08).from(".avatar-entrance",{y:12,scale:.94,clearProps:"transform"},.18).from(".hero-type-entrance",{y:12,clearProps:"transform"},.26);
    const timeline=gsap.timeline({defaults:{ease:"none"},scrollTrigger:{id:"hero-cinematic",trigger:hero,start:"top top",end:()=>`+=${hero.offsetHeight*.91}`,scrub:desktop?.65:.25,invalidateOnRefresh:true}});
    timeline.to(".depth-grid",{z:-160*intensity,y:90*intensity,scale:1.08,duration:1},0)
      .to(".hero-ambient",{z:-100*intensity,y:50*intensity,scale:1.2,duration:1},0)
      .to(".editor-scroll-layer",{z:85*intensity,scale:1+.05*intensity,rotationX:-3*intensity,y:25*intensity,duration:.42},.12)
      .to(".editor-scroll-layer",{z:-145*intensity,x:-90*intensity,y:60*intensity,rotationY:-7*intensity,rotationX:5*intensity,scale:1-.045*intensity,duration:.46},.54)
      .to(".avatar-scroll-layer",{z:60*intensity,y:95*intensity,x:55*intensity,rotationY:5*intensity,duration:.88},.12)
      .to(".hero-type-layer",{z:-60*intensity,y:125*intensity,duration:.8},.2).to(".scene-scroll",{z:-60*intensity,y:145*intensity,duration:.8},.2);
    const expertise=document.querySelector(".expertise-section");
    gsap.fromTo(".expertise-heading",{z:-100*intensity,y:35*intensity,rotationX:5*intensity},{z:0,y:0,rotationX:0,ease:"none",scrollTrigger:{id:"expertise-heading",trigger:expertise,start:"top bottom",end:"top 32%",scrub:.6}});
    gsap.utils.toArray<HTMLElement>(".expertise-card").forEach((card,i)=>{
     gsap.fromTo(card,{z:-(90+i*45)*intensity,y:(28+i*10)*intensity,rotationX:(5+i)*intensity},{z:0,y:0,rotationX:0,ease:"none",scrollTrigger:{id:`expertise-${i}`,trigger:card,start:"top 98%",end:"top 54%",scrub:.6}});
     gsap.fromTo(card,{"--underline":0},{"--underline":1,ease:"none",scrollTrigger:{trigger:card,start:"top 95%",end:"top 55%",scrub:true}});
    });
    gsap.utils.toArray<HTMLElement>(".project-concept").forEach((visual,i)=>{const art=visual.querySelector(".project-parallax");gsap.fromTo(art,{y:-20,z:-25,rotationX:2},{y:20,z:20,rotationX:-2,ease:"none",scrollTrigger:{id:`project-${i}`,trigger:visual,start:"top bottom",end:"bottom top",scrub:.8}});});
    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((node,i)=>gsap.fromTo(node,{y:22,z:-15},{y:0,z:0,duration:.7,ease:"power2.out",scrollTrigger:{id:`reveal-${i}`,trigger:node,start:"top 94%",once:true}}));
    const cleanup:(()=>void)[]=[];
    if(context.conditions.pointer){const surface=editor.closest<HTMLElement>(".editor-scroll-layer") || editor;const rx=gsap.quickTo(editor,"rotationX",{duration:.5,ease:"power3.out"});const ry=gsap.quickTo(editor,"rotationY",{duration:.5,ease:"power3.out"});const lift=gsap.quickTo(editor,"y",{duration:.5});const move=(event:PointerEvent)=>{const r=surface.getBoundingClientRect();const x=Math.max(-1,Math.min(1,(event.clientX-r.left)/r.width*2-1));const y=Math.max(-1,Math.min(1,(event.clientY-r.top)/r.height*2-1));rx(-y*4);ry(x*6);lift(-4);};const leave=()=>{rx(0);ry(0);lift(0);};surface.addEventListener("pointermove",move);surface.addEventListener("pointerleave",leave);cleanup.push(()=>{surface.removeEventListener("pointermove",move);surface.removeEventListener("pointerleave",leave);rx.tween.kill();ry.tween.kill();lift.tween.kill();});}
    return()=>cleanup.forEach(fn=>fn());
   });
   // Read-only event for browser QA; it does not alter animation state.
   inspect=(event:Event)=>{const report=(event as CustomEvent).detail;if(typeof report==="function")report(ScrollTrigger.getAll().map(trigger=>({id:trigger.vars.id||null,progress:trigger.progress})));};window.addEventListener("portfolio:inspect-motion",inspect);
   refresh=()=>{cancelAnimationFrame(refreshFrame);refreshFrame=requestAnimationFrame(()=>{if(!cancelled)ScrollTrigger.refresh();});};
   document.fonts.ready.then(()=>{if(!cancelled)refresh();});window.addEventListener("portfolio:layout",refresh);refresh();
  }catch(error){console.warn("Motion enhancement unavailable",error);}}
  setup();return()=>{cancelled=true;cancelAnimationFrame(refreshFrame);window.removeEventListener("portfolio:layout",refresh);if(inspect)window.removeEventListener("portfolio:inspect-motion",inspect);media?.revert();};
 },[language]);return null;
}




