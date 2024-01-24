import Image from "next/image";
import NavbarLogo from "../../public/navbar-logo.svg";

export default function NavBarComponent() {
    return (
        <nav className="bg-transparent">
            <div className="px-16 pt-9 flex items-center justify-between">
                <Image
                    src={NavbarLogo}
                    alt="NavBar Logo"
                />
                <div className="flex items-center space-x-16">
                    <a href="#" className="">Sobre</a>
                    <a href="#" className="">Experiencia</a>
                    <a href="#" className="">Projetos</a>
                    <a href="#" className="">Contato</a>
                </div>
            </div>
        </nav>
    );
}