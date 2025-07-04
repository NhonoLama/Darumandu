import loader from "@/assets/loader.gif";
import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Image src={loader} alt="laoder" height={150} width={150} />
    </div>
  );
};

export default LoadingPage;
