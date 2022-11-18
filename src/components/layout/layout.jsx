import Header from "./header";
import SectionName from "./sectionName";
import SectionLink from "./sectionLink";
import SectionLandingPage from "./sectionLandingPage";
import SectionAgenceWeb from "./sectionAgenceWeb";
import SectionCv from "./sectionCv";
import SectionMazeBank from "./sectionMazeBank";
import SectionBoutique from "./sectionBoutique";
import SectionFilm from "./sectionFilm";
import SectionGTA from "./sectionGTA3";
import Footer from "./footer";
import 'animate.css';
import { NavProgress } from "./navProgress";

const Layout = () => {
    return (
        <>
            <NavProgress />
            <Header />
            <SectionName />
            <SectionLink />
            <SectionLandingPage />
            <SectionAgenceWeb />
            <SectionCv />
            <SectionMazeBank />
            <SectionBoutique />
            <SectionFilm />
            <SectionGTA />
            <Footer />
        </>
    )
}

export default Layout;