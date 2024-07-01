export const API_OPTIONS  = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer'+ process.env.REACT_APP_TMDB_KEY
  }
}; 

export const IMG_CDN_URL= "https://image.tmdb.org/t/p/w500"
export const SUPPORTED_LANGUAGES = [
  {code: 'en', name: 'English'},
  {code: 'hi', name: 'Hindi'},
  {code: 'te', name: 'Telugu'},
  {code: 'ta', name: 'Tamil'},
  {code: 'mr', name: 'Marathi'},
  {code: 'fr', name: 'French'},
  {code: 'es', name: 'Spanish'},
  {code: 'de', name: 'German'},
  {code: 'it', name: 'Italian'},
  {code: 'pt', name: 'Portuguese'},
]

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
