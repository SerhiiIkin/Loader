import Loader from "./components/Loader/Loader";
import { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("https://dummyjson.com/carts");
            const responseData = await response.json();
            setData(responseData.carts);
        } catch (error) {
            setError(error.message);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {!isLoading && data && !error ? (
                <div>
                    {data.map((d) => (
                        <div key={d.id}>
                            <h1>{d.id}</h1>
                        </div>
                    ))}
                </div>
            ) : !error ? (
                <Loader />
            ) : (
                <div> {error} </div>
            )}
        </>
    );
}

export default App;
