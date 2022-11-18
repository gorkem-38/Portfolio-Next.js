import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

let styles = {
    divCv: "pt-20 lg:grid lg:grid-cols-2 lg:hover:bg-[#5be9b9] lg:duration-300 lg:transition lg:ease-in-out lg:hover:-translate-y-3",
    divCard: "h-80 shadow-2xl mx-8 bg-[#6e07f3] text-white md:mx-20 lg:mb-12",
    cardHeader: "relative h-40 mx-6",
    cardBody: "text-center",
    cardTypo: "text-xl pb-4 font-arimo font-bold",
    cardTypo2: "font-martel text-sm"
}

const SectionCv = () => {
    return (
        <>
            <div className={styles.divCv}>
                <Card className={styles.divCard}>
                    <CardHeader className={styles.cardHeader}>
                        {/* <Image src={gta} alt="" /> */}
                    </CardHeader>
                    <CardBody className={styles.cardBody}>
                        <Typography className={styles.cardTypo}>Futur projet ...</Typography>
                        <Typography className={styles.cardTypo2}>Projet collectif WordPress, création d&apos;une boutique. Hébergement du site sur Netlify</Typography>
                    </CardBody>
                </Card>
                <div className="hidden lg:block lg:h-auto lg:w-48 lg:ml-64 lg:mt-14 lg:animate-bounce lg:opacity-80">
                    {/* <Image src={cv} /> */}
                </div>
            </div>
        </>
    )
}

export default SectionCv;