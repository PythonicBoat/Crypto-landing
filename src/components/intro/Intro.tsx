"use client";

const Intro: React.FC = () => {
  return (
    <div id="home">
      <div className="2xl:pl-12 w-full h-full relative overflow-hidden">
        <img src={"/assets/images/temp/hero.png"} alt="comic bg" className="object-cover w-full" />
        {/* <div className="polygon-wrapper"> */}
        {/*   <div className="polygon-image"></div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Intro;
