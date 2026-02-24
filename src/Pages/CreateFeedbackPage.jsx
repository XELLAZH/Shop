import FooterComponent from "../Components/FooterComponent";
import HeaderComponent from "../Components/HeaderComponent";
import { useState } from "react";
import { createReview } from "../Api/review/createReview"

export default function CreateFeedbackPage() {
    const [message, setMessage] = useState("");

    const sendFeedback = async () => {
        await createReview("adress", message);
        alert("Благодарим за отзыв!");
        setMessage("")
    }
    
    return (
        <>
            <HeaderComponent />
            <div className="min-h-[85vh]">
                <div className="flex w-[100vw] h-[70vh] flex-col justify-center items-center gap-15">
                    <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message} placeholder="Напишите свой отзыв...." autocorrect className="bg-gray-100 mt-10 w-[50vw] h-[30vh] rounded-2xl p-5 resize-none" name="" id=""></textarea>
                    <button onClick={sendFeedback} className="border-2 border-gray-700 p-2 rounded-md cursor-pointer">Оставить отзыв</button>
                </div>
            </div>
            <FooterComponent />
        </>
    )
}