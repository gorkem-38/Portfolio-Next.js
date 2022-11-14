import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

import Image from 'next/image';
import mazebank from '@src/assets/img/mazebank.png'
// import metacode from '@src/assets/img/metacode.png'

let styles = {
    divMazeBank: "pt-20 lg:grid lg:grid-cols-2",
    divCard: "h-80 shadow-2xl mx-8 bg-[#6e07f3] text-white md:mx-20",
    cardHeader: "relative h-40 mx-6 md:mx-16",
    cardBody: "text-center",
    cardTypo: "text-xl pb-4 font-arimo font-bold",
    cardTypo2: "font-martel text-sm" 
}

const SectionMazeBank = () => {
    return (
        <>
            <div className={styles.divMazeBank}>
                <Card className={styles.divCard}>
                    <CardHeader className={styles.cardHeader}>
                        <Image  src={mazebank} alt="" />
                    </CardHeader>
                    <CardBody className={styles.cardBody}>
                        <Typography className={styles.cardTypo}>Maze Bank</Typography>
                        <Typography className={styles.cardTypo2}>Projet individuel environnement Webpack, réalisation d'une application bancaire. Hébergement du site sur Netlify</Typography>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default SectionMazeBank;