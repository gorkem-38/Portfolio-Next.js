import Image from 'next/image';
import illustration from '@src/assets/img/illustration.png';

let styles = {
    divName: "flex flex-col items-center pt-20",
    h1:"text-lg font-semibold",
    text: "font-bold capitalize text-4xl font-playball py-2 text-[#6e07f3]",
    text2: "font-semibold text-xl",
    text3: "text-center font-roboto pt-8 px-10",
    sectionImg: 'flex justify-center pt-6',
    divImg: 'h-auto w-72'
};

const SectionName = () => {
    return (
        <>
            <section className={styles.divName}>
                <h1 className={styles.h1}>Hello, Je suis</h1>
                <p className={styles.text}>Gorkem Tumer</p>
                <p className={styles.text2}>Développeur Web.</p>
                <p className={styles.text3}>Je code et conçois des sites web, je les embelli et j&apos;aime ça.</p>
            </section>
            <section className={styles.sectionImg}>
                <div className={styles.divImg}>
                    <Image src={illustration} />
                </div>
            </section>
        </>
    )
}

export default SectionName;