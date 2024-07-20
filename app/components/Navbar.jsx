"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link href="/">
          <div className="text-2xl font-bold">{`CODESQUAD`}</div>
        </Link>
        <div className="nav-toggle">
          <button
            className="p-2 text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className={`nav-list`}>
          <Link className="nav-item" href="/events">
            Events
          </Link>
          <Link className="nav-item" href="/members">
            Members
          </Link>
          <Link className="nav-item" href="/clubs">
            Clubs
          </Link>
          <Link className="nav-item" href="/contact-us">
            Contact
          </Link>
        </div>
        <div
          className={`mobile-nav-list ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-black focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center mt-10 space-y-4">
            <Link className="nav-item-mobile" href="/events">
              Events
            </Link>
            <Link className="nav-item-mobile" href="/members">
              Members
            </Link>
            <Link className="nav-item-mobile" href="/clubs">
              Clubs
            </Link>
            <Link className="nav-item-mobile" href="/contact-us">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
