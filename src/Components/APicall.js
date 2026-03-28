

export const getMovie = async () => {
    let Apikey = `https://api.themoviedb.org/3/movie/popular?api_key=acfa9e01b580cd93945aab2d60c7cefd&language=en-US&page=1`;
    const res = await fetch(Apikey);
    const data = await res.json();
    return data.results;
}


export const getCategoryMovie = async(category)=>{
    let Apikey = `https://api.themoviedb.org/3/movie/${category}?api_key=acfa9e01b580cd93945aab2d60c7cefd&language=en-US`;
    const res = await fetch(Apikey);
    const data = await res.json();
    return data.results;
}