import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import Image from "next/image";
import boutique from "@src/assets/img/boutique.png";
import wp from "@src/assets/img/wp.png";
import Link from "next/link";

let styles = {
  divBoutique:
    "pt-20 lg:grid lg:grid-cols-2 lg:hover:bg-[#5be9b9] lg:duration-300 lg:transition lg:ease-in-out lg:hover:-translate-y-3",
  divCard: "h-80 shadow-2xl mx-8 bg-[#6e07f3] text-white md:mx-20 lg:mb-12",
  cardHeader: "relative h-[45%] mx-6 md:mx-16",
  icon: "hidden lg:block lg:ml-56 lg:mt-20 lg:h-auto lg:w-72 lg:animate-bounce lg:opacity-80",
  cardBody: "text-center",
  cardTypo: "text-xl pb-4 font-arimo font-bold text-[#5be9b9]",
  cardTypo2: "font-martel text-sm",
};

const SectionBoutique = () => {
  return (
    <>
      <div
        className={styles.divBoutique}
        data-aos-duration="1000"
        data-aos="zoom-in-up"
        data-aos-once="false"
      >
        <div className={styles.icon}>
          <Image src={wp} className="rounded-full" />
        </div>
        <Card className={styles.divCard}>
          <CardHeader className={styles.cardHeader}>
            <Link
              href="https://wana-shop-saewt1towb.live-website.com/"
              rel="noopener noreferrer"
              passHref
            >
              <a target="_blank" rel="noopener noreferrer">
                <Image src={boutique} alt="boutique" />
              </a>
            </Link>
          </CardHeader>
          <CardBody className={styles.cardBody}>
            <Typography className={styles.cardTypo}>Boutique</Typography>
            <Typography className={styles.cardTypo2}>
              Projet collectif sous WordPress, création d&apos;une boutique liée
              à notre projet d&apos;agence web. Hébergement du site sur{" "}
              <span className="uppercase">ionos</span>.
            </Typography>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default SectionBoutique;
