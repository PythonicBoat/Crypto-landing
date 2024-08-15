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
    <div className="z-20 border-2 border-black bg-fuchsia-900 flex flex-col rounded-lg px-2 py-4 md:px-8">
      {rankings.map((user: any, idx: number) => (
        <div
          key={user.bitget_uid}
          className="flex gap-2 shadow-2xl rounded-xl text-sm max-sm:text-xs m-1"
        >
          <div className="font-semibold border-2 border-black px-3 sm:px-5 flex justify-center items-center rounded-xl bg-[#DA011F] text-white py-3 ">
            {idx + 1}
          </div>
          <div className="font-semibold border-2 border-black flex-1 rounded-xl bg-[#DA011F] text-white px-4 py-2 flex justify-center items-center ">
            {user.name}
          </div>
          <div className="font-semibold border-2 border-black flex-1 rounded-xl bg-[#DA011F] text-white px-4 py-2 flex justify-center items-center ">
            {user.bitget_uid}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LBNames;
