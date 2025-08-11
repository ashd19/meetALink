"use client";
import { useState, useEffect } from "react";
import { Card, generateMeetLink } from "../components/card";

function Page() {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "23 RD July Batch",
      link: generateMeetLink(),
      time: "8:15 PM",
      lastGenerated: new Date().toDateString(),
    },
    {
      id: 2,
      name: "30 Th July Batch",
      link: generateMeetLink(),
      time: "6:15 PM",
      lastGenerated: new Date().toDateString(),
    },
    {
      id: 3,
      name: "7 Th August Batch",
      link: generateMeetLink(),
      time: "8:15 PM",
      lastGenerated: new Date().toDateString(),
    },
  ]);

  const handleGenerateLink = (cardId : number) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId
          ? {
              ...card,
              link: generateMeetLink(),
              lastGenerated: new Date().toDateString(),
            }
          : card
      )
    );
  };

  // Auto-update at scheduled time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentTime = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      setCards((prevCards) =>
        prevCards.map((card) =>
          card.time === currentTime
            ? {
                ...card,
                link: generateMeetLink(),
                lastGenerated: new Date().toDateString(),
              }
            : card
        )
      );
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center flex-col min-h-screen bg-black text-white p-4">
      <h1 className="flex mt-5 mr-10 text-4xl font-bold font-mono mb-4">
        Meet~a~Link
      </h1>
      <p className="text-gray-400 mb-8 text-center max-w-2xl">
        Generate unique Google Meet links for each batch. Links refresh daily
        and can be manually regenerated.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {cards.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            link={card.link}
            time={card.time}
            lastGenerated={card.lastGenerated}
            onGenerateLink={() => handleGenerateLink(card.id)} id={0}          />
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          * These are demo links. In production, integrate with Google
          Calendar/Meet API.
        </p>
      </div>
    </div>
  );
}

export default Page;