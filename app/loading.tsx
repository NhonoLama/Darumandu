import loader from "@/assets/loader.gif";
import Image from "next/image";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image src={loader} alt="laoding" />
    </div>
  );
};

export default Loading;
