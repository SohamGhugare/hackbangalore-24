import { useLockBodyScroll } from "@uidotdev/usehooks";
import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  useLockBodyScroll();

  return (
    <div
      className={`fixed z-50 inset-0 overflow-hidden flex justify-center items-center`}
    >
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="z-50">
        render(
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#69d18dca"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
        )
      </div>
    </div>
  );
}
