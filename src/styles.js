const CSS = `:root {
    --primary: #0d1b2a;
    --secondary: #e6e6e3;

}

.jumbotron {
    height: 20vh;
    background-color: var(--primary);
    color: var(--secondary);
    display: flex;
    align-items: center;
    justify-content: center;
}

.card {
    margin: 2%;
    width: fit-content;
}`

module.exports = CSS;
