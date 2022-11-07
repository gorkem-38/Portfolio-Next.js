import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

import Image from 'next/image';
import futur from '@src/assets/img/projectFutur.jpg'
// import metacode from '@src/assets/img/metacode.png'

let styles = {
    sectionWork: "h-max pb-1b0",
    divParagraph: "flex flex-col items-center pt-20",
    h2: "font-martel text-xl underline font-black pb-4",
    divP: "text-center px-10 font-martel",
    divLocation: "pt-20",
    divCard: "h-80 shadow-2xl mx-8 bg-[#6e07f3] text-white",
    cardHeader: "relative h-40 mx-6",
    cardBody: "text-center",
    cardTypo: "text-xl pb-4",
    cardTypo2: "font-martel text-sm" 
}

const SectionLocation = () => {
    return (
        <>
            <div className={styles.divLocation}>
                <Card className={styles.divCard}>
                    <CardHeader className={styles.cardHeader}>
                        <Image  src={futur} alt="" />
                    </CardHeader>
                    <CardBody className={styles.cardBody}>
                        <Typography className={styles.cardTypo}>Futur projet ...</Typography>
                        <Typography className={styles.cardTypo2}>Projet individuel, création d'un site de location. Hébergement du site sur Netlify</Typography>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default SectionLocation;