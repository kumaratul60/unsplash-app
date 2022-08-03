import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Search from "./components/Search";

function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const images = await fetch(
                `https://pixabay.com/api/?key=29018305-1516807b1ee96fe534541050e&q=${term}&image_type=photo&pretty=true`
            );
            const jsonData = await images.json();
            setImages(jsonData.hits);
            setIsLoading(false);
            // console.log("🚀", jsonData);
        };
        fetchData().catch(console.error);
    }, [term]);

    return (
        <div className="w-full mx-auto ">
            <Search searchText={(text) => setTerm(text)} />

            {!isLoading && images.length === 0 && (
                <h1 className="text-5xl text-center mx-auto mt-32">
                    No Images Found
                </h1>
            )}

            {isLoading ? (
                <div className="flex items-center justify-center mt-20">
                    <div class="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="lg:justify-center grid grid-cols-2 lg:flex lg:flex-wrap gap-4 ">
                    {images.map((image) => (
                        <Card key={image.id} image={image} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
