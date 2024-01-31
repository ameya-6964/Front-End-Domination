const Card = ({ name }) => {
  return (
    <div className="flex justify-between ">
      <div className="w-52 bg-zinc-100  rounded-md ">
        <div className=" h-32 bg-zinc-400">
          <img
            className="object-cover"
            src="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Amazon"
          />
        </div>
        <div className="w-full px-3 py-4">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            voluptas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
