"use client";
import { useState } from "react";

interface CardData {
  id: number;
  name: string;
  link: string;
  time: string;
  lastGenerated: string;
  onGenerateLink: () => void;
}
// Card component
function Card({ name, link, time, lastGenerated, onGenerateLink }:CardData) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateLink = async () => {
    setIsGenerating(true);
    setTimeout(() => {
      onGenerateLink();
      setIsGenerating(false);
    }, 1000);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 w-72 h-80 flex flex-col justify-between border border-gray-700 hover:border-gray-500 transition-colors">
      <div>
        <h2 className="text-xl font-bold mb-4 text-white">{name}</h2>
        <div className="mb-4">
          <p className="text-gray-300 mb-2">Schedule: {time}</p>
          <p className="text-gray-400 text-xs">Last updated: {lastGenerated}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-400 text-sm mb-2">Meeting Link:</p>
          <div className="bg-gray-900 p-3 rounded border">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm break-all"
            >
              {link}
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}

// Function to generate a realistic Google Meet link
function generateMeetLink() {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const part1 = Array.from({ length: 3 }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join("");
  const part2 = Array.from({ length: 4 }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join("");
  const part3 = Array.from({ length: 3 }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join("");

  return `https://meet.google.com/${part1}-${part2}-${part3}`;
}

export { Card, generateMeetLink };
