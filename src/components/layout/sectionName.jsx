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
            <div className={styles.divName}>
                <h1 className={styles.h1}>Hello, I'm</h1>
                <p className={styles.text}>Gorkem Tumer</p>
                <p className={styles.text2}>Web Developper.</p>
                <p className={styles.text3}>I code and design websites, make them beautiful, and i love it</p>
            </div>
            <section className={styles.sectionImg}>
                <div className={styles.divImg}>
                    <Image src={illustration} />
                </div>
            </section>
        </>
    )
}

export default SectionName;