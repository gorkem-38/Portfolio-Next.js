import Header from "./header";
import SectionName from "./sectionName";
import SectionLink from "./sectionLink";
import SectionLandingPage from "./sectionLandingPage";
import SectionAgenceWeb from "./sectionAgenceWeb";
import SectionMazeBank from "./sectionMazeBank";
import SectionBoutique from "./sectionBoutique";
import SectionLocation from "./sectionLocation";
import SectionFilm from "./sectionFilm";
import SectionGTA from "./sectionGTA3";

const Layout = () => {
    return (
        <>
            <Header />
            <SectionName />
            <SectionLink />
            <SectionLandingPage />
            <SectionAgenceWeb />
            <SectionMazeBank />
            <SectionBoutique />
            <SectionLocation />
            <SectionFilm />
            <SectionGTA />
        </>
    )
}

export default Layout;