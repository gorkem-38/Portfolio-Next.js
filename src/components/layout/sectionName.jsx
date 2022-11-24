import Image from "next/image";
import illustration from "@src/assets/img/preview.jpeg";
import TypeAnimationn from "@src/components/functionJS/func.jsx";
import Link from "next/link";

let styles = {
  sectionLg: "lg:grid lg:grid-cols-2 lg:h-[27rem] lg:mt-10",
  sectionName:
    "flex flex-col items-center pt-20 lg:border-2 lg:ring-offset-4 lg:ring-4 lg:ring-[#6e07f3] lg:rounded-xl lg: lg:p-0 lg:m-10 lg:justify-center lg:hover:bg-[#5be9b9] lg:duration-300 lg:transition lg:ease-in-out lg:hover:-translate-y-3",
  h1: "text-lg font-semibold",
  text: "font-bold capitalize text-4xl font-playball py-2 text-[#6e07f3]",
  text2: "font-semibold text-xl",
  frontBackFull: "h-6 text-[#6e07f3]",
  text3: "text-center font-roboto pt-6 px-10",
  sectionImg: "flex justify-center pt-6 lg:items-center",
  divImg: "h-auto w-72 md:w-96",
};

const SectionName = () => {
  return (
    <>
      <section
        className={styles.sectionLg}
        data-aos-duration="1000"
        data-aos="zoom-in-up"
        data-aos-once="false"
      >
        <div className={styles.sectionName}>
          <h1 className={styles.h1}>Hello, Je suis</h1>
          <p className={styles.text}>Gorkem Tumer</p>
          <p className={styles.text2}>Développeur Web</p>
          <span className={styles.frontBackFull}>
            <TypeAnimationn />
          </span>
          <p className={styles.text3}>
            Je code, conçois des sites web et j&apos;aime ça.
          </p>
          <div className="flex items-end h-14">
            <a
              href="./docs/cv.pdf"
              className="border border-[#6e07f3] rounded-xl p-2 px-6 hover:scale-110 hover:duration-500 hover:bg-[#6e07f3] hover:text-white"
            >
            <span className="uppercase">Mon cv</span>
            </a>
          </div>
        </div>
        <div className={styles.sectionImg}>
          <div className={styles.divImg}>
            <Image src={illustration} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionName;
