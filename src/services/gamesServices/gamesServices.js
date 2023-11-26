//const BASE_URL = "https://api.andigames.online";
const BASE_URL = "http://127.0.0.1:8000";

export async function searchGame(game_id) {
    try {
        const res = await fetch(`${BASE_URL}/${game_id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return null;
    }
}

export async function searchGames(title) {
    try {
        const res = await fetch(`${BASE_URL}/games/search/${title}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return null;
    }
}