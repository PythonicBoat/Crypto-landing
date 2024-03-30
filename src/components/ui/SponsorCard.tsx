export default function SponsorCard({
  imgSrc,
  cardTitle,
  cardDesc,
}: {
  imgSrc: string;
  cardTitle: string;
  cardDesc: string;
}) {
  return (
    <div
      className="rounded-2xl group   transition-all duration-300 ease-in-out  md:basis-[40%] basis-[80%] font-serif flex flex-col lg:px-6 lg:py-8 px-4 py-6 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 items-center
    "
    >
      <img
        src={imgSrc}
        alt="icon"
        className="h-15 lg:h-40 w-15  lg:w-40 rounded-lg p-1 lg:p-[6px] bg-blend-multiply bg-color-3"
      />
      <h2 className="text-white mt-6 font-bold my-[5px] lg:my-[9px] text-base lg:text-lg">
        {cardTitle}
      </h2>
      <h4 className="text-gray-300 text-sm mt-5 lg:text-sm lg:-translate-y-12 group-hover:translate-y-0 lg:group-hover:opacity-100 lg:opacity-0 font-extralight transition-all duration-1000 ">
        {cardDesc}
      </h4>
          
    </div>
  );
}
