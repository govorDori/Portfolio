export const getData=async (url,renderFc)=>{
    const response=await fetch(url)
    const data=await response.json()
    renderFc(data)
}

 export const motto=["keep","your","eyes","peeled"]

    export const panelBackgrounds=[
        "https://i.ibb.co/NKpFKbm/let-lt-s-2.jpg",
        "https://i.ibb.co/4V4HGT9/rose-calloway.jpg",
        "https://i.ibb.co/vk07SXr/286ea3a0-8ff4-4df8-a88e-eda1d7b56008.jpg",
        "https://i.ibb.co/xmJKCS0/a087e151-5c52-4241-a0fa-9418fce35cdc.jpg"
        ];

       