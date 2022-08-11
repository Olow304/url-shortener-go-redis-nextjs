import React, { useEffect } from "react";

import { HiOutlineLink } from "react-icons/hi";
import UrlOutput from "./UrlOutput";

function UrlShortenerComponent({
  onSubmitFunc,
  shortUrl,
  emptyFieldErrorMessage,
  setEmptyFieldErrorMessage
}) {
  useEffect(() => {
    setTimeout(() => {
      setEmptyFieldErrorMessage(false);
    }, 5000);
  }, []);

  return (
    <div className="w-full mr-4 p-6 flex  flex-col gap-8 px-10">
      <h1 className="text-xl text-[#124459] ">URL shortener</h1>
      <form className="flex w-full gap-4" onSubmit={onSubmitFunc}>
        <div className="flex gap-2 items-center bg-[#f8f8f8] p-2 rounded-xl flex-1">
          <HiOutlineLink
            size={22}
            className="text-[#40c5cd] hover:text-gray-200 cursor-pointer ml-3"
          />
          <input
            type="text"
            className="w-full p-2 bg-[#f8f8f8] rounded-md placeholder:text-xl placeholder:text-[#447f8c] text-xl focus:outline-0 text-[#447f8c] -ml-1"
            placeholder="Paste your URL here"
            name="url"
          />
        </div>
        <button className="bg-[#144a5f] px-6 rounded-md font-medium text-white">
          Shorten
        </button>
      </form>
      {emptyFieldErrorMessage ? (
        <div className="text-red-500 text-sm px-4">
          Please input a valid url
        </div>
      ) : null}

      <UrlOutput shortUrl={shortUrl} />
    </div>
  );
}

export default UrlShortenerComponent;
