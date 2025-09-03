export type Destination = {
id: string;
name: string;
description: string;
distance: string; // e.g., "384,400 km"
travelTime: string; // e.g., "3 days"
image?: string; // optional path to /src/assets/... if you export from Figma
};


export type CrewMember = {
id: string;
role: string;
name: string;
bio: string;
image?: string;
};


export type Technology = {
id: string;
name: string;
description: string;
imagePortrait?: string;
imageLandscape?: string;
};