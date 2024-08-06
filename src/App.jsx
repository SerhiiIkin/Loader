import Loader from "./components/Loader/Loader";
import { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch("https://dummyjson.com/carts");
        const responseData = await response.json();
        setData(responseData.carts);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log(data);

    return (
        <>
            {!isLoading && data ? (
                <div>
                    {data.map((d) => (
                        <div key={d.id}>
                            <h1>{d.id}</h1>
                        </div>
                    ))}
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
}

export default App;
