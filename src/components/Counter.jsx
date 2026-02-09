import { useState } from 'react';

const Counter = () => {
    // State: value that can change
    const [count, setCount] = useState(0);

    return (
        <div className="p-8">
            <p className="text-2xl mb-4">Count: {count}</p>

            <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
            >
                Increase
            </button>

            <button
                onClick={() => setCount(count - 1)}
                className="bg-red-600 text-white px-4 py-2 rounded"
            >
                Decrease
            </button>
        </div>
    );
};

export default Counter;