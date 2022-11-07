import { Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang="fr">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Arimo:wght@500&family=Martel+Sans&family=Playball&family=Roboto:wght@500&family=Splash&family=Tapestry&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
                <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
                <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}