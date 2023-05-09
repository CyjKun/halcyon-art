import Image from "next/image";
import Link from "next/link"

export default function author() {
  return (
    <div className="author flex py-5">
      <Image src={"/images/Portrait.png"} width={80} height={80} className="rounded-full"></Image>
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"} className="text-md font-bold text-gray-800 hover:text-gray-600">Renztelle Miclat</Link>
        <span className="text-sm text-gray-500">Owner of Halcyon Art</span>
      </div>
    </div>
  );
}
