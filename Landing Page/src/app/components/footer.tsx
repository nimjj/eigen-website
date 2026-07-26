import logoDark from "../../imports/4-Photoroom.png";

export function Footer() {
  return (
    <div className="bg-zinc-900 pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-zinc-800 pt-8 sm:flex-row">
          <img src={logoDark} alt="eigen." className="h-14 sm:h-20 w-auto object-contain" />
          <div className="flex gap-8 text-sm text-zinc-500">
            <a href="#" className="transition-colors hover:text-white">About Us</a>
            <a href="#ecosystem" className="transition-colors hover:text-white">Services</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact Us</a>
          </div>
          <span className="text-sm text-zinc-600">© 2026 Eigen</span>
        </div>
      </div>
    </div>
  );
}
