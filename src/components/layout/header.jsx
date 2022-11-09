import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
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
    iconGridLg: "h-auto w-10 hover:text-[#6e07f3]",
    divLg2: "flex justify-end pr-12"
};

const Header = () => {
    return (
        <>
            <section className={styles.div_widget}>
                <WidgetsSharpIcon className={styles.sharp} />
                <DarkModeOutlinedIcon className={styles.moon} />
            </section>
            <section className={styles.lgSection}>
                <div className={styles.divLg1}>
                    <GitHubIcon className={styles.iconGridLg} />
                    <LinkedInIcon className={styles.iconGridLg} />
                    <InsertDriveFileIcon className={styles.iconGridLg} />
                </div>
                <div className={styles.divLg2}>
                    <DarkModeOutlinedIcon className={styles.moon} />
                </div>
            </section>
        </>
    )
}

export default Header;