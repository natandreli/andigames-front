const BASE_URL = "https://api.andigames.online";

export async function searchGames(title) {
    try {
        const res = await fetch(`${BASE_URL}/games/search/${title}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return null;
    }
}