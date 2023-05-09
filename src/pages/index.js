import Format from "../layout/format";

// Components
import Homepage from "../components/homepage";
import Paintings from "../components/paintings";
import Comissions from "../components/comissions";
import Notebooks from "../components/notebooks";
import Totebags from "../components/totebags";
import HeroAuthor from "../components/hero-author";
import Youtube from "../components/youtube";

export default function Home() {
  return (
    <Format className="scroll-smooth">
      <Homepage></Homepage>
      <Paintings></Paintings>
      <Comissions></Comissions>
      <Notebooks></Notebooks>
      <Totebags></Totebags>
      <Youtube></Youtube>
      <HeroAuthor></HeroAuthor>
    </Format>
  );
}
