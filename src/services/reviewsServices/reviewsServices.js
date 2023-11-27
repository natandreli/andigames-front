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

export async function addReview(game_id, user_nickname, review_date, rating, commentary, token) {
    try {
        const res = await fetch(`${BASE_URL}/reviews/add/${user_nickname}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'accept': 'application/json',
            },
            body: new URLSearchParams({ 
                game_id: game_id,
                user_nickname: user_nickname,
                review_date: review_date,
                rating: rating,
                commentary: commentary
             }).toString(),
        });

        console.log(res);

        if (!res.ok) {
            return null;
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error en el servicio addReview:', error);
        return null;
    }
}