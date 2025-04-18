import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "Help Center", path: "/help" },
  { name: "Contact", path: "/contact" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white w-full">
      <nav
        aria-label="Global"
        className="mx-auto flex  items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="logo" src="/logo.png" className="h-12 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block py-2 pr-4 pl-3 ${
                location.pathname === item.path
                  ? "text-blue-600"
                  : "text-gray-700"
              } hover:text-blue-600`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-5 cursor-pointer">
          <Link
            to="/construction"
            className="bg-white hover:bg-primary text-primary hover:text-white font-medium border border-primary px-6 py-2 rounded-full"
          >
            Log in
          </Link>

          <Link
            to="/construction"
            className="hover:bg-white bg-primary hover:text-primary text-white font-medium border border-primary px-6 py-2 rounded-full"
          >
            Signup
          </Link>
          {/* <p
            
            className="bg-white hover:bg-primary text-primary hover:text-white font-medium border border-primary px-6 py-2 rounded-full"
          >
            Log in
          </p>

          <p
            
            className="hover:bg-white bg-primary hover:text-primary text-white font-medium border border-primary px-6 py-2 rounded-full"
          >
            Signup
          </p> */}
          <img
            src="/header/translate.png"
            alt="translate"
            className="object-contain h-12"
          />
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/logo.png" className="h-8  w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 ">
              <div className="space-y-2 py-6 ">
                {navItems.map((item , i) => (
                  <Link
                  key={i}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 ">
                <p className=" hover:text-primary -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Log in
                </p>
                <p className="hover:text-primary -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Sign up
                </p>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
