export default function card() {
  return (
    <div className="">
      <div className="card-layout bg-halcyon-0">
        <a
          href="#paint"
          className="font-subtitle font-bold text-xl text-halcyon-500"
        >
          Paintings and comissions
        </a>
        <a href="#paint" className="font-description">
          Browse my previous artworks or request your own
        </a>
      </div>
      <div className="card-layout bg-halcyon-200 text-halcyon-950">
        <a href="#art" className="font-subtitle font-bold text-xl">
          Art merchandise
        </a>
        <a href="#art" className="font-description">
          Shop for notebokes and totebags
        </a>
      </div>
      <div className="card-layout bg-halcyon-800 text-halcyon-50 ">
        <a href="#youtube" className="font-subtitle font-bold text-xl">
          Youtube vlog
        </a>
        <a href="#youtube" className="font-description">
          New videos every tuesday
        </a>
      </div>
      <div className="card-layout bg-halcyon-400 text-halcyon-950">
        <a href={"https://forms.gle/wzv2cXzaPYGURGk97"} className="font-subtitle font-bold text-xl">
          Order form
        </a>
        <a href={"https://forms.gle/wzv2cXzaPYGURGk97"} className="font-description">
          Fill out your order details here!
        </a>
      </div>
      <div className="card-layout bg-halcyon-500 text-halcyon-950">
        <a href="#about" className="font-subtitle font-bold text-xl">
          About the artist
        </a>
        <a href="#about" className="font-description">
          Know more about the artist of Halcyon Art
        </a>
      </div>
    </div>
  );
}
