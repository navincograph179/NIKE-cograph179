import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute w-full z-10">
            <nav className="flex justify-between max-container">
                <a href="/">
                    <img src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={29} />
                </a>
                {/* Logo part end, in the nav classNmae "max-container" was import from index.css of @layer */}
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {/* max-lg:hidden means hidden on below equal and less than 1023px */}
                    {navLinks.map((item) => (
                        //the map() return label and href one by one from index.js of constants folder.
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className='font-montserrat leading-normal text-lg text-slate-gray'
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                
                <div className="hidden max-lg:block">
                    {/*hidden max-lg:block = usually hidden but show on max-width:1024px */}
                    <img
                        src= {hamburger}
                        alt="Humburger menu"
                        width={25}
                        height={25} />
                </div>
            </nav>
        </header>
    )
}

export default Nav