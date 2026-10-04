import type {Characters} from "./types.ts";
import styled from "styled-components";

// CSS style using in the page but in the React way
const AllCharacters = styled.div`
    display: flex;

    /* Put the character cards from left to right */
    flex-direction: row;

    /* Move cards to the next line when there is not enough space */
    flex-wrap: wrap;
    
    justify-content: center;

    width: 90%;
    margin: auto;
    padding: 2%;

    background-color: #eeeeee;
`;

const CharacterCard = styled.div`
    display: flex;

    /* Put the image and character information from top to bottom */
    flex-direction: column;

    width: 25%;
    margin: 2%;
    padding: 1%;

    background-color: white;
    border: 2px solid black;
    border-radius: 10px;

    text-align: center;

    /* Make the hover movement smoother */
    transition: transform 0.2s;

    /* Move the card up a little when the mouse is over it */
    &:hover {
        transform: translateY(-5px);
    }

    img {
        width: 100%;
        border-radius: 8px;
    }

    h2 {
        font-size: 24px;
        margin: 10px;
    }

    p {
        font-size: 16px;
        margin: 5px;
    }
`;



export default function RickAndMorty(props: {data: Characters[]}) {
    return (
        <AllCharacters>
            {
                props.data.map((char: Characters) =>
                    <CharacterCard key={char.id}>
                        <img src={char.image} alt={char.name}/>
                        <h2>{char.name}</h2>

                        <p>Status: {char.status}</p>
                        <p>Species: {char.species}</p>

                        {/* Three additional fields  (i just realized that if we don't have {}
                         it will automatically wrote in to the page content (new way to commend in the tsx*/}
                        <p>Gender: {char.gender}</p>
                        <p>Type: {char.type || "None"}</p>
                        <p>Origin: {char.origin.name}</p>
                    </CharacterCard>
                )
            }
        </AllCharacters>
    )
}