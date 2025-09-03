import type { Destination, CrewMember, Technology } from "./types";

export const destinations: Destination[] = [
  {
    id: "moon",
    name: "Moon",
    description:
      `See our planet as you’ve never seen it before. A perfect 
      relaxing trip away to help regain perspective and come 
      back refreshed. While you’re there, take in some history
       by visiting the Luna 2 and Apollo 11 landing sites.`,
    distance: "384,400 km",
    travelTime: "3 days",
    image: "/images/destinations/desktop-destination-A.svg",  
  },
  {
    id: "mars",
    name: "Mars",
    description:
      `Don’t forget to pack your hiking boots. You’ll need them to 
      tackle Olympus Mons, the tallest planetary mountain in 
      our solar system. It’s two and a half times the size of 
      Everest!`,
    distance: "225 mil. km",
    travelTime: "9 months",
    image: "/images/destinations/desktop-destination-B.svg"
  },
  {
    id: "europa",
    name: "Europa",
    description:
      `The smallest of the four Galilean moons orbiting Jupiter,
       Europa is a winter lover’s dream. With an icy surface, it’s
        perfect for a bit of ice skating, curling, hockey, or simple
         relaxation in your snug wintery cabin.`,
    distance: "628 mil. km",
    travelTime: "3 years",
    image: "/images/destinations/desktop-destination-C.svg"
  },
  {
    id: "titan",
    name: "Titan",
    description:
      `The only moon known to have a dense atmosphere other
       than Earth, Titan is a home away from home (just a few 
       hundred degrees colder!). As a bonus, you get striking 
       views of the Rings of Saturn.`,
    distance: "1.6 bil. km",
    travelTime: "7 years",
    image: "/images/destinations/desktop-destination-D.svg"
  },
];

export const crew: CrewMember[] = [
  {
    id: "hurley",
    role: "Commander",
    name: "Douglas Hurley",
    bio: `Douglas Gerald Hurley is an American engineer, former Marine Corps 
    pilot and former NASA astronaut. He launched into space for the third 
    time as commander of Crew Dragon Demo-2.`,
    image: "/images/crews/desktop-crew-A.svg",
  },
  {
    id: "shuttleworth",
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    bio: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the
     company behind the Linux-based Ubuntu operating system.
      Shuttleworth became the first South African to travel to space as a space tourist.`,
    image: "/images/crews/desktop-crew-B.svg",
  },
  {
    id: "glover",
    role: "Pilot",
    name: "Victor Glover",
    bio: `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
    International Space Station. Glover is a commander in the U.S. Navy 
    where he pilots an F/A-18.He was a crew member of Expedition 64,
    and served as a station systems flight engineer. `,
    image: "/images/crews/desktop-crew-C.svg",
  },
  {
    id: "ansari",
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    bio: `Anousheh Ansari is an Iranian American engineer and co-founder of
     Prodea Systems. Ansari was the fourth self-funded space tourist, 
     the first self-funded woman to fly to the ISS, and the first Iranian in space. `,
    image: "/images/crews/desktop-crew-D.svg",
  },
];

export const technologies: Technology[] = [
  {
    id: "vehicle",
    name: "Launch vehicle",
    description:
      "A powerful rocket that propels spacecraft from Earth’s surface to space.",
      imagePortrait: "/images/destinations/desktop-technology-A.svg",
    imageLandscape: "/images/destinations/desktop-technology-A.svg",
    // image: "/images/destinations/desktop-technology-A.svg",
  },
  {
    id: "capsule",
    name: "Space capsule",
    description: "A crew spacecraft designed for reentry and recovery.",
    imagePortrait: "/images/destinations/desktop-technology-B.svg",
    imageLandscape: "/images/destinations/desktop-technology-B.svg",
    // image: "/images/destinations/desktop-technology-B.svg"
  },
  {
    id: "port",
    name: "Spaceport",
    description:
      "Where spacecraft launch and land. Expect cutting-edge infrastructure.",
      imagePortrait: "/images/destinations/desktop-technology-C.svg",
    // imageLandscape: "/images/destinations/desktop-technology-C.svg",
    // image: "/images/destinations/desktop-technology-C.svg"
  },
];
