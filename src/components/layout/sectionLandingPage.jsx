import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

import Image from 'next/image';
import landingpage from '@src/assets/img/landingpage.png'
// import metacode from '@src/assets/img/metacode.png'

let styles = {
    sectionWork: "h-max pb-10",
    divParagraph: "flex flex-col items-center pt-20",
    h2: "font-martel text-xl underline font-black pb-4",
    divP: "text-center px-10 font-martel",
    divLandingPage: "pt-20",
    divCard: "h-80 shadow-2xl mx-8 bg-[#6e07f3] text-white",
    cardHeader: "relative h-40 mx-6",
    cardBody: "text-center",
    cardTypo: "text-xl pb-4",
    cardTypo2: "font-martel text-sm" 
}

const SectionLandingPage = () => {
    return (
        <>
            <section className={styles.sectionWork}>
                <div className={styles.divParagraph}>
                    <h2 className={styles.h2}>Mes projets récents</h2>
                    <p className={styles.divP}>Voici quelques projets sur lesquels j&apos;ai travaillé.</p>
                </div>
                <div className={styles.divLandingPage}>
                    <Card className={styles.divCard}>
                        <CardHeader className={styles.cardHeader}>
                            <Image  src={landingpage} />
                        </CardHeader>
                        <CardBody className={styles.cardBody}>
                            <Typography className={styles.cardTypo}>Landing-Page</Typography>
                            <Typography className={styles.cardTypo2}>1er projet individuel, maquettage et réalisation du site avec TailwindCss. Hébergement du site a l&apos;aide de FileZilla</Typography>
                        </CardBody>
                    </Card>
                </div>
            </section>
        </>
    )
}

export default SectionLandingPage;