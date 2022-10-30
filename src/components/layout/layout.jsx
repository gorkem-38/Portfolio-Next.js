import Header from "./header";
import SectionName from "./sectionName";
import SectionLink from "./sectionLink";
import SectionLandingPage from "./sectionLandingPage";
import SectionAgenceWeb from "./sectionAgenceWeb";
import SectionMazeBank from "./sectionMazeBank";

const Layout = () => {
    return (
        <>
            <Header />
            <SectionName />
            <SectionLink />
            <SectionLandingPage />
            <SectionAgenceWeb />
            <SectionMazeBank />
        </>
    )
}

export default Layout;