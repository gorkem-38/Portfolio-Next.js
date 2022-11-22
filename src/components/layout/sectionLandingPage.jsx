import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import Image from "next/image";
import landing from "@src/assets/img/landing.png";
import landingIcon from "@src/assets/img/landingIcon.jpg";
import Link from "next/link";

let styles = {
  sectionWork: "h-max pb-10",
  divParagraph: "flex flex-col items-center pt-20",
  h2: "font-arimo text-xl underline font-black pb-4 md:text-2xl",
  gcols2:
    "hidd lg:grid lg:grid-cols-2 lg:mt-14 lg:hover:bg-[#5be9b9] lg:duration-300 lg:transition lg:ease-in-out lg:hover:-translate-y-3",
  divP: "text-center px-10 font-arimo md:text-lg",
  wh: "hidden lg:block lg:animate-bounce lg:ml-60 lg:mt-40 lg:h-auto lg:w-64 lg:rounded-full lg:opacity-80",
  divLandingPage: "pt-20",
  divCard: "h-80 shadow-2xl mx-8 bg-[#6e07f3] text-white md:mx-16 lg:mb-12",
  cardHeader: "relative h-[45%] mx-6 md:mx-20",
  cardBody: "text-center",
  cardTypo: "text-xl font-arimo font-bold pb-4",
  cardTypo2: "font-martel text-sm",
};

const SectionLandingPage = () => {
  return (
    <>
      <section
        className={styles.sectionWork}
        data-aos-duration="1000"
        data-aos="zoom-in-up"
        data-aos-once="false"
      >
        <div className={styles.divParagraph}>
          <h2 className={styles.h2}>Mes projets récents</h2>
          <p className={styles.divP}>
            Voici quelques projets sur lesquels j&apos;ai travaillé.
          </p>
        </div>
        <section className={styles.gcols2}>
          <div className={styles.wh}>
            <Image src={landingIcon} className="rounded-full" />
          </div>
          <div className={styles.divLandingPage}>
            <Card className={styles.divCard}>
              <CardHeader className={styles.cardHeader}>
                <Link href="https://l-page.netlify.app/" passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <Image src={landing} alt="landing" />
                  </a>
                </Link>
              </CardHeader>
              <CardBody className={styles.cardBody}>
                <Typography className={styles.cardTypo}>
                  Landing Page
                </Typography>
                <Typography className={styles.cardTypo2}>
                  1er projet individuel, maquettage et réalisation du site en
                  vanilla. Hébergement du site a l&apos;aide de FileZilla
                </Typography>
              </CardBody>
            </Card>
          </div>
        </section>
      </section>
    </>
  );
};

export default SectionLandingPage;
