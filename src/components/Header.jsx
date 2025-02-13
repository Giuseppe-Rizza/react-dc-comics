// Importo il componente Logo.jsx
import Logo from "../components/Logo.jsx";

// Importo il componente Navbar.jsx
import Navbar from "../components/Navbar.jsx";

// Header.jsx
export default function Header() {
    return (
        <header>
            <Logo />
            <Navbar />
        </header>
    );
};
