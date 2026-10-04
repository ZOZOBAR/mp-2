import {useEffect, useState} from "react";
import type {Characters} from "./types.ts";

// in order to follow the requirement in the Mp2 about2 Components / Single-tasking principle
// Import the child component that will receive the API data and build the UI
import Rick_And_Morty from "./Rick_And_Morty.tsx";

export default function App() {
    const [data, setData] = useState<Characters[]>([]) //// Store the character array returned by the API

    useEffect(() => {  //for the side effect
            async function fetchData() {  //handle the side effect

                const rawData = await fetch("https://rickandmortyapi.com/api/character");
                // https://rickandmortyapi.com/api/character
                const actualData = await rawData.json() // OOP way to | data
                setData(actualData.results); //using the OOP - refer to the data
                // all above was all declaring the function
            }

            fetchData().then(() => console.log("yeah"))
                .catch((e) => console.log(" this error occurred:" + e));

        }
        , [data.length]);

//After the components is displayed, request the role data of Rick and Morty,
// retrieve the role array and store it in React state. Let's look at it in the order of operation.



// App.tsx only handles fetching/storing data; the child component handles displaying it
    return (
        <>
            <Rick_And_Morty data={data}/>
        </>
    )

}


