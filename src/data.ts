import type { Destination, CrewMember, Technology } from "./types";

export const destinations: Destination[] = [
  {
    id: "moon",
    name: "Moon",
    description:
      "See our closest celestial neighbor and enjoy breathtaking views of Earth from afar.",
    distance: "384,400 km",
    travelTime: "3 days",
    image: "/images/destinations/desktop-destination-A.svg",  
  },
  {
    id: "mars",
    name: "Mars",
    description:
      "Experience the red planet — dusty, rocky, and home to the tallest volcano in the solar system.",
    distance: "225 mil. km",
    travelTime: "9 months",
    image: "/images/destinations/desktop-destination-B.svg"
  },
  {
    id: "europa",
    name: "Europa",
    description:
      "A frozen moon with a hidden ocean that may harbor life. Adventure awaits beneath the ice.",
    distance: "628 mil. km",
    travelTime: "3 years",
    image: "/images/destinations/desktop-destination-C.svg"
  },
  {
    id: "titan",
    name: "Titan",
    description:
      "The only moon known to have a dense atmosphere—experience orange skies and methane lakes.",
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
    bio: "Pilot and former Marine Corps test pilot. Led the first crewed spaceflight by SpaceX.",
    image: "/images/crews/desktop-crew-A.svg",
  },
  {
    id: "shuttleworth",
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    bio: "Entrepreneur and the first South African in space.",
    image: "/images/crews/desktop-crew-B.svg",
  },
  {
    id: "glover",
    role: "Pilot",
    name: "Victor Glover",
    bio: "Experienced NASA astronaut and pilot on Crew-1.",
    image: "/images/crews/desktop-crew-C.svg",
  },
  {
    id: "ansari",
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    bio: "Engineer and proponent of private space travel.",
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
