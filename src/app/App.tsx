import { ObsidianHero } from "./components/ObsidianHero";
import { CollectionsSection } from "./components/CollectionsSection";
import { Lookbook } from "./components/Lookbook";
import { Manifesto } from "./components/Manifesto";
import { LimitedRelease } from "./components/LimitedRelease";
import { ObsidianFooter } from "./components/ObsidianFooter";

export default function App() {
  return (
    <div className="relative">
      <ObsidianHero />
      <CollectionsSection />
      <Lookbook />
      <Manifesto />
      <LimitedRelease />
      <ObsidianFooter />
    </div>
  );
}
