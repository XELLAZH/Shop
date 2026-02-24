import { useState } from "react";
import { logoutUser } from "../Api/user/logoutUser";

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);

      await logoutUser();

      window.location.href = "/";
    } catch (error) {
      console.log(error);
      alert("Unexpected error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={isLoading}
        className="border-2 pt-2 pb-2 pr-3 pl-3 rounded-md cursor-pointer"
      >
        Выйти
      </button>
    </>
  );
}
