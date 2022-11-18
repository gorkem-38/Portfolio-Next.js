import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

import Image from 'next/image';
import cvS from '@src/assets/img/cvScreen.png'
import cvIcon from "@src/assets/img/cvIcon.png"

let styles = {
    divFilm: "pt-20 lg:grid lg:grid-cols-2 lg:my-20 lg:hover:bg-[#5be9b9] lg:duration-300 lg:transition lg:ease-in-out lg:hover:-translate-y-3",
    divCard: "h-80 shadow-2xl mx-8 bg-[#6e07f3] text-white md:mx-20 lg:mb-12",
    cardHeader: "relative h-[45%] mx-6 md:mx-16",
    cardBody: "text-center",
    cardTypo: "text-xl pb-4 font-arimo font-bold",
    cardTypo2: "font-martel text-sm" 
}

const SectionFilm = () => {
    return (
        <>
            <div 
            className={styles.divFilm}
            data-aos-duration="1000"
            data-aos="zoom-in-up"
            data-aos-once="false">
                <div className="hidden lg:block lg:h-auto lg:w-64 lg:ml-56 lg:mt-7 lg:animate-bounce lg:opacity-80">
                        <Image  src={cvIcon} alt="cvIcon" />
                </div>
                <Card className={styles.divCard}>
                    <CardHeader className={styles.cardHeader}>
                    <Image src={cvS} />
                    </CardHeader>
                    <CardBody className={styles.cardBody}>
                        <Typography className={styles.cardTypo}>Cv en HTML</Typography>
                        <Typography className={styles.cardTypo2}>Projet individuel, création d&apos;un Cv en <span className="uppercase">html / css</span>. Hébergement du site sur Netlify</Typography>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default SectionFilm;