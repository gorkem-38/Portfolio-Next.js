import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

import Image from 'next/image';
import gta from '@src/assets/img/gtaIII.jpeg'
// import metacode from '@src/assets/img/metacode.png'

let styles = {
    sectionWork: "h-max pb-1b0",
    divParagraph: "flex flex-col items-center pt-20",
    h2: "font-martel text-xl underline font-black pb-4",
    divP: "text-center px-10 font-martel",
    divGTA: "pt-20",
    divCard: "h-80 shadow-2xl mx-8 bg-[#6e07f3] text-white md:mx-20",
    cardHeader: "relative h-40 mx-6",
    cardBody: "text-center",
    cardTypo: "text-xl pb-4 font-arimo font-bold",
    cardTypo2: "font-martel text-sm"
}

const SectionGTA = () => {
    return (
        <>
            <div className={styles.divGTA}>
                <Card className={styles.divCard}>
                    <CardHeader className={styles.cardHeader}>
                        <Image src={gta} alt="" />
                    </CardHeader>
                    <CardBody className={styles.cardBody}>
                        <Typography className={styles.cardTypo}>Futur projet ...</Typography>
                        <Typography className={styles.cardTypo2}>Projet collectif WordPress, création d'une boutique. Hébergement du site sur Netlify</Typography>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default SectionGTA;