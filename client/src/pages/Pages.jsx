import { pagesUrl } from "../assets/mangaImages";
import Section from "../components/Section";
import { RightLine, LeftLine } from "../components/design/Lines";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Pages = () => {
  const [toggleView, setToggleView] = useState(true);
  const [selectedPage, setSelectedPage] = useState(1);
  const [displayView, setDisplayView] = useState("Long Strip Page");
  const [isChecked, setIsChecked] = useState(false);
  const toggle = () => {
    setIsChecked(!isChecked);
    handleToggleClick();
  };

  function handlePageChange(e) {
    const value = e.target.value;
    console.log(value);
    setSelectedPage(value);
  }

  function handleToggleClick() {
    if (toggleView) {
      setToggleView(false);
      setDisplayView("Single Page");
    } else {
      setToggleView(true);
      setDisplayView("Long Strip Page");
      setSelectedPage(selectedPage);
    }
  }

  function handleNextPageClick() {
    const value = parseInt(selectedPage, 10);
    if (value < pagesUrl.length) {
      setSelectedPage(value + 1);
      window.scrollTo(0, 0);
    } else if (value === pagesUrl.length) {
      setSelectedPage("loading");
      setSelectedPage(1);
      window.scrollTo(0, 0);
    }
  }

  return (
    <Section crosses customPaddings="py-8 lg:py-24 xl:py-10">
      <div className="container relative z-2 flex justify-center">
        <div className="relative ">
          <div className="flex flex-col items-center justify-center">
            <div
              className="flex mt-5 p-3
                sm:flex-row flex-col justify-center 
                items-center rounded-md
                border border-n-6"
            >
              <label
                htmlFor="toggle"
                className="flex items-center cursor-pointer"
              >
                <p
                  className="font-code 
                  text-n-1 text-md mx-2 text-center"
                >
                  {displayView}
                </p>
                <div className="flex items-center">
                  <input
                    id="toggle"
                    type="checkbox"
                    className="sr-only"
                    checked={isChecked}
                    onChange={toggle}
                  />
                  <div className="w-12 h-4 border border-n-6 rounded-full"></div>
                  <div
                    className={`dot absolute w-6 h-6 ${
                      isChecked ? "bg-purple-600" : "bg-n-6"
                    } rounded-full shadow 
                    ${isChecked ? "translate-x-full" : ""} transition`}
                  ></div>
                </div>
              </label>

              {!toggleView && (
                <select
                  className="p-1 m-3 border 
                  border-n-6 text-n-1 
                    font-code text-sm cursor-pointer"
                  onChange={handlePageChange}
                >
                  {pagesUrl.map((pageUrl, index) => {
                    return (
                      <option
                        key={index}
                        value={index + 1}
                        selected={selectedPage == index + 1}
                      >
                        Page: {index + 1}
                      </option>
                    );
                  })}
                </select>
              )}
            </div>
            <div
              className="w-[19rem] max-lg:w-full
            h-full px-6 bg-n-8 border border-n-6 rounded-[2rem]
            lg:w-auto py-8 my-4 text-color-1"
            >
              <h4
                className="h4 mb-4 
                text-center font-bold 
                font-code uppercase"
              >
                Super War
              </h4>
              <div className="rounded-xl overflow-hidden">
                {pagesUrl.map((pageUrl, index) =>
                  toggleView ? (
                    <img
                      key={index}
                      src={pageUrl}
                      width={480}
                      alt={`image ${index}`}
                    />
                  ) : selectedPage == index + 1 ? (
                    <img
                      key={index}
                      src={pageUrl}
                      width={480}
                      alt={`image ${index}`}
                      onClick={handleNextPageClick}
                      className="cursor-pointer"
                    />
                  ) : null
                )}
              </div>
              <div className="h-auto mb-6"></div>
            </div>
          </div>
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default Pages;
