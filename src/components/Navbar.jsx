import { Disclosure } from "@headlessui/react";
import DisclosureButton from "../components/buttons/DiscolosureButton";

// imported nav data to ensure constant navigation paths
import navData from "../constants/nav.json";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-chineseb">
      {({ open }) => (
        <>
          <div className="mx-auto  px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton open={open}></DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex my-auto items-center">
                  <h1 className="text-gray-400 font-bold text-2xl">
                    <a href={navData.root.path}>{navData.root.name}</a>
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navData.pages.map((elem, i) => (
                    <NavLink
                      key={i}
                      className="inline-flex text-xl items-center border-b-2 border-transparent px-1 pt-1 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-400"
                      to={elem.path}
                      style={({ isActive, isPending }) => {
                        return {
                          color: isActive ? "white" : "",
                          borderColor: isActive ? "rgb(209 213 219 / 1)" : "",
                          // backgroundColor: isActive ? "white" : "",
                          // borderRadius: isActive ? "2px" : "",
                        };
                      }}
                      end
                    >
                      {elem.name}
                    </NavLink>
                    // </a>
                  ))}
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className="hover:bg-black rounded-full p-1 hover:text-white dark:text-gray-500"></button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {navData.pages.map((elem, i) => (
                <Disclosure.Button
                  key={i}
                  as="a"
                  href={elem.path}
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  {elem.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
