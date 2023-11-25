const BASE_URL = "https://andigames-2c0b1de6c888.herokuapp.com";

export async function handleLogin(credentials) {
    try {
        console.log(credentials)
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

        document.cookie = `accessToken=${accessToken}; path=/; max-age=31536000; secure; samesite=strict`;
        document.cookie = `accessUsername=${accessUsername}; path=/; max-age=31536000; secure; samesite=strict`;

        console.log(document.cookie)
        return res.status;
    } catch (error) {
        console.error("Error en el servicio de inicio de sesión:", error);
        return 666;
    }
}
