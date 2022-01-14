import axios from "axios";

  const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=mkU1h2s1npa1T7nZj52Cm80ysfXfhLv7`;
    let gifs=[];
    await axios.get(`${url}`)
        .then(response => {
            
            const { data } = response.data; //desestructurar  response.data.data
             gifs=data.map(img=>{
                return {
                    id:img.id,
                    title:img.title,
                    url:img.images?.downsized_medium.url
                }
            });
            
        });
        return gifs;
}

export{
    getGifs
};