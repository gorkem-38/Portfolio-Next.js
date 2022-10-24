import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

let styles = {
    sectionLink: "flex flex-col items-center h-screen w-full bg-[#6e07f3] text-white font-martel",
    divLink:"flex flex-row justify-around w-64 pt-8",
    link: "text-lg uppercase hover:text-[#5be9b9]",
    divFrontEndIcon: "mt-10 bg-white text-black w-96 h-screen border rounded-lg",
    divIcon1: "flex justify-center pt-10",
    icon: "bg-[#5be9b9] text-[#141c3a] rounded-full h-auto w-16 p-3",
    fontArimo: "font-arimo font-bold text-xl",
    divH2: "flex flex-col items-center pt-5 text-black",
    paragraph: "text-center font-roboto pt-5 px-10",
    divTech: "flex flex-col items-center pt-16 text-[#6e07f3] font-roboto",
    textBlack: "text-black",
    uppercase: "uppercase",
    divTechParagraph: "flex flex-col justify-around text-center text-black h-56"
}

const SectionLink = () => {
    return (
        <>
            <section className={styles.sectionLink}>
                <div className={styles.divLink}>
                    <a href="https://cv-gorkem.netlify.app/" target="_blank" className={styles.link}>cv</a>
                    <a href="" className={styles.link}>Project</a>
                </div>
                <div className={styles.divLink}>
                    <a href="https://github.com/gorkem-38" className={styles.link}>Github</a>
                    <a href="https://www.linkedin.com/in/gorkem-tumer/" target="_blank" className={styles.link}>Linkedin</a>
                </div>
                <div className={styles.divFrontEndIcon}>
                    <div className={styles.divIcon1}>
                        <DeveloperModeIcon className={styles.icon} />
                    </div>
                    <div className={styles.divH2}>
                        <h2 className={styles.fontArimo}>Front-end Developper</h2>
                        <p className={styles.paragraph}>I like to code things from scratch, and I like to bring my ideas to life in the browser.</p>
                    </div>
                    <div className={styles.divTech}>
                        <h3>Language and Tools used:</h3>
                        <div className={styles.divTechParagraph}>
                            <p>Html / Css / Javascript</p>
                            <p>Php / Sql / Node.js</p>
                            <p>Webpack / React.js / Next.js</p>
                            <p>TailwindCss / Express.js / Symfony</p>
                            <p>Jest / MySql / MongoDB</p>
                            <p>Babel.js / Chart.js / <span className={styles.uppercase}>JSON</span></p>
                            <p>PhpMyAdmin / <span className={styles.uppercase}>ftp</span> / <span className={styles.uppercase}>api</span> Rest</p>
                            <p>Twig / Github / Scrum</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionLink;