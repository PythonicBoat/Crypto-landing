import Image from "next/image";

const Prizes: React.FC = () => {
  const data = [
    {
      goodies:
        "Tshirt,Stickers,Badges, Certificate,Cap, Football,Laptop Sleeves",
      ranks: "1",
      winners: 1,
      prizeEach: 15000,
      total: 15000,
    },
    {
      goodies:
        "Tshirt,Stickers,Badges, Certificate,Cap, Football,Laptop Sleeves",
      ranks: "2",
      winners: 1,
      prizeEach: 12000,
      total: 12000,
    },
    {
      goodies:
        "Tshirt,Stickers,Badges, Certificate,Cap, Football,Laptop Sleeves",
      ranks: "3",
      winners: 1,
      prizeEach: 10000,
      total: 10000,
    },
    {
      goodies:
        "Tshirt,Stickers,Badges, Certificate,Cap, Football,Laptop Sleeves",
      ranks: "4-5",
      winners: 2,
      prizeEach: 8000,
      total: 16000,
    },
    {
      goodies: "Tshirt,Stickers,Badges, Certificate,Cap, Laptop Sleeves",
      ranks: "6-10",
      winners: 5,
      prizeEach: 5000,
      total: 25000,
    },
    {
      goodies: "Tshirt,Stickers,Badges, Certificate,Cap",
      ranks: "11-20",
      winners: 10,
      prizeEach: 1200,
      total: 12000,
    },
    {
      goodies: "Tshirt,Stickers,Badges, Certificate",
      ranks: "21-40",
      winners: 20,
      prizeEach: 500,
      total: 10000,
    },
  ];
  return (
    <main className="px-2 md:px-8 ">
      <div className="p-4 md:p-8 bg-yellow-300 rounded-3xl shadow-2xl border-4 md:border-8 border-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%3E%3Ccircle%20cx%3D%222%22%20cy%3D%222%22%20r%3D%222%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.1%22%2F%3E%3C%2Fsvg%3E')] opacity-20"></div>{" "}
        <div className=" hidden md:block relative z-10">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-red-500 text-white">
                {["Goodies", "Ranks", "Winners", "Prize(INR)", "Total INR"].map(
                  (header, index) => (
                    <th
                      key={index}
                      className="p-2 md:p-4 border-2 md:border-4 border-black font-comic text-sm md:text-xl font-bold transform -skew-x-6 shadow-lg"
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-blue-400" : "bg-green-400"
                  } hover:bg-red-400 transition-colors duration-300`}
                >
                  <td className="p-2 md:p-3 border-2 md:border-4 border-black font-comic text-xs md:text-base">
                    {row.goodies}
                  </td>
                  <td className="p-2 md:p-3 border-2 md:border-4 border-black font-comic text-center font-bold text-sm md:text-xl">
                    {row.ranks}
                  </td>
                  <td className="p-2 md:p-3 border-2 md:border-4 border-black font-comic text-center">
                    {row.winners}
                  </td>
                  <td className="p-2 md:p-3 border-2 md:border-4 border-black font-comic text-center">
                    {row.prizeEach}
                  </td>
                  <td className="p-2 md:p-3 border-2 md:border-4 border-black font-comic text-center font-bold">
                    {row.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="absolute z-50 hidden md:block -top-12 -right-5 rotate-45">
          <Image src="/assets/wow.png" height={150} width={180} alt="wow" />
        </div>
        {/* mobile */}
        <div className="md:hidden space-y-4 relative z-10">
          {data.map((row, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-2 border-black ${
                index % 2 === 0 ? "bg-blue-400" : "bg-green-400"
              }`}
            >
              <h3 className="font-comic font-bold text-lg mb-2">
                Rank: {row.ranks}
              </h3>
              <p className="font-comic text-sm mb-1">
                <strong>Goodies:</strong> {row.goodies}
              </p>
              <p className="font-comic text-sm mb-1">
                <strong>Winners:</strong> {row.winners}
              </p>
              <p className="font-comic text-sm mb-1">
                <strong>Prize:</strong> {row.prizeEach} INR
              </p>
              <p className="font-comic text-sm font-bold">
                <strong>Total:</strong> {row.total} INR
              </p>
            </div>
          ))}
        </div>
        <div className="absolute md:hidden z-50 top-2 right-2 bg-white p-2 rounded-full border-2 md:border-4 border-black transform rotate-12 shadow-lg">
          <span className="font-comic text-base md:text-xl font-bold text-red-500">
            WOW!
          </span>
        </div>
      </div>
    </main>
  );
};

export default Prizes;
