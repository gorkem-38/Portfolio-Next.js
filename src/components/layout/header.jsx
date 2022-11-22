import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

let styles = {
  div_widget: "flex justify-between p-4 lg:hidden",
  moon: "h-auto w-10",
  sharp: "h-auto w-8 text-[#6e07f3]",
  lgSection: "hidden md:hidden lg:grid lg:grid-cols-2 lg:mt-2",
  divLg1: "flex flex-row justify-evenly w-96",
  iconGridLg:
    "h-auto w-14 hover:text-[#6e07f3] hover:bg-[#5be9b9] hover:rounded-full hover:p-1",
  divLg2: "flex justify-end pr-12",
};

const Header = () => {
  return (
    <>
      <section className={styles.div_widget}>
        <div className="flex space-x-2">
          <div>
            <a
              className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mr-1.5"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              <MenuIcon className={styles.sharp} />
            </a>
            <div
              className="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-96"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header flex justify-end p-4">
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
                <div className="flex flex-col justify-around text-xl h-32">
                  <a
                    href="https://github.com/gorkem-38"
                    className="hover:text-[#6d06f2]"
                    target="blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gorkem-tumer/"
                    className="hover:text-[#6d06f2]"
                    target="blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://cv-gorkem.netlify.app/"
                    className="hover:text-[#6d06f2]"
                    target="blank"
                    rel="noreferrer"
                  >
                    Cv
                  </a>
                </div>
                <div className="dropdown relative mt-4">
                  <ul
                    className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        Another action
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.lgSection}>
        <div className={styles.divLg1}>
          <a
            href="https://github.com/gorkem-38"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className={styles.iconGridLg} />
          </a>
          <a
            href="https://www.linkedin.com/in/gorkem-tumer/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className={styles.iconGridLg} />
          </a>
          <a
            href="https://cv-gorkem.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <InsertDriveFileIcon className={styles.iconGridLg} />
          </a>
        </div>
      </section>
    </>
  );
};

export default Header;
