// Importo il componente Logo.jsx
import Logo from "../components/Logo.jsx";

// Importo il componente Navbar.jsx
import Navbar from "../components/Navbar.jsx";

// Header.jsx
export default function Header() {

    // Ricavo l'array di dati per la gestione dei link della Navbar
    const links = [
        { id: 1, name: 'CHARACTERS', url: '#', current: false },
        { id: 2, name: 'COMICS', url: '#', current: true },
        { id: 3, name: 'MOVIES', url: '#', current: false },
        { id: 4, name: 'TV', url: '#', current: false },
        { id: 5, name: 'GAMES', url: '#', current: false },
        { id: 6, name: 'COLLECTIBLES', url: '#', current: false },
        { id: 7, name: 'VIDEOS', url: '#', current: false },
        { id: 8, name: 'FANS', url: '#', current: false },
        { id: 9, name: 'NEWS', url: '#', current: false },
        { id: 10, name: 'SHOP', url: '#', current: false },
    ];

    return (
        <header>
            <Logo />

            {/* Il primo links è il nome della proprietà (props) che arriva dall'altra parte, il secondo links è il valore che gli stiamo passando (la costante dell'array che inizia a riga 11) e va messo tra le graffe perché è ricavato da una costante, quindi non gli passiamo direttamente un valore ma quello che la variabile links ci ritorna (se fosse semplicemente una stringa non ci vorrebbero le graffe)*/}
            {/* N.B.: in altre parole, visto che i dati sono sul padre Header, devo passare questi dati in qualche modo al figlio Navbar e li passo dandogli un nome (linksProp) che ti ritrovi dalla'altra parte dagli attributi (links) */}
            <Navbar linksProp={links} />
        </header>
    );
};
