// is it possible to have user enter in email/password and
// sign them up if they aren't a user already
// and log them in if they are?  MVP!!!

async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector("#username-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    if (username && password) {
        const response = await fetch("/api/users/login", {
            method: "post",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/generate");
        } else {
            alert(response.statusText);
        }
    }
}

document
    .querySelector("#login-form")
    .addEventListener("submit", loginFormHandler);