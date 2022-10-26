import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DnsIcon from '@mui/icons-material/Dns';

let styles = {
    sectionLink: "flex flex-col items-center h-screen w-full bg-[#6e07f3] text-white font-martel",
    divLink:"w-3/4 text-center pt-8",
    link: "text-lg uppercase hover:text-[#5be9b9]",
    divFrontEndIcon: "mt-10 bg-white text-black w-5/6 h-screen border rounded-lg",
    divIcon1: "flex justify-center pt-10",
    icon: "bg-[#5be9b9] text-[#141c3a] rounded-full h-auto w-16 p-3",
    fontArimo: "font-arimo font-bold text-xl",
    divH2: "flex flex-col items-center pt-5 text-black",
    paragraph: "text-center font-roboto pt-5 px-10",
    divTech: "flex flex-col items-center pt-16 text-[#6e07f3] font-roboto",
    textTeal: "text-[#5be9b9]",
    uppercase: "uppercase",
    divFront: "flex flex-col items-center justify-around h-36 text-black pt-3",
    divBack: "flex flex-col items-center justify-around h-36 text-black pt-3"
}

const SectionLink = () => {
    return (
        <>
            <section className={styles.sectionLink}>
                <div className={styles.divLink}>
                    <p>Ayant grandi avec Internet, j'ai commencé à utiliser des ordinateurs
                        à un âge où je n'avais que mon subconscient. Je jouais à des jeux en ligne, j'explorais le web sur IE, je démontais des ordinateurs pour voir de quoi est-ce qu'ils étaient faits pièce par pièce et à partir de là, j'ai toujours eu les doigts sur un ordinateur.
                        Au commencement cette année 2022. A travers de formation en ligne et en présentiel.
                        A ce jour, je suis à la recherche d'un stage afin de concrétiser mes projets et m'améliorer en collaborant avec des personnes talentueuses. J'ai une curiosité naturelle, je suis autonome et je m'efforce toujours constamment d'améliorer mes compétences et réaliser les projets les plus originaux car cela me vient d'une volonté à me distinguer.
                    </p>
                </div>
                <div className={styles.divFrontEndIcon}>
                    <div className={styles.divIcon1}>
                        <DeveloperModeIcon className={styles.icon} />
                    </div>
                    <div className={styles.divH2}>
                        <h2 className={styles.fontArimo}>Développement web</h2>
                        <p className={styles.paragraph}>J'aime coder des choses à partir de rien, et j'aime donner vie à mes idées dans le navigateur.</p>
                    </div>
                    <div className={styles.divTech}>
                        <h3>Langages et outils utilisés :</h3>
                        <div className={styles.divFront}>
                            <VisibilityIcon className={styles.textTeal}/>
                            <p>Html - Css - Javascript</p>
                            <p>Webpack - React.js - Next.js</p>
                            <p>TailwindCss - Chart.js - <span className={styles.uppercase}>Json</span></p>
                        </div>
                        <div className={styles.divBack}>
                            <DnsIcon className={styles.textTeal}/>
                            <p>Php / Sql / Node.js</p>
                            <p>Express.js/ Mongo<span className={styles.uppercase}>db</span> - <span className={styles.uppercase}>Api</span> Rest</p>
                            <p>Jest / Symfony / My<span className={styles.uppercase}>Sql</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionLink;