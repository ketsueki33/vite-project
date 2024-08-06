import { useState } from "react";

interface Props {
    name: string;
    cal: number;
    price: number;
    img: string;
}

const CartItem = ({ name, img, cal, price }: Props) => {
    const [count, setCount] = useState<number>(1);
    const handleUp = () => {
        setCount((prev) => prev + 1);
    };
    const handleDown = () => {
        setCount((prev) => prev - 1);
    };

    return (
        <div className="bg-primary-bg w-full flex p-[10px]">
            <img className="h-[80px] w-[80px] rounded-sm" src={img} alt="" />
            <div className="flex flex-col px-2 w-full">
                <p className="text-md text-primary-text font-semibold">{name}</p>
                <p className="text-sm text-gray">{cal} kcal</p>
                <div className="flex justify-between mt-auto">
                    <p className="text-primary-text font-bold text-lg">$ {price}</p>
                    <div className="py-1 px-2 border-primary border text-primary rounded-lg">
                        <button onClick={handleDown}>-</button>
                        <span className="px-4">{count}</span>
                        <button onClick={handleUp}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CartItem;
