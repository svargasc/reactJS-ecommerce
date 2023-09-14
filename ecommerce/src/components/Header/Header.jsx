import React, { useState } from "react";
import logo from "../../../public/images/avatar.png";
import shop from "../../../public/images/carrito-de-compras.png";
import { NavLink } from "react-router-dom";
import "../Header/header.css";

export const Header = ({ count, selectedProducts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const viewCart = () => {
    setIsModalOpen(true);
  };

  const closeCart = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="flex justify-center items-center w-[100%] h-24 bg-[#573c7f]">
        <nav className="w-[60%] flex justify-between items-center h-20">
          <img className="w-[8%]" src={logo} alt="" />
          <ul className="w-[60%] flex justify-between items-center">
            <li className="text-[#9c7ac5] font-bold text-lg">
              <NavLink to="/">Products</NavLink>
            </li>
            <li className="text-[#9c7ac5] font-bold text-lg">
              <NavLink to="">Register</NavLink>
            </li>
            <li className="text-[#9c7ac5] font-bold text-lg">
              <NavLink to="">Login</NavLink>
            </li>
            <li className="text-[#9c7ac5] font-bold text-lg flex">
              <img
                src={shop}
                onClick={viewCart}
                className="cursor-pointer"
                alt=""
              />
              <span className="bg-[#331f52] h-full w-6 rounded-full text-center">
                {count}
              </span>
            </li>
            <li>
              
            </li>
          </ul>
        </nav>
      </header>
      <br />
      {isModalOpen && (
                <>
                  <div className="flex justify-center">
                    <div className="flex justify-center absolute z-20 w-96">
                      <div className="modal-overlay" onClick={closeCart}></div>
                      <div className="modal h-auto">
                        <div className="modal-content flex flex-col items-center">
                          <button
                            className="close-button bg-violet-950 text-[#e23434] w-96 rounded-md text-2xl font-bold"
                            onClick={closeCart}
                          >
                            Close car
                          </button>
                          <br />
                          <ul className="bg-[#9c7ac5] flex justify-center flex-col items-center w-96">
                            {selectedProducts.map((product, i) => (
                              <>
                                <li
                                  className="text-center w-96"
                                  key={i}
                                >
                                  {product.title}
                                </li>
                                <li>
                                  <img
                                    src={product.image}
                                    className="w-16"
                                    alt=""
                                  />
                                </li>
                                <li>
                                {product.price}
                                </li>
                                <hr className="h-[2px] bg-black w-96" />
                              </>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
    </>
  );
};
