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

  let styles = {
    sectionWork: "pt-36",
    divCard: "h-[35rem] bg-[#6e07f3] text-white rounded-none",
    cardHeader: "flex flex-col items-center justify-evenly text-white relative h-80 py-4 mx-7 bg-[#141c3a]",
    typoHeader: "text-xl font-arimo font-bold",
    typoHeader2: "text-base text-center font-arimo px-9 pb-6",
    linkHeader: "border border-[#5be9b9] p-3 rounded-full hover:bg-[#5be9b9] duration-300",
    cardBody: "text-center",
    typoBody: "text-xl pt-4 font-arimo font-bold",
    divBody: "flex justify-evenly items-end h-20 font-arimo px-10",
    hoverIcon: "hover:text-[#5be9b9] transition duration-[400ms]"
}

const Footer = () => {
    return (
        <>
            <section className={styles.sectionWork} >
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
                        <Typography className={styles.typoBody}>Développeur web front-end</Typography>
                        <div className={styles.divBody}>
                            <Link href="#">
                                <a><GitHubIcon fontSize="large" className={styles.hoverIcon} /></a>
                            </Link>
                            <Link href="">
                                <a><LinkedInIcon fontSize="large" className={styles.hoverIcon} /></a>
                            </Link>
                        </div>
                        <div className="font-">
                            <p>Coder par moi © Tumer Gorkem</p>
                        </div>
                    </CardBody>
                </Card>
            </section>
        </>
    )
}

export default Footer;