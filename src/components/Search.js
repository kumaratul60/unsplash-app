import React, { useState } from "react";

const Search = ({ searchText }) => {
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    };

    return (
        <header className="sticky top-0 flex items-center justify-between px-4 py-2  md:grid md:grid-cols-3 bg-[#F7F7F7] shadow-md p-3 md:px-10 z-50 md:py-4">
            <div className="ml-[-20px]">
                <a
                    href="https://atultheportfolio.netlify.app"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img
                        src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/image5-3.png?auto=format&q=60&fit=max&w=1000"
                        alt="icon"
                        className="hover:animate-bounce cursor-auto"
                        width={100}
                        height={80}
                    />
                </a>
            </div>

            <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
                <form onSubmit={onSubmit} className="w-full max-w-sm">
                    <div className="flex items-center rounded-lg border-2 border-teal-500 py-2 px-1">
                        <input
                            onChange={(e) => setText(e.target.value)}
                            className="appearance-none bg-transparent border-none w-full caret-blue-800 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text"
                            placeholder="Search image here..."
                        />
                        <button
                            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 active:scale-90 transition duration-150 ease-out text-sm border-4 text-white py-1 px-1 rounded"
                            type="submit"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </header>
    );
};

export default Search;
