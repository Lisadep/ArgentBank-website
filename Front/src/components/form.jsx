function Form() {
    return (
        <form>
            <div className="input-wrapper">
                <label>Username</label>
                <input
                    type="text"
                    id="username"
                    value="email"
                    />
            </div>
            <div className="input-wrapper">
                <label>Password</label>
                <input
                    type="password"
                    id="password"
                    value="password"
                    />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label>Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">Sign In</button>

        </form>
    )
}

export default Form