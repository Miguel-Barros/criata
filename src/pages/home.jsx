import { withProtected } from "../hook/route";;

function Home({ auth }) {
    const { logout } = auth;
    return (
        <div className="container">
            <p>Home page</p>
            <button onClick={logout}>LogOut</button>
        </div>
    )
}

export default withProtected(Home);