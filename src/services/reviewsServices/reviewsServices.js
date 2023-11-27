const BASE_URL = "https://api.andigames.online";
//const BASE_URL = "http://127.0.0.1:8000";

export async function getReview(nickname, game_id) {
    try {
        const res = await fetch(`${BASE_URL}/reviews/${nickname}/${game_id}`);
        if (!res.ok) {
            return null;
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error en el servicio getUser:', error);
        return null;
    }
}