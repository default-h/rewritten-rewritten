# Rewriting Toontown Rewritten's Landing Page 👀

![Screenshot of Website](https://i.imgur.com/ucPzHl4.jpg)
![GIF #1 of Website](https://media.giphy.com/media/6j0B8GjAYQhHsmJkP1/giphy.gif)
![GIF #2 of Website](https://media.giphy.com/media/rrXA3nFGCs1DCA7JGW/giphy.gif)

<p align="center">
Live Site: https://rewritten-rewritten.vercel.app/
<br/>
Video Demo: https://www.youtube.com/watch?v=02g3_AjNB30
</p>

## Overview

The "Rewriting Toontown Rewritten" project rebuilds the landing page of one of my favorite online games, Toontown Rewritten (TTR), using Next.js, React, JavaScript, and SCSS. This project was built from scratch using my code to rebuild and restructure TTR's website while fixing the actual website's bugs and adding new features (see "Improvements / Changes"). The reasoning behind this project is for my benefit in learning web development and my love for the game! I built this to practice how to reproduce a design, properly structure a website (and make it accessible!), use React Hooks, and fetch data from an API.

To current players, this website has no affiliation with TTR, nor do the assets shown on the website belong to me. All links on the website will take you to the official website and social media belonging to TTR.

### Built With

- [React.JS](https://reactjs.org/)
- [Next.JS](https://nextjs.org/)
- [SASS](https://sass-lang.com/)
- [Toontown Rewritten API](https://github.com/ToontownRewritten/api-doc)
- [React Slick](https://react-slick.neostack.com/)

## Highlights

- Incorporates mobile-first design
- Follows web accessibility standards (WCAG + aria)
- Responsive across different devices
- Consumes data from a third-party Web API
  - Data is displayed as blogpost previews. Each preview contains it's unique title and image. Clicking on the preview will open its associated blogpost in a new tab.
- Features a mock-up of a registration/login modal w/ form validation
- Reinforces HTML semantics
- Other:
  - Custom 404 + 500 page
  - Responsive across different devices
  - Interactive
  - Fixes current issues from original website (see below!)

## Improvements / Changes

- Fixed webpage for iPad users + improved responsiveness
  - Inititally, iPads and tablet devices had visual issues with the banner not stretching completely across the screen (leaving empty space between the banner and right side of the page) and the mobile navigation bar being ever so slightly cut off
- "Latest News" now fetches the five most recent blog posts (originally three) with subtle styling differences
- Color scheme has changed to improve color contrast ratio for WCAG (Level AAA)
- Mobile banner features up-to-date branding
- Registration form now validates in real time rather than validating after a submission attempt
  - Additionally, users can now see requirements when focused on an input

## Outcomes

After completing the project, I walked away with confidence. In addition, the skills I learned along the way can be applied to newer and bigger projects:

- Structuring project files and remaining organized
- Optimizing page load with the power of lazy loading
- Structuring a website with semantic elements and accessibility
- Fetching API and displaying data
- Making a website look good and perform well on both mobile and desktop devices

## To-Do List

- [x] Finalize navigation bar
- [x] Implement form validation
