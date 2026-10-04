export type Characters = {
    id: number,
    image: string,
    name: string,
    status: string,
    species: string,

    // three additional fields I added myself
    gender: string, // Character's gender, e.g. "Male" or "Female"
    type: string, // Character's special type; the API may return an empty string

    //Origin is different because it is not a string.
    // It is an object containing a name and a URL, so I defined the types of its internal properties as well.

    origin: {
        name: string, // Name of the character's place of origin
        url: string // API URL for that origin location
    }

}