const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'd664409125ce5777228fbfb9b318c4ee'



export const getFilms = async () => {
    const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`)
    if (response.ok) return response.json()
}

export const getFilmByQuery = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`)
    if (response.ok) return response.json()
}   

export const getFilmById = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    if (response.ok) return response.json()
} 


export const getCastById = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
    if (response.ok) return response.json()
}

export const getReviewById = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`)
    if (response.ok) return response.json()
}