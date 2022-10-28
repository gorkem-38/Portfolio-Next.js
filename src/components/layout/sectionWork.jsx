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
    sectionWork: "h-screen",
    divParagraph: "flex flex-col items-center pt-20",
    h2: "font-martel text-xl underline font-black pb-4",
    divP: "text-center px-10 font-martel",
    divLandingPage: "pt-20",
    divCard: "h-96 shadow-2xl  mx-8 bg-[#6e07f3] text-white",
    cardHeader: "relative h-40 mx-6",
    cardBody: "",
    cardTypo1: "" 
}

const SectionWork = () => {
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
                        <CardBody className="text-center">
                            <Typography className="font-martel">Landing-Page</Typography>
                            <Typography className="font-martel">1er projet, maquettage et réalisation du site avec TailwindCss. Hébergement du site a l'aide de FileZilla</Typography>
                        </CardBody>
                        <CardFooter className="">
                        </CardFooter>
                    </Card>
                </div>
            </section>
        </>
    )
}

export default SectionWork;