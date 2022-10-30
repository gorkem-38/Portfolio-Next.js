import Header from "./header";
import SectionName from "./sectionName";
import SectionLink from "./sectionLink";
import SectionLandingPage from "./sectionLandingPage";
import SectionAgenceWeb from "./sectionAgenceWeb";
import SectionMazeBank from "./sectionMazeBank";
import SectionBoutique from "./sectionBoutique";

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
        </>
    )
}

export default Layout;