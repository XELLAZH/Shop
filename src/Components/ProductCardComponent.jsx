export default function ProductCardComponent (props) {
    if (props.inCart) {
        return (
        <div className="flex flex-col justify-center p-15 pt-10 rounded-md border-gray-700 border-2 items-center min-w-[60vw] max-w-[80vw] bg-gray-100">
            <p className="mb-8 text-2xl font-bold">{props.name}</p>
            <div className="flex justify-between gap-72">
                <div className="flex flex-row gap-100">
                    <img src={props.photo} alt="product-photo" />
                    <div className="">
                        <p>Цена: {props.price} рублей</p>
                        <button className="mt-3 border border-gray-700 p-1 pr-1.5 pl-1.5 rounded-sm cursor-pointer">Удалить из корзины</button> 
                    </div>
                </div>
            </div>
        </div>
    )
    } else{
        return (
        <div className="flex flex-col justify-center p-15 pt-10 rounded-md border-gray-700 border-2 items-center min-w-[60vw] max-w-[80vw] bg-gray-100">
            <p className="mb-8 text-2xl font-bold">{props.name}</p>
            <div className="flex justify-between gap-72">
                <div className="flex flex-col gap-10">
                    <img src={props.photo} alt="product-photo" />
                    <div className="">
                        <p>Цена: {props.price} рублей</p>
                        <button className="mt-3 border border-gray-700 p-1 pr-1.5 pl-1.5 rounded-sm cursor-pointer">Добавить в корзину</button> 
                    </div>
                </div>
                <div className="max-w-[18vw] text-wrap">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
    }
}