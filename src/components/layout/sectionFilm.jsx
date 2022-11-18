import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

import Image from 'next/image';
import futur2 from '@src/assets/img/futurProject2.jpg'
import film from '@src/assets/img/film.png'

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
                <Card className={styles.divCard}>
                    <CardHeader className={styles.cardHeader}>
                        <Image  src={futur2} alt="futur" />
                    </CardHeader>
                    <CardBody className={styles.cardBody}>
                        <Typography className={styles.cardTypo}>Futur projet ...</Typography>
                        <Typography className={styles.cardTypo2}>...</Typography>
                    </CardBody>
                </Card>
                <div className="hidden lg:block lg:h-auto lg:w-64 lg:ml-56 lg:mt-7 lg:animate-bounce lg:opacity-80">
                    <Image src={film} />
                </div>
            </div>
        </>
    )
}

export default SectionFilm;