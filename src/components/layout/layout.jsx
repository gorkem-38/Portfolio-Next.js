import Header from "./header";
import SectionName from "./sectionName";
import SectionLink from "./sectionLink";
import SectionLandingPage from "./sectionLandingPage";
import SectionAgenceWeb from "./sectionAgenceWeb";
import SectionMazeBank from "./sectionMazeBank";
import SectionBoutique from "./sectionBoutique";
import SectionFilm from "./sectionFilm";
import SectionGTA from "./sectionGTA3";
import Footer from "./footer";

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
            <SectionFilm />
            <SectionGTA />
            <Footer />
        </>
    )
}

export default Layout;