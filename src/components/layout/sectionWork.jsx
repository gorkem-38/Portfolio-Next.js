let styles = {
    sectionWork: "h-screen",
    divParagraph: "flex flex-col items-center pt-20",
    h2: "font-martel text-xl underline font-black pb-4",
    divP: "text-center px-10"
}

const SectionWork = () => {
    return (
        <>
            <section className={styles.sectionWork}>
                <div className={styles.divParagraph}>
                    <h2 className={styles.h2}>Mes projets récents</h2>
                    <p className={styles.divP}>Voici quelques projets sur lesquels j&apos;ai travaillé.</p>
                </div>
            </section>
        </>
    )
}

export default SectionWork;