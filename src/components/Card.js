import React from "react";

const Card = ({ image }) => {
    const tags = image.tags.split(",");

    // hover:scale-105 transition-transform duration-200 ease-out
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200 ease-out hover:shadow-lg hover:bg-gradient-to-t hover:from-teal-200 hover:text-cyan-500">
            <img src={image.webformatURL} alt="" className="w-full py-4" />
            <div className="px-6 py-3">
                <div className="font-bold text-indigo-900 text-xl mb-2">
                    Photo by {image.user}
                </div>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="inline-block bg-gray-200 rounded-full px-3 py-3 text-sm font-semibold text-gray-700 mr-2 mb-1"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Card;
