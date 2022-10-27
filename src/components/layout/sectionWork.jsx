let styles = {
    sectionWork: "h-screen",
    divParagraph: "flex flex-col items-center pt-20",
    fontMartel: "font-martel font-extrabold",
}

const SectionWork = () => {
    return (
        <>
            <section className={styles.sectionWork}>
                <div className={styles.divParagraph}>
                    <h2 className={styles.fontMartel}>Mes projets récents</h2>
                    <p>Voici quelques projets de design sur lesquels j&apos;ai travaillé dans le passé.</p>
                </div>
            </section>
        </>
    )
}

export default SectionWork;