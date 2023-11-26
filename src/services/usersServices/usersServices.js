const BASE_URL = "https://api.andigames.online";
// const BASE_URL = "http://127.0.0.1:8000";

export async function getUser(nickname) {
    try {
        const res = await fetch(`${BASE_URL}/users/${nickname}`);
        if (!res.ok) {
            throw new Error('Error en el servicio getUser');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error en el servicio getUser:', error);
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
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error en el servicio getUserDetails:', error);
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
        console.error('Error en el servicio etUserFollowersAndFollowing:', error);
        return null;
    }
}

export async function follow(nickname, follower, token) {
    try {
        const res = await fetch(`${BASE_URL}/users/${nickname}/followers/add/users/${follower}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
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
        console.error('Error en el servicio follow:', error);
        return null;
    }
}