export default function hero() {
  return (
    <div className="flex h-screen scroll-ml-6 flex-col">
      <div
        className="
          relative flex h-full items-center justify-center
          bg-cover bg-fixed bg-center bg-no-repeat
        "
        style={{
          backgroundImage: `url("/images/transitions/transition-6.jpeg")`,
        }}
      ></div>
    </div>
  );
}
