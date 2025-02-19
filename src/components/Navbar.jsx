// Navbar.jsx
// Qui props sarà un oggetto che conterrà un'unica proprietà che si chiama linksProp (così l'ho chiamata dall'altra parte)
export default function Navbar(props) {

    // Siccome da questa parte mi ritorni l'oggetto props, a me interessa di quell'oggetto props cosa c'è come valore della proprità linksProp che quindi conterrà links (ossia l'array di oggetti) e quindi in Navbar.jsx posso utilizzarlo come links
    const links = props.linksProp;
    // Versione destrutturata
    // const {linksProp} = props;

    return (
        <nav>
            <ul>
                {links.map((link) => (
                    <li key={link.id}>
                        <a href={link.url} className={link.current ? "active" : ""}>
                            {link.name}
                        </a>
                    </li>
                ))}
                {/* <li><a href="#">CHARACTERS</a></li>
                <li><a href="#" className="active">COMICS</a></li>
                <li><a href="#">MOVIES</a></li>
                <li><a href="#">TV</a></li>
                <li><a href="#">GAMES</a></li>
                <li><a href="#">COLLECTIBLES</a></li>
                <li><a href="#">VIDEOS</a></li>
                <li><a href="#">FANS</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">SHOP</a></li> */}
            </ul>
        </nav>
    );
};