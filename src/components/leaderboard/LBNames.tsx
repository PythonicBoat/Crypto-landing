import React from "react";

const THIRTY_MINUTES = 1800;
const getData = async () => {
  try {
    const data = await fetch(
      "https://script.google.com/macros/s/AKfycbwLKTtu4lzDoQJ05Tp_IMtJPdSnrQo5Mi9mZp994_Mx77hRmaQAQR1ZdDh1frzFjGCbrA/exec",
      {
        next: { revalidate: THIRTY_MINUTES },
      }
    );
    return await data.json();
  } catch (_) {
    return [];
  }
};

const LBNames = async () => {
  const rankings = await getData();
  return (
    <div className="  max-sm:h-[45%] no-scrollbar h-full overflow-auto flex flex-col rounded-lg p-2">
      {rankings.map((user: any, idx: number) => (
        <div
          key={user.bitget_uid}
          className="flex gap-2 rounded-xl text-sm max-sm:text-xs m-1"
        >
          <div className="font-semibold px-3 sm:px-5 flex justify-center items-center rounded-xl bg-[#DA011F] text-white py-3 ">
            {idx + 1}
          </div>
          <div className="font-semibold flex-1 rounded-xl bg-[#DA011F] text-white px-4 py-2 flex justify-center items-center ">
            {user.name}
          </div>
          <div className="font-semibold flex-1 rounded-xl bg-[#DA011F] text-white px-4 py-2 flex justify-center items-center ">
            {user.bitget_uid}
          </div>
          <div className="font-semibold px-3 sm:px-5 flex justify-center items-center rounded-xl bg-[#DA011F] text-white py-3">
            $900.00
          </div>
        </div>
      ))}
    </div>
  );
};

export default LBNames;
