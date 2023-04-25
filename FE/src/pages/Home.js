import { t } from "i18next";

export default function Home() {
    return (
        <div className="home">
            <h2>{t("Welcome")}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis lacus eget gravida accumsan.
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam dapibus fringilla nunc, non feugiat mauris blandit a.
                Sed laoreet eget nunc vitae pulvinar. Nunc scelerisque dui urna, luctus suscipit risus aliquam ac.
                Quisque ultricies eu ligula nec facilisis. Sed quis lectus placerat, viverra dolor nec, fermentum orci.</p>

            <p>In eget mauris nibh. Sed iaculis nisi id nunc accumsan, quis malesuada tellus pellentesque. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Donec porta ut orci eget volutpat. Morbi at magna vel turpis egestas lacinia.
                Maecenas laoreet tempor purus eget tempus. Integer arcu purus, luctus in leo sed, venenatis feugiat eros. Maecenas porttitor
                elit quis quam eleifend bibendum. Nulla in tellus eget tortor ornare placerat in ut ipsum.
                 Sed sed nisl bibendum, pretium ex ac, bibendum ante. Integer eu nisl volutpat, 
                 consectetur tortor sit amet, euismod urna. Curabitur vel ligula eget eros aliquet consequat vitae quis turpis.</p>
        </div>
    );
}