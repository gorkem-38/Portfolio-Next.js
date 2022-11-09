import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

import Link from 'next/link'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TypeAnimationn from '@src/components/functionJS/func.jsx'

let styles = {
    sectionWork: "pt-36",
    divCard: "h-[33rem] bg-[#6e07f3] text-white rounded-none",
    cardHeader: "flex flex-col items-center justify-evenly text-white relative h-80 py-4 mx-10 bg-[#141c3a]",
    typoHeader: "text-xl font-arimo font-bold",
    typoHeader2: "text-base text-center font-arimo px-9 pb-6 md:px-24",
    linkHeader: "border border-[#5be9b9] p-3 rounded-full hover:bg-[#5be9b9] duration-300",
    cardBody: "text-center",
    typoBody: "text-xl pt-4 font-arimo font-bold",
    divBody: "flex justify-evenly items-end h-14 font-arimo px-24 md:justify-center",
    hoverIcon: "hover:text-[#5be9b9] transition duration-[400ms]",
    frontBackFull: "h-6 text-[#5be9b9]",
    pr5: "pr-5",
    copyR: "font-tapestry pt-4"
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
                        <Link href="#">
                            <a className={styles.linkHeader}>C&apos;est partis !</a>
                        </Link>
                    </CardHeader>
                    <CardBody className={styles.cardBody}>
                        <Typography className={styles.typoBody}>Développeur web</Typography>
                        <span className={styles.frontBackFull}><TypeAnimationn /></span>
                        <div className={styles.divBody}>
                            <Link href="#">
                                <a className={styles.pr5}><GitHubIcon fontSize="large" className={styles.hoverIcon} /></a>
                            </Link>
                            <Link href="">
                                <a><LinkedInIcon fontSize="large" className={styles.hoverIcon} /></a>
                            </Link>
                        </div>
                        <div className={styles.copyR}>
                            <p>Coder par moi © Tumer Gorkem</p>
                        </div>
                    </CardBody>
                </Card>
            </section>
        </>
    )
}

export default Footer;