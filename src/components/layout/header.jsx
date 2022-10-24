import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WidgetsSharpIcon from '@mui/icons-material/WidgetsSharp';

let styles = {
    div_widget: "flex justify-between p-4",
    moon: "h-auto w-10",
    sharp: "h-auto w-10 text-[#6e07f3]"
};

const Header = () => {
    return (
        <>
            <div className={styles.div_widget}>
                <WidgetsSharpIcon className={styles.sharp} />
                <DarkModeOutlinedIcon className={styles.moon} />
            </div>
        </>
    )
}

export default Header;