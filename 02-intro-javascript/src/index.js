const getImage = async() =>{

    try{
        const apiKey = 'ZIbSjQGe1RgnxJjWwhsXXPSFo36Bxz6h';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
    
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append(img); 
    }catch (error){
        console.error(error);
    }
}

getImage();

//const apiKey = 'ZIbSjQGe1RgnxJjWwhsXXPSFo36Bxz6h';
//
//const petition = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
//
//petition
//    .then (resp => resp.json())
//    .then (({data}) => {
//        const { url } = data.images.original 
//        console.log(url);
//
//        const img = document.createElement('img');
//        img.src = url;
//
//        document.body.append(img);
//    })
//    .catch(console.warn);