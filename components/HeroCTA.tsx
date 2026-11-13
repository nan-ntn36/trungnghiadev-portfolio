import { ui } from "@/data/portfolio";
export default function HeroCTA() {
  return <div className="hero-actions"><a className="button primary" href="#du-an">{ui.heroCta1}<span aria-hidden="true">↗</span></a><a className="text-link" href="#lien-he">{ui.heroCta2}<span aria-hidden="true">↗</span></a></div>;
}
