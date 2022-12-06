import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DnsIcon from '@mui/icons-material/Dns';

let styles = {
    sectionLink: "h-screen w-full bg-[#6e07f3] text-white font-martel md:h-[34rem]",
    divText:"flex justify-center text-justify text-sm px-10 pt-8 md:text-justify md:text-base md:px-24 lg:px-48",
    sectionFrontEndIcon: "flex flex-col items-center bg-white text-black mx-9 mt-[-16rem] border rounded-lg drop-shadow-xl md:mt-[-12rem] lg:mt-[-20rem] lg:mx-20",
    divIcon1: "flex justify-center pt-10",
    icon: "bg-[#5be9b9] text-[#141c3a] rounded-full h-auto w-16 p-3",
    fontArimo: "font-arimo font-bold text-xl underline",
    divH2: "flex flex-col items-center pt-5 text-black",
    paragraph: "text-center font-roboto pt-5 px-10",
    divTech: "flex flex-col items-center pt-16 pb-6 text-[#6e07f3] font-roboto",
    h3: 'text-center font-semibold',
    textTeal: "text-[#5be9b9]",
    uppercase: "uppercase",
    divTools: "flex flex-col items-center justify-around h-36 text-black pt-3 font-martel",
}

const SectionLink = () => {
    return (
        <>
            <section 
            className={styles.sectionLink}
            data-aos-duration="1000"
            data-aos="zoom-in-up"
            data-aos-once="false">
                <div className={styles.divText}>
                    <p>Ayant grandi avec Internet, j&apos;ai commencé à utiliser des ordinateurs
                        à un âge où je n&apos;avais que mon subconscient. Je jouais à des jeux en ligne, j&apos;explorais le web sur IE, je démontais des ordinateurs pour voir de quoi est-ce qu&apos;ils étaient faits pièce par pièce et à partir de là, j&apos;ai toujours eu les doigts sur un ordinateur.
                        Au commencement cette année 2022. A travers de formation en ligne et en présentiel, je m&apos;initie au développement web et à la programmation
                        A ce jour, je suis à la recherche d&apos;un stage afin de concrétiser mes projets et m&apos;améliorer en collaborant avec des personnes talentueuses. J&apos;ai une curiosité naturelle, je suis autonome et je m&apos;éfforce toujours constamment d&apos;améliorer mes compétences et réaliser les projets les plus originaux car cela me vient d&apos;une volonté à me distinguer.
                    </p>
                </div>
            </section>
            <section className={styles.sectionFrontEndIcon}>
                {/* <div className={styles.divH2}>
                    <h2 className={styles.fontArimo}>Développement web</h2>
                    <p className={styles.paragraph}>J&apos;aime coder des choses à partir de rien, et j&apos;aime donner vie à mes idées dans le navigateur.</p>
                </div> */}
                <div className={styles.divTech}>
                    <h3 className={`${styles.h3} font-playball uppercase`}>Langages et technologies utilisés :</h3>
                    <div className={styles.divTools}>
                        <VisibilityIcon className={styles.textTeal}/>
                        <p>Html - Css - Javascript</p>
                        <p>Webpack - React.js - Next.js</p>
                        <p>TailwindCss - <span className={styles.uppercase}>Json</span></p>
                    </div>
                    <div className={styles.divTools}>
                        <DnsIcon className={styles.textTeal}/>
                        <p>Php - Sql - Node.js</p>
                        <p>PhpMyAdmin - Mongo<span className={styles.uppercase}>db</span> - <span className={styles.uppercase}>Api</span> Rest</p>
                        <p>Symfony - My<span className={styles.uppercase}>Sql</span></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionLink;