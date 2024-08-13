import React from "react";

const getData = async () => {
  const data = await fetch(
    "https://script.google.com/macros/s/AKfycbxabUG7IHvUbHozpNyceTZGArdfFMQHl6qM1gdrCw8HiHuof3zEijO2CVSBOpgPTFP68g/exec",
    {
      next: { revalidate: 3600 },
    }
  );
  return await data.json();
};

const LBNames = async () => {
  const rankings = await getData();
  return (
    <div className="max-sm:w-[70%] max-sm:h-[50%] no-scrollbar h-full overflow-auto flex flex-col rounded-lg p-2">
      {rankings.map((user: any, idx: number) => (
        <div
          key={user.rank}
          className="flex gap-2 rounded-xl text-sm max-sm:text-xs m-1"
        >
          <div className="font-semibold px-3 sm:px-5 flex justify-center items-center rounded-xl bg-[#DA011F] text-white py-3">
            {idx + 1}
          </div>
          <div className="font-semibold flex-1 rounded-xl bg-[#DA011F] text-white px-4 sm:px-6 py-2 flex justify-center items-center">
            {user.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LBNames;
