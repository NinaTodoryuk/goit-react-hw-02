import css from "./Descriptions.module.css"

export default function Descriptoins() {
    return (
        <div>
            <h1 className={css.title}>Slip Happens Cafe</h1>
            <p className={css.text}>
            Please leave your feedback about our service by selecting one of the
            options below.
            </p>
        </div>
    )
}