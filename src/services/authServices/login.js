// const BASE_URL = "https://api.andigames.online";
const BASE_URL = "http://127.0.0.1:8000";

export async function handleLogin(credentials) {
    try {
        const res = await fetch(`${BASE_URL}/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(credentials).toString(),
        });

        if (res.status !== 200) {
            return res.status;
        }

        const data = await res.json();
        const accessToken = data.access_token;
        const accessUsername = data.nickname;

        document.cookie = `accessToken=${accessToken}; path=/; max-age=7200; secure; samesite=strict`;
        document.cookie = `accessUsername=${accessUsername}; path=/; max-age=7200; secure; samesite=strict`;

        return res.status;
    } catch (error) {
        console.error("Error en el servicio de inicio de sesión:", error);
        return 666;
    }
}
