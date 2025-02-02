@import url('https://fonts.cdnfonts.com/css/pokemon-solid'); /* Pokémon font */

body {
    background-color: #A4C639;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: 'Pokemon Solid', sans-serif;
}

.gameboy-screen {
    width: 320px;
    height: 400px;
    background-color: #F5DB4C;
    border: 8px solid #3A5BA0;
    border-radius: 12px;
    text-align: center;
    padding: 20px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}

h1 {
    color: #3A5BA0;
    font-size: 22px;
    text-shadow: 2px 2px 2px #FFCC00;
}

.message {
    font-size: 14px;
    color: #333;
    margin: 10px 0;
}

.pikachu {
    width: 100px;
    margin: 10px 0;
}

#break-button {
    background-color: #FF3C00;
    color: white;
    font-size: 16px;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

#break-button img {
    width: 20px;
}

#break-button:hover {
    background-color: #E60000;
}
