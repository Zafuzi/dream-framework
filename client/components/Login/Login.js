export const LoginOrRegister = {
    data: {
        action: "login",
        email: "",
        username: "",
        password: "",
    },
    helpers: {
        isLogin(element, instance)
        {
            return instance.action === "login";
        },
        actionName(element, instance)
        {
            return instance.action === "login" ? "Login" : "Register";
        }
    },
    events: {
        "submit loginOrRegisterForm": async function (event, instance) {
            event.preventDefault();

            const { action, email, username, password } = instance.data;

            const result = await Server.call(action, { email, username, password });

            if(result.error)
            {
                return alert(result.error);
            }

            // do something with result.data like login
            if(action === "register")
            {
                const loginResult = await Server.call("login", { username, email, password });

                if(loginResult.error)
                {
                    return alert(loginResult.error);
                }
            }

            // redirect to home
        },
        "change input[name=username]": function (event, instance) {
            instance.username = event.target.value;
        },
        // etc...
    }
}