import ComicsList from "./products/ComicsList.jsx";

// Main.jsx
export default function Main() {
    return (
        <main>
            <section id="jumbotron">
                <img src="../jumbotron.jpg" alt="" />
            </section>
            <ComicsList />
            <button className="button">
                LOAD MORE
            </button>
            <section id="blue_bar">
                <img src="../buy-comics-digital-comics.png" alt="DIGITAL COMICS" />
                <img src="../buy-comics-merchandise.png" alt="DC MERCHANDISE" />
                <img src="../buy-comics-subscriptions.png" alt="SUBCRIPTION" />
                <img src="../buy-comics-shop-locator.png" alt="COMIC SHOP LOCATOR" />
                <img src="../buy-dc-power-visa.svg" alt="DC POWER VISA" />
            </section>
        </main>
    );
};