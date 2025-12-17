import { FaRegUserCircle } from "react-icons/fa";
import SecondaryButton from "./SecondaryButton";

export default function ButtonAccount() {
  const handleRedirect = () => {
    window.open('https://migestarcoop.com.ar/GrandBourg/login', '_blank')
  }

  return (
    <SecondaryButton
      onClick={handleRedirect}
      rounded="full"
    >
      <FaRegUserCircle className="mb-0.5" size={18} />
      <span className="mr-1">Mi cuenta</span>
    </SecondaryButton>
  );
}
