//const BASE_URL = "https://api.andigames.online";
const BASE_URL = "http://127.0.0.1:8000";

export async function handleSignup(singupValues) {
    try {
        const res = await fetch(`${BASE_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
            },
            body: JSON.stringify(singupValues),
        });

        if (res.status !== 200) {
            return res;
        }

        return res;
    } catch (error) {
        return 666;
    }
}