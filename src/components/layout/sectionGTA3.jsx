import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

import Image from 'next/image';
import gta from '@src/assets/img/gtaIII.jpeg'
import gtaa from '@src/assets/img/gta.jpeg'

let styles = {
    divGTA: "pt-20 lg:grid lg:grid-cols-2 lg:hover:bg-[#5be9b9] lg:duration-300 lg:transition lg:ease-in-out lg:hover:-translate-y-3",
    divCard: "h-80 shadow-2xl mx-8 bg-[#6e07f3] text-white md:mx-20 lg:mb-12",
    cardHeader: "relative h-[45%] mx-6 lg:h-[55%]",
    cardBody: "text-center",
    cardTypo: "text-xl pb-4 font-arimo font-bold",
    cardTypo2: "font-martel text-sm"
}

const SectionGTA = () => {
    return (
        <>
            <div 
            className={styles.divGTA}
            data-aos-duration="1000"
            data-aos="zoom-in-up"
            data-aos-once="false">
                <div className="hidden lg:block lg:h-auto lg:w-48 lg:ml-64 lg:mt-14 lg:animate-bounce lg:opacity-80">
                    <Image src={gtaa} />
                </div>
                <Card className={styles.divCard}>
                    <CardHeader className={styles.cardHeader}>
                        <Image src={gta} alt="" />
                    </CardHeader>
                    <CardBody className={styles.cardBody}>
                        <Typography className={styles.cardTypo}>Futur projet ...</Typography>
                        <Typography className={styles.cardTypo2}>Projet collectif WordPress, création d&apos;une boutique. Hébergement du site sur Netlify</Typography>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default SectionGTA;