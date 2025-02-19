export default function ComicsCard(props) {

    return (
        <div className="prod-card">
            <img thumb={props.comicThumb} alt={props.comicTitle} />
        </div>
    );
};