# Frontend Mentor - E-commerce product page solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and toggle between the tabs to see new information

### Screenshots

| Desktop Design|
|---------------|
| ![Mobile Design](./src/assets/Desktop-View.png)|
|---------------|
| Mobile Design |
|---------------|
| ![Desktop Design](./src/assets/Mobile-View.png)|

### Links

- Solution URL: [Github Link](https://your-solution-url.com)
- Live Site URL: [Vercel Link](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Vanilla CSS (custom properties, flexbox, and grid)
- Mobile-first workflow
- [React](https://reactjs.org/)
- TypeScript for type safety
- React Router for routing between pages
- Vanilla CSS

### What I learned

This project helped my understanding of:

- Building a multi-page React + TypeScript project
- Creating reusable UI components
- Writing clean, modular CSS for responsive layouts
- Implementing tab-based navigation for crew, destination, and technology pages


### Here’s a small snippet I’m proud of:

```tsx

const [activeTab, setActiveTab] = useState(0);

return (
  <div>
    {tabs.map((tab, idx) => (
      <button
        key={idx}
        className={activeTab === idx ? "active" : ""}
        onClick={() => setActiveTab(idx)}
      >
        {tab.title}
      </button>
    ))}
    <div>{tabs[activeTab].content}</div>
  </div>
);

```
## Continued Development

In future projects, I want to:

- Improve accessibility (ARIA roles for modals/lightbox and keyboard navigation)

- Add animations transitions.

- Explore performance optimization with React (lazy loading images and components).

## Useful Resources

React Docs
 - For React concepts and hooks.

CSS Tricks Flexbox Guide
 - Helped with responsive layouts.

MDN Web Docs
 - Great reference for both CSS and JS.

## Author

Twitter - @Angelina Onuoha
