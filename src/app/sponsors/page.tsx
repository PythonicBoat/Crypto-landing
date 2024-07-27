import SponsorCard from "@/components/ui/SponsorCard";

const CARD_DETAILS = [
  // {
  //   imgSrc: "/assets/sponsors/biggies2.png",
  //   title: "Biggies Burger!",
  //   cardDesc: `Born from passion and perfected over a decade, the burgers are more than just a meal—they're an experience. With 21 stores across India and a reputation for mouthwatering goodness, we're the ultimate destination for burger aficionados. 🤩🔥
  //
  // Swing by our KIIT lane location which offers not just mouthwatering burgers and beverages, but also a cozy atmosphere that invites you to stay a while. Come for the comfort, stay for the flavor—it's time to experience burger perfection, the Biggies way!💯`,
  // },
  // {
  //   imgSrc: "/assets/sponsors/hill view.png",
  //   title: "Hill View Cafe & Restro",
  //   cardDesc: `Indulge in culinary delights amidst breathtaking views at Hill View Cafe! 🖼️
  //     Delight your taste buds with the diverse menu, sip on handcrafted beverages, and soak in the majestic vistas of Shikarchandi Hill. 🏕️
  //     The open-air ambiance sets the stage for unforgettable dining experiences. Breathe in the fresh mountain air and let the panoramic views captivate your senses. With every bite, discover a new level of culinary bliss✨. Come for the food, stay for the view! 🍽️🌄`,
  // },
  // {
  //   imgSrc: "/assets/sponsors/bitgit.png",
  //   title: "Innovatronix",
  //   cardDesc: `"Enter the vanguard of technological evolution with Innovatronix." 🌐
  //
  //   Backed by a team of seasoned experts, the company specialize in cutting-edge AI, ML, and IoT solutions, propelling businesses to unprecedented heights in the digital realm. 🎯
  //
  //   “At Innovatronix, we don't just redefine innovation; we architect the future of technology-driven solutions, setting new benchmarks for excellence. 💯Join us on this transformative journey and witness the power of progress.” ✨`,
  // },
  {
    imgSrc: "/assets/sponsors/bitget.png",
    title: "Bitget",
    cardDesc:
      "Bitget, our official sponsor and chosen platform for our upcoming cryptocurrency event, is an exchange platform for cryptocurrencies that provides trading services for different kinds of digital assets. In an effort to serve both new and seasoned traders, it offers services like spot trading, futures trading, and margin trading. To improve trading activities, the platform frequently places a strong emphasis on security, user experience, and cutting-edge trading tools.With Bitget showcasing the latest in crypto trading advancements, it will offer attendees a valuable opportunity to engage with top-tier trading technology.",
  },
];

export default function WhatWeDoCardsMap() {
  return (
    <div className="flex flex-wrap min-h-screen gap-6 lg:gap-9 mt-8 lg:mt-10 px-5 lg:px-8 justify-center w-full">
      {CARD_DETAILS.map(({ imgSrc, title, cardDesc }) => {
        return (
          <SponsorCard
            key={imgSrc}
            imgSrc={imgSrc}
            cardTitle={title}
            cardDesc={cardDesc}
          ></SponsorCard>
        );
      })}
    </div>
  );
}
