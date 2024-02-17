

const VideoTitle = (data) =>{

    const { title, overview } = data.data;
    console.log(data)
    return (
        <div className="w-screen aspect-video pt-[20%] px-18 absolute text-white bg-gradient-to-r from-black">
          <div className="mx-20">
          <h1 className="text-4xl font-bold w-2/4">{title}</h1>
          <p className="py-7 text-lg w-1/3">{overview}</p>
          <div className="flex -mx-2">
            <button className="px-11 rounded-md py-3
             text-black font-bold bg-white 
             mx-2 hover:bg-opacity-85"> ▶ Play</button>
            <button className="px-10 rounded-md py-3 text-white 
            font-bold bg-gray-500 mx-2 
            bg-opacity-50 hover:bg-opacity-80">ⓘ More Info</button>
          </div>
          </div>
        </div>
      );
      
}

export default VideoTitle;