export const getData=async (url,renderFc)=>{
    const response=await fetch(url)
    const data=await response.json()
    renderFc(data)
}

 export const motto=["keep","your","eyes","peeled"]

    export const panelBackgrounds=[
        "https://source.unsplash.com/gYl-UtwNg_I/1500x1500",
        "https://source.unsplash.com/rFKUFzjPYiQ/1500x1500",
        "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57",
        "https://source.unsplash.com/ITjiVXcwVng/1500x1500",
        "https://source.unsplash.com/3MNzGlQM7qs/1500x1500",
        "https://source.unsplash.com/tuEtpjghVmg/1500x1500",
        ];