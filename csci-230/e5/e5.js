const imgPaths = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg', 'images/img5.jpg']; //i could think of any other way to fetch all the images from a folder

async function fetchImage(path) { //i dont think this function was completely neccessary but it looks cleaner and more organized this way
    const response = await fetch(path);

    blob = await response.blob();

    return URL.createObjectURL(blob);
}

let imgData = [];

async function cacheBlobData(){ //this is async so that it waits for every prommise to resolve when calling fetchImage so the imgData with blobs fills ccoorectly and asynchronously
    for (const path of imgPaths) {
        const img = await fetchImage(path);
        imgData.push(img);
    }
}

let posInArr = 1

cacheBlobData() //caches images data just once in its respective array
    .then(() => {
        setInterval(() => { //every 5 seconds it sets the src to a new image. src is img1 by default
            document.querySelector("#image").src = imgData[posInArr]
            console.log(posInArr)
            if(posInArr < 4){
                posInArr++;
            }else{
                posInArr = 0;
            }
        }, 5000) 
    }).catch(err => {
        console.error(err);
    })
    

