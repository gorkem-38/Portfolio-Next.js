import WidgetsSharpIcon from '@mui/icons-material/WidgetsSharp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

let styles = {
    div_widget: "flex justify-between p-4 lg:hidden",
    moon: "h-auto w-10",
    sharp: "h-auto w-10 text-[#6e07f3]",
    lgSection:"hidden md:hidden lg:grid lg:grid-cols-2 lg:mt-2",
    divLg1: "flex flex-row justify-evenly w-96",
    iconGridLg: "h-auto w-10 hover:text-[#6e07f3] hover:bg-[#5be9b9] hover:rounded-full hover:p-1",
    divLg2: "flex justify-end pr-12"
};

const Header = () => {
    return (
        <>
            <section className={styles.div_widget}>
                <WidgetsSharpIcon className={styles.sharp} />
            </section>
            <section className={styles.lgSection}>
                <div className={styles.divLg1}>
                    <a href='https://github.com/gorkem-38' target='_blank'>
                        <GitHubIcon className={styles.iconGridLg} />
                    </a>
                    <a href="https://www.linkedin.com/in/gorkem-tumer/" target='_blank'>
                        <LinkedInIcon className={styles.iconGridLg} />
                    </a>
                    <a href="https://cv-gorkem.netlify.app/" target='_blank'>
                        <InsertDriveFileIcon className={styles.iconGridLg} />
                    </a>
                </div>
            </section>
        </>
    )
}

export default Header;