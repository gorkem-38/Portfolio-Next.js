import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

  import Link from 'next/link'

  let styles = {
    sectionWork: "pt-36 ",
    divCard: "h-[39rem] bg-[#6e07f3] text-white rounded-none",
    cardHeader: "flex flex-col items-center justify-evenly text-white relative h-80 py-4 mx-7 bg-[#141c3a]",
    typoHeader: "text-xl font-arimo font-bold",
    typoHeader2: "text-base text-center font-arimo px-9 pb-6",
    linkHeader: "",
    cardBody: "text-center",
    typoBody: "text-xl pt-4 font-arimo font-bold",
    divBody: "font-arimo"
}

const Footer = () => {
    return (
        <>
            <section className={styles.sectionWork}>
                <Card className={styles.divCard}>
                    <CardHeader className={styles.cardHeader}>
                        <Typography className={styles.typoHeader}>Démarrer un projet</Typography>
                        <Typography className={styles.typoHeader2}>Tu souhaite travailler ensemble ? Nous devrions fixer un moment pour discuter.
                        </Typography>
                        <div className="border border-[#5be9b9] p-3 rounded-full hover:bg-[#5be9b9] duration-300">
                            <Link href="#" className="">C&apos;est partis !</Link>
                        </div>
                    </CardHeader>
                    <CardBody className={styles.cardBody}>
                        <Typography className={styles.typoBody}>Developpeur web front-end</Typography>
                        <div className={styles.divBody}>
                            
                        </div>
                    </CardBody>
                </Card>
            </section>
        </>
    )
}

export default Footer;