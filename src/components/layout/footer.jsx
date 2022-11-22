import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import Input from "@mui/material/Input";
import { Textarea } from "@material-tailwind/react";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TextField from "@mui/material/TextField";

let styles = {
  sectionWork: "pt-36",
  divCard: "h-[33rem] bg-[#6e07f3] text-white rounded-none",
  cardHeader:
    "flex flex-col items-center text-white relative  py-4 mx-10 bg-[#141c3a] md:h-max lg:mx-28",
  typoHeader: "text-xl font-arimo font-bold",
  typoHeader2: "text-base text-center font-arimo px-9 pb-6 md:px-24",
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
        data-aos="fade-down-left"
        data-aos-once="false"
      >
        <Card className={styles.divCard}>
          <CardHeader className={styles.cardHeader}>
            <Typography className={styles.typoHeader}>
              Démarrer un projet
            </Typography>
            <Typography className={styles.typoHeader2}>
              Tu souhaiterai que l&apos;on travaille ensemble ?
            </Typography>
            <div className="flex flex-row justify-between w-[17rem] lg:w-2/6">
              <TextField
                label="Nom Prénom"
                variant="outlined"
                className="w-32"
              />
              <TextField label="E-mail" variant="outlined" className="w-32" />
            </div>
            <div className="flex items-end w-64 gap-4 py-4 md:w-96">
              <Textarea label="Message" className="h-32" variant="e-mail" />
            </div>
          </CardHeader>
          <div className="pt-10">
            <CardBody className={styles.cardBody}>
              <div className={styles.divBody}>
                <Link href="#">
                  <a className="lg:pr-5">
                    <GitHubIcon fontSize="large" className={styles.hoverIcon} />
                  </a>
                </Link>
                <Link href="">
                  <a>
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
