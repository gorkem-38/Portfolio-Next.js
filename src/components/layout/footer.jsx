import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import { Textarea } from "@material-tailwind/react";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TextField from "@mui/material/TextField";

let styles = {
  sectionWork: "pt-36",
  divCard: "h-[33rem] bg-[#6e07f3] text-white rounded-none",
  cardHeader:
    "flex flex-col items-center text-white relative py-4 mx-10 bg-white md:h-max lg:mx-28 xl:drop-shadow-2xl",
  typoHeader: "text-xl font-arimo font-bold text-[#6e07f3] uppercase",
  typoHeader2: "text-base text-center text-black font-arimo px-9 pb-6 md:px-24",
  linkHeader:
    "border border-[#5be9b9] p-3 rounded-full hover:bg-[#5be9b9] duration-300",
  cardBody: "text-center",
  typoBody: "text-xl pt-4 font-arimo font-bold",
  divBody:
    "flex justify-evenly items-end h-14 font-arimo px-24  md:justify-center",
  hoverIcon: "hover:text-[#5be9b9] transition duration-[400ms]",
  frontBackFull: "h-6 text-[#5be9b9]",
  copyR: "font-tapestry pt-4",
  input: "text-white md:w-64",
};

const Footer = () => {
  return (
    <>
      <section
        className={styles.sectionWork}
        data-aos-duration="700"
        data-aos="fade-up"
        data-aos-once="false"
      >
        <Card className={styles.divCard}>
          <CardHeader className={styles.cardHeader}>
            <Typography className={styles.typoHeader}>Me contacter</Typography>
            <Typography className={styles.typoHeader2}>
              Actuellement à la recherche de nouveaux challenges et de nouvelles
              opportunités, n&apos;hésitez pas à me contacter via le formulaire
              ci-dessous.
            </Typography>
            <div className="flex flex-row justify-between w-[17rem] lg:w-2/6 xl:w-[35rem]">
              <TextField
                label="Votre nom complet"
                variant="outlined"
                className="w-32 text-white xl:w-56"
              />
              <TextField
                label="E-mail"
                variant="outlined"
                className="w-32 xl:w-56"
              />
            </div>
            <div className="flex items-end w-64 gap-4 py-4 md:w-96">
              <Textarea label="Message" className="h-32" variant="e-mail" />
            </div>
            <div className="flex items-end h-14">
              <a
                href="./docs/cv.pdf"
                className="border text-black border-[#6e07f3] rounded-xl p-2 px-6 hover:scale-110 hover:duration-500 hover:bg-[#6e07f3] hover:text-white"
              >
                <span className="uppercase">Envoyer</span>
              </a>
            </div>
          </CardHeader>
          <div className="pt-10">
            <CardBody className={styles.cardBody}>
              <div className={styles.divBody}>
                <Link href="https://github.com/gorkem-38" passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lg:pr-5"
                  >
                    <GitHubIcon fontSize="large" className={styles.hoverIcon} />
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/in/gorkem-tumer/" passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon
                      fontSize="large"
                      className={styles.hoverIcon}
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.copyR}>
                <p>© Powered by Tumer Gorkem</p>
              </div>
            </CardBody>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Footer;
