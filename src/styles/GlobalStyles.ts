import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@font-face {
    font-family: 'Uni Neue';
    src: url('UniNeueHeavy.eot');
    src: local('Uni Neue Heavy'), local('UniNeueHeavy'),
        url('UniNeueHeavy.eot?#iefix') format('embedded-opentype'),
        url('UniNeueHeavy.woff2') format('woff2'),
        url('UniNeueHeavy.woff') format('woff'),
        url('UniNeueHeavy.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Uni Neue Book';
    src: url('UniNeueBook.eot');
    src: local('Uni Neue Book'), local('UniNeueBook'),
        url('UniNeueBook.eot?#iefix') format('embedded-opentype'),
        url('UniNeueBook.woff2') format('woff2'),
        url('UniNeueBook.woff') format('woff'),
        url('UniNeueBook.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Uni Neue';
    src: url('UniNeueRegular.eot');
    src: local('Uni Neue Regular'), local('UniNeueRegular'),
        url('UniNeueRegular.eot?#iefix') format('embedded-opentype'),
        url('UniNeueRegular.woff2') format('woff2'),
        url('UniNeueRegular.woff') format('woff'),
        url('UniNeueRegular.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Uni Neue';
    src: url('UniNeueLight-Italic.eot');
    src: local('Uni Neue Light Italic'), local('UniNeueLight-Italic'),
        url('UniNeueLight-Italic.eot?#iefix') format('embedded-opentype'),
        url('UniNeueLight-Italic.woff2') format('woff2'),
        url('UniNeueLight-Italic.woff') format('woff'),
        url('UniNeueLight-Italic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Uni Neue';
    src: url('UniNeueLight.eot');
    src: local('Uni Neue Light'), local('UniNeueLight'),
        url('UniNeueLight.eot?#iefix') format('embedded-opentype'),
        url('UniNeueLight.woff2') format('woff2'),
        url('UniNeueLight.woff') format('woff'),
        url('UniNeueLight.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Uni Neue';
    src: url('UniNeueBold.eot');
    src: local('Uni Neue Bold'), local('UniNeueBold'),
        url('UniNeueBold.eot?#iefix') format('embedded-opentype'),
        url('UniNeueBold.woff2') format('woff2'),
        url('UniNeueBold.woff') format('woff'),
        url('UniNeueBold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Uni Neue';
    src: url('UniNeueHeavy-Italic.eot');
    src: local('Uni Neue Heavy Italic'), local('UniNeueHeavy-Italic'),
        url('UniNeueHeavy-Italic.eot?#iefix') format('embedded-opentype'),
        url('UniNeueHeavy-Italic.woff2') format('woff2'),
        url('UniNeueHeavy-Italic.woff') format('woff'),
        url('UniNeueHeavy-Italic.ttf') format('truetype');
    font-weight: 800;
    font-style: italic;
}

@font-face {
    font-family: 'Uni Neue Book';
    src: url('UniNeueBook-Italic.eot');
    src: local('Uni Neue Book Italic'), local('UniNeueBook-Italic'),
        url('UniNeueBook-Italic.eot?#iefix') format('embedded-opentype'),
        url('UniNeueBook-Italic.woff2') format('woff2'),
        url('UniNeueBook-Italic.woff') format('woff'),
        url('UniNeueBook-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Uni Neue';
    src: url('UniNeueBlack-Italic.eot');
    src: local('Uni Neue Black Italic'), local('UniNeueBlack-Italic'),
        url('UniNeueBlack-Italic.eot?#iefix') format('embedded-opentype'),
        url('UniNeueBlack-Italic.woff2') format('woff2'),
        url('UniNeueBlack-Italic.woff') format('woff'),
        url('UniNeueBlack-Italic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Uni Neue';
    src: url('UniNeueBold-Italic.eot');
    src: local('Uni Neue Bold Italic'), local('UniNeueBold-Italic'),
        url('UniNeueBold-Italic.eot?#iefix') format('embedded-opentype'),
        url('UniNeueBold-Italic.woff2') format('woff2'),
        url('UniNeueBold-Italic.woff') format('woff'),
        url('UniNeueBold-Italic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Uni Neue';
    src: url('UniNeueRegular-Italic.eot');
    src: local('Uni Neue Regular Italic'), local('UniNeueRegular-Italic'),
        url('UniNeueRegular-Italic.eot?#iefix') format('embedded-opentype'),
        url('UniNeueRegular-Italic.woff2') format('woff2'),
        url('UniNeueRegular-Italic.woff') format('woff'),
        url('UniNeueRegular-Italic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Uni Neue';
    src: url('UniNeueThin.eot');
    src: local('Uni Neue Thin'), local('UniNeueThin'),
        url('UniNeueThin.eot?#iefix') format('embedded-opentype'),
        url('UniNeueThin.woff2') format('woff2'),
        url('UniNeueThin.woff') format('woff'),
        url('UniNeueThin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
}

@font-face {
    font-family: 'Uni Neue';
    src: url('UniNeueBlack.eot');
    src: local('Uni Neue Black'), local('UniNeueBlack'),
        url('UniNeueBlack.eot?#iefix') format('embedded-opentype'),
        url('UniNeueBlack.woff2') format('woff2'),
        url('UniNeueBlack.woff') format('woff'),
        url('UniNeueBlack.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Uni Neue';
    src: url('UniNeueThin-Italic.eot');
    src: local('Uni Neue Thin Italic'), local('UniNeueThin-Italic'),
        url('UniNeueThin-Italic.eot?#iefix') format('embedded-opentype'),
        url('UniNeueThin-Italic.woff2') format('woff2'),
        url('UniNeueThin-Italic.woff') format('woff'),
        url('UniNeueThin-Italic.ttf') format('truetype');
    font-weight: 100;
    font-style: italic;
}



    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Uni Neue', sans-serif;
    }

    html {
        min-height: 100%;
        background-color: var(--primary);
    }

    *, button, input {
        border: 0;
        outline: 0;
        background: none;
        color: var(--black);
    }

    ul {
        list-style: none;
    }

    :root {
        --branco: #fff;
        --brancoGelo: #F3F7FF;
        --preto80: #232323;
        --preto90: #1E1E1E;
        --cinza: #D9D9D9;
        --vermelho: #9E005D;
        --vermelho-linear: linear-gradient(90deg, #9E005D 0.05%, #FF0000 100.01%);
        --vermelho-linear-puro: linear-gradient(90deg, #FF0000 0.05%, #FF0000 100.01%);
        --shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

`;
