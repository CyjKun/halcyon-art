import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
export default function header() {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="sm:hidden sm:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0"></div>
        <div className="w-96 shrink-w-80 sm:order-1 flex justify-center">
          <a className="font-bold uppercase text-3xl">Halcyon Art</a>
        </div>
        <div className="w-96 order-2 flex justify-center">
          <div className="flex gap-6">
            <a>
              <ImFacebook size={25}/>
            </a>
            <a>
              <ImTwitter size={25}/>
            </a>
            <a>
              <ImYoutube size={25}/>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
