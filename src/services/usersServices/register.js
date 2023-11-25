import { login } from "./login";

const BASE_URL = "https://andigames-2c0b1de6c888.herokuapp.com";

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