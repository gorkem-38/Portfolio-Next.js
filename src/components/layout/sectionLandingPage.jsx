import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

import Image from 'next/image';
import landingpage from '@src/assets/img/landingpage.png'
import landingIcon from '@src/assets/img/landingIcon.jpg'

let styles = {
    sectionWork: "h-max pb-10",
    divParagraph: "flex flex-col items-center pt-20",
    h2: "font-arimo text-xl underline font-black pb-4 md:text-2xl",
    divP: "text-center px-10 font-arimo md:text-lg",
    gcols2: "hidden lg:grid lg:grid-cols-2",
    wh: "lg:ml-40 lg:mt-28 lg:h-auto lg:w-72",
    divLandingPage: "pt-20",
    divCard: "h-80 shadow-2xl mx-8 bg-[#6e07f3] text-white md:mx-16",
    cardHeader: "relative h-40 mx-6 md:mx-20",
    cardBody: "text-center",
    cardTypo: "text-xl font-arimo font-bold pb-4",
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
                <section className={styles.gcols2}>
                    <div className={styles.wh}>
                        <Image src={landingIcon} />
                    </div>
                    <div className={styles.divLandingPage}>
                        <Card className={styles.divCard}>
                            <CardHeader className={styles.cardHeader}>
                                <Image  src={landingpage} alt="" />
                            </CardHeader>
                            <CardBody className={styles.cardBody}>
                                <Typography className={styles.cardTypo}>Landing Page</Typography>
                                <Typography className={styles.cardTypo2}>1er projet individuel, maquettage et réalisation du site avec TailwindCss. Hébergement du site a l&apos;aide de FileZilla</Typography>
                            </CardBody>
                        </Card>
                    </div>
                </section>
            </section>
        </>
    )
}

export default SectionLandingPage;