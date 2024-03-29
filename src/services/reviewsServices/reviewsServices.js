const BASE_URL = "https://api.andigames.online";
//const BASE_URL = "http://127.0.0.1:8000";

export async function getReview(nickname, game_id) {
    try {
        const res = await fetch(`${BASE_URL}/reviews/${nickname}/${game_id}/`);
        if (!res.ok) {
            return null;
        }
        const data = await res.json();
        return data;
    } catch (error) {
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
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                game_id: game_id,
                user_nickname: user_nickname,
                review_date: review_date,
                rating: rating,
                commentary: commentary
             }),
        });

        if (!res.ok) {
            return null;
        }

        const data = await res.json();
        return data;
    } catch (error) {
        return null;
    }
}

export async function deleteReview(nickname, id, token) {
    try {
        const res = await fetch(`${BASE_URL}/reviews/${nickname}/${id}/delete`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'accept': 'application/json',
            },
            body: new URLSearchParams({ 
                nickname: nickname,
                id: id
             }).toString(),
        });
        if (!res.ok) {
            return null;
        }
        const data = await res.json();
        return data;
    } catch (error) {
        return null;
    }
}