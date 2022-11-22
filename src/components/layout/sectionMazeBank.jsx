import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import Image from "next/image";
import mazebank from "@src/assets/img/mazebank.png";
import dev from "@src/assets/img/dev.png";
import Link from "next/link";

let styles = {
  divMazeBank:
    "pt-20 lg:grid lg:grid-cols-2 lg:my-20 lg:hover:bg-[#5be9b9] lg:duration-300 lg:transition lg:ease-in-out lg:hover:-translate-y-3",
  divCard: "h-80 shadow-2xl mx-8 bg-[#6e07f3] text-white md:mx-20 lg:mb-12",
  cardHeader: "relative h-[45%] mx-6 md:mx-16",
  icon: "hidden lg:block lg:ml-56 lg:mt-16 lg:h-auto lg:w-72 lg:animate-bounce lg:opacity-80",
  cardBody: "text-center",
  cardTypo: "text-xl pb-4 font-arimo font-bold",
  cardTypo2: "font-martel text-sm",
};

const SectionMazeBank = () => {
  return (
    <>
      <div
        className={styles.divMazeBank}
        data-aos-duration="1000"
        data-aos="zoom-in-up"
        data-aos-once="false"
      >
        <Card className={styles.divCard}>
          <CardHeader className={styles.cardHeader}>
            <Link href="https://maze-bankk.netlify.app/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image src={mazebank} alt="mazebank" />
              </a>
            </Link>
          </CardHeader>
          <CardBody className={styles.cardBody}>
            <Typography className={styles.cardTypo}>Maze Bank</Typography>
            <Typography className={styles.cardTypo2}>
              Projet individuel environnement Webpack, réalisation d&apos;une
              application bancaire. Hébergement du site sur Netlify
            </Typography>
          </CardBody>
        </Card>
        <div className={styles.icon}>
          <Image src={dev} />
        </div>
      </div>
    </>
  );
};

export default SectionMazeBank;
