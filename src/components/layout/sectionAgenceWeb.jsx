import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

import Image from 'next/image';
import metacode from '@src/assets/img/metacode.png'


let styles = {
    sectionWork: "pt-10",
    divCard: "h-80 shadow-2xl mx-8 bg-[#6e07f3] text-white",
    cardHeader: "relative h-40 mx-6",
    cardBody: "text-center",
    cardTypo: "text-xl pb-4",
    cardTypo2: "font-martel text-sm"
}


const SectionAgenceWeb = () => {
    return (
        <>
            <section className={styles.sectionWork}>
                <Card className={styles.divCard}>
                    <CardHeader className={styles.cardHeader}>
                        <Image  src={metacode} />
                    </CardHeader>
                    <CardBody className={styles.cardBody}>
                        <Typography className={styles.cardTypo}>Agence-web</Typography>
                        <Typography className={styles.cardTypo2}>1er projet collectif dans un environnement Webpack, création d'une agence web. Hébergement du site sur Netlify.</Typography>
                    </CardBody>
                </Card>
            </section>
        </>
    )
}

export default SectionAgenceWeb;