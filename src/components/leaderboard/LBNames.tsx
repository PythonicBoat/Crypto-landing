import { WINNERS } from "@/data/winners";

const LBNames = () => {
  const rankings = WINNERS;
  return (
    <div className="w-full md:w-fit overflow-x-auto z-20 border-2 border-black bg-fuchsia-900 flex flex-col rounded-lg px-2 py-4 md:px-8">
      {rankings.map((user) => (
        <div
          key={user.bitget_uid}
          className="flex gap-2 shadow-2xl rounded-xl text-sm max-sm:text-xs m-1"
        >
          <div className="font-semibold border-2 border-black px-3 sm:px-5 flex justify-center items-center rounded-xl bg-[#DA011F] text-white py-3 ">
            {user.ranks}
          </div>
          <div className="font-semibold border-2 border-black flex-1 rounded-xl bg-[#DA011F] text-white px-4 py-2 flex justify-center items-center ">
            {user.name}
          </div>
          <div className="font-semibold border-2 border-black flex-1 rounded-xl bg-[#DA011F] text-white px-4 py-2 flex justify-center items-center ">
            {user.bitget_uid}
          </div>
          <div className="font-semibold border-2 border-black flex-1 rounded-xl bg-[#DA011F] text-white px-4 py-2 flex justify-center items-center ">
            ₹{user.prize}
          </div>
          <div className="font-semibold border-2 border-black flex-1 rounded-xl bg-[#DA011F] text-white px-4 py-2 flex justify-center items-center ">
            {user.goodies}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LBNames;
