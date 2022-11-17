import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

import Image from 'next/image';
import metacode from '@src/assets/img/metacode.png'
import groupProjet from '@src/assets/img/groupProject.jpg'

let styles = {
    sectionWork: "pt-10 lg:grid lg:grid-cols-2 lg:my-20 lg:hover:bg-[#5be9b9] lg:duration-300 lg:transition lg:ease-in-out lg:hover:-translate-y-3",
    divCard: "h-80 shadow-2xl mx-8 bg-[#6e07f3] text-white md:mx-20 lg:my-12",
    cardHeader: "relative h-40 mx-6 md:mx-16",
    icon: "hidden lg:block lg:ml-56 lg:mt-28 lg:h-auto lg:w-72 lg:animate-bounce lg:opacity-80",
    cardBody: "text-center",
    cardTypo: "text-xl pb-4 font-arimo font-bold",
    cardTypo2: "font-martel text-sm"
}

const SectionAgenceWeb = () => {
    return (
        <>
            <section className={styles.sectionWork}>
                <Card className={styles.divCard}>
                    <CardHeader className={styles.cardHeader}>
                        <Image src={metacode} alt="metacode" />
                    </CardHeader>
                    <CardBody className={styles.cardBody}>
                        <Typography className={styles.cardTypo}>Agence web</Typography>
                        <Typography className={styles.cardTypo2}>1er projet collectif dans un environnement Webpack, création d&apos;une agence web. Hébergement du site sur Netlify.</Typography>
                    </CardBody>
                </Card>
                <div className={styles.icon}>
                    <Image src={groupProjet} className="rounded-full" />
                </div>
            </section>
        </>
    )
}

export default SectionAgenceWeb;