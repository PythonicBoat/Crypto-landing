const Prizes: React.FC = () => {
  return (
    <div id="prizes">
      <div className="px-2 2xl:pl-20 2xl:pr-28 w-full h-full relative overflow-hidden">
        <img
          src={"/assets/images/temp/prizes.png"}
          alt="comic bg"
          className="object-cover w-full border-[4px] md:border-[10px] border-black"
        />
        {/* <div className="polygon-wrapper"> */}
        {/*   <div className="polygon-image"></div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Prizes;
