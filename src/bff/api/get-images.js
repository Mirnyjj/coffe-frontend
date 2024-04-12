import { transformImages } from "../transformers";

export const getImages = () => 
fetch("http://localhost:3000/foto")
.then((loadedImages) => loadedImages.json())
.then((loadedImages) => {
    return loadedImages.map(transformImages);
});