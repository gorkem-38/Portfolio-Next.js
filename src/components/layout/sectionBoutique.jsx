import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

import Image from 'next/image';
import boutique from '@src/assets/img/boutique.png'
import wp from '@src/assets/img/wp.png'

let styles = {
    divBoutique: "pt-20 lg:grid lg:grid-cols-2 lg:hover:bg-[#5be9b9] lg:duration-300 lg:transition lg:ease-in-out lg:hover:-translate-y-3",
    divCard: "h-80 shadow-2xl mx-8 bg-[#6e07f3] text-white md:mx-20 lg:mb-12",
    cardHeader: "relative h-[45%] mx-6 md:mx-16",
    icon: "hidden lg:block lg:ml-56 lg:mt-20 lg:h-auto lg:w-72 lg:animate-bounce lg:opacity-80",
    cardBody: "text-center",
    cardTypo: "text-xl pb-4 font-arimo font-bold",
    cardTypo2: "font-martel text-sm" 
}

const SectionBoutique = () => {
    return (
        <>
            <div className={styles.divBoutique}>
                <Card className={styles.divCard}>
                    <CardHeader className={styles.cardHeader}>
                        <Image  src={boutique} alt="" />
                    </CardHeader>
                    <CardBody className={styles.cardBody}>
                        <Typography className={styles.cardTypo}>Boutique</Typography>
                        <Typography className={styles.cardTypo2}>Projet collectif WordPress, création d&apos;une boutique. Hébergement du site sur Netlify</Typography>
                    </CardBody>
                </Card>
                <div className={styles.icon}>
                    <Image src={wp} className="rounded-full" />
                </div>
            </div>
        </>
    )
}

export default SectionBoutique;