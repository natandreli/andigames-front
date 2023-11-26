import { login } from "./login";

// const BASE_URL = "https://api.andigames.online";
const BASE_URL = "http://127.0.0.1:8000";

export async function handleSignup(singupValues) {
    try {
        const res = await fetch(`${BASE_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(singupValues).toString(),
        });

        if (res.status !== 200) {
            return res.status;
        }

        const resStatusLogin = login({ username: singupValues.nickname, password: singupValues.password })

        return res.status;
    } catch (error) {
        console.error("Error en el servicio de inicio de sesión:", error);
        return 666;
    }
}