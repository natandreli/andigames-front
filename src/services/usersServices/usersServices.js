const BASE_URL = "https://api.andigames.online";
//const BASE_URL = "http://127.0.0.1:8000";

export async function getUser(nickname) {
    try {
        const res = await fetch(`${BASE_URL}/users/${nickname}`);

        if (!res.ok) {
            return null;
        }
        const data = await res.json();
        return data;
    } catch (error) {
        return null;
    }
}

export async function getUsers() {
    try {
        const res = await fetch(`${BASE_URL}/users`);

        if (!res.ok) {
            return null;
        }
        const data = await res.json();
        return data;
    } catch (error) {
        return null;
    }
}

export async function getUserDetails(nickname) {
    try {
        const res = await fetch(`${BASE_URL}/users/${nickname}/details`);
        if (!res === 200) {
            return null;
        }

        const data = await res.json();
        return data;
    } catch (error) {
        return null;
    }
}

export async function getUserFollowersAndFollowing(nickname) {
    try {
        const res = await fetch(`${BASE_URL}/users/${nickname}/followers&Following`);
        if (!res.ok) {
            throw new Error('Error en el servicio etUserFollowersAndFollowing');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        return null;
    }
}

export async function follow(nickname, follower, token) {
    try {
        const res = await fetch(`${BASE_URL}/users/${nickname}/followers/add/users/${follower}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'accept': 'application/json',
            },
            body: new URLSearchParams({ 
                nickname: nickname,
                follower: follower
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

export async function unfollow(nickname, follower, token) {
    try {
        const res = await fetch(`${BASE_URL}/users/${nickname}/followers/delete/users/${follower}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'accept': 'application/json',
            },
            body: new URLSearchParams({ 
                nickname: nickname,
                follower: follower
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