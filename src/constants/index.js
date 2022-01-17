const base_url = "https://fedeperin-harry-potter-api.herokuapp.com/";

export const allCharactersGet = () => `${base_url}personajes`;
export const allSpellsGet = () => `${base_url}hechizos`;
export const allBooksGet = () => `${base_url}libros`
export const characterGet = (id) => `${base_url}personajes/${id}`;

