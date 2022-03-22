import {
    createGlobalStyle,
    ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components';

const theme = {
    //shadows
    shadow: '#2F80ED',
};

export const ThemeProvider = ({ children }) => {
    return (
        <StyledComponentsThemeProvider theme={theme}>
            {children}
        </StyledComponentsThemeProvider>
    );
};

export const GlobalTheme = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, b, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        background-color: #170627;
        font-family: 'Be Vietnam Pro', sans-serif !important;
    }
    #root {
        max-width: 1440px;
        margin: auto;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    img {
        max-width: 100%;
    }
    a {
        text-decoration: none;
    }
    a:hover {
        color: inherit;
    }

    // data-title
    * [data-title]:hover:after {
        content: attr(data-title);
        position: absolute;
        padding: 2px 6px;
        width: max-content;
        height: -webkit-fill-available;
        top: 30px;
        z-index: 5;

        font-family: Be Vietnam;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;

        display: flex;
        align-items: center;

        background: #220a38;
        border: 1px solid #7e3bdc;
        color: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
    }
`;
