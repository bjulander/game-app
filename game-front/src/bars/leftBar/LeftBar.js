import Orders from '../../orders/orders.js'
import '../../style/LeftBarStyle.css'

export default function leftBar() {
    return (
        <>
            <article className="LeftBarStyle">
                <Orders />
            </article>
        </>
    )
}

