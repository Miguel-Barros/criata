import { withProtected } from "../hook/route";
import styles from "../styles/Edit.module.css"

function Edit({auth}) {
    const { user } = auth;
    return(
        <div className={styles.container}>
        </div>
    )
}

export default withProtected(Edit);