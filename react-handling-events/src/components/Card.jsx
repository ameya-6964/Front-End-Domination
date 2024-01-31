const Card = () => {
  const data = [
    {
      songName: "Mahi Ve",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    },
    {
      songName: "Hai Junoon",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    },
    {
      songName: "Knaan Waving Flag",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    },
  ];
  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-4 justify-center items-center">
      {data.map((song, index) => (
        <div key={index} className="w-60 song px-3 py-2 bg-zinc-100 rounded">
          <h3 className="font-semibold text-xl">{song.songName}</h3>
          <p className="text-sm mt-2">{song.description}</p>
          <button
            onClick={() => {
              alert(`Downloading ${song.songName} Song`);
              setTimeout(() => {
                alert(`${song.songName} Downloaded`);
              }, 500);
            }}
            className="px-2 py-1 bg-blue-800 text-xs font-semibold text-white rounded-md mt-2"
          >
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
