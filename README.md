# Browser Extensions Manager UI

![Design preview for the Browser extensions manager UI coding challenge](./preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a basic understanding of HTML, CSS, and JavaScript.**

## The challenge

Your challenge is to build out this browser extension manager UI and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

We provide the data for the extensions in a local `data.json` file. So you can use that to add the data dynamically if you choose.

Your users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme (dark/light mode)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

Want some support on the challenge? [Join our community](https://www.frontendmentor.io/community) and ask questions in the **#help** channel.

## Where to find everything

Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design.

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding`, and `margin`.

If you would like the Figma design file to gain experience using professional tools and build more accurate projects faster, you can [subscribe as a PRO member](https://www.frontendmentor.io/pro).

All the required assets for this project are in the `/assets` folder. The images are already exported for the correct screen size and optimized.

We also include variable and static font files for the required fonts for this project. You can choose to either link to Google Fonts or use the local font files to host the fonts yourself. Note that we've removed the static font files for the font weights that aren't needed for this project.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

## Project Overview

This project is a **Browser Extensions Manager UI**, built using **HTML**, **CSS**, **JavaScript**, and **Bootstrap**. The project implements a **dark/light theme toggle** using `localStorage` for theme persistence.

## Features

- **Dynamic Data Rendering:** Extensions data is dynamically fetched from a `data.json` file.
- **Dark/Light Theme Toggle:** Users can switch between dark and light themes, and the preference is saved using `localStorage`.
- **Mobile & Desktop Responsive:** The UI adapts to different screen sizes.
- **Filter Extensions:** Users can filter active and inactive extensions.
- **Toggle Extension States:** Users can toggle extensions between active and inactive.
- **Remove Extensions:** Users can remove extensions from the list.

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**
- **Bootstrap**
- **localStorage** for theme persistence

## Project Setup

To view the project locally, clone the repository and open the `index.html` file in your browser.

```bash
git clone https://github.com/ubaidrashid/browserExtensions-with-Filteration.git
cd browser-extensions-with-filteration
open index.html
