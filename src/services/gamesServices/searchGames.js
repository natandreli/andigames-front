const BASE_URL = "https://andigames-2c0b1de6c888.herokuapp.com";

export async function searchGames(title) {
    try {
        const res = await fetch(`${BASE_URL}/games/search/${title}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error en el servicio searchGames:', error);
        return null;
    }
}