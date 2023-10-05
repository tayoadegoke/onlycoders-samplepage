
<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  <a href="https://github.com/tayoaegoke/onlycoders-samplepage">
    <img src="./public/newsfeed.jpeg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Only Coders Sample Page Coding Test</h3>

  <p align="center">
    This repository contains the code for the only coders coding test, to build a web application based on a given UI design.
    <br />
    <a href="https://drive.google.com/file/d/1xQhvv3Qjqpk8fiycD5u0YdjPzCQnWJdJ/view?usp=sharing"><strong>View Design</strong></a>
    <br />
    <br />
    <a href="https://tayoadegoke.github.io/onlycoders-samplepage/">View Demo</a>

  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation and Start up</a></li>
      </ul>
    </li>
    <li><a href="#folder-structure">Folder structure</a></li>
    <li><a href="#styling">Styling</a></li>
  </ol>
</details>

[![product-screenshot]](https://tayoadegoke.github.io/onlycoders-samplepage/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To run this project locally, please do the following 
### Prerequisites

You need to have node and npm installed.

Check out (https://nodejs.org/en/download) to download node and npm .


### Installation and Start up

1.  Clone the repo
   ```sh
   git clone https://github.com/tayoadegoke/onlycoders-samplepage
   ```
2. Install NPM packages
   ```sh
   npm install

3. To the start the application run 
   ```sh
   npm start

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Folder Structure 

[![folder-structure]

- public (Contains non code assets like images)
- src 
  - assets (Contains all code based assets like svg's in React components)
  - components (Contains smaller bits of react components that make up pages)
  - pages  (Folder to house all main pages of the app, in this case there was only one page)
     - feed 
  - shared (contains all functions and components shared across multiple components in the app)
     - hooks (contains reusable react hooks )
     - listItem 
     - listItemIcon 
     - memberTypeIcon  
- App.js (root App component)
- mocks.js (contains all mock data for the app in arrays)
- package.json 
- README.md


## Styling
- The root App.css file contains global styles and css properties used across the app
- The project also uses css files in the same folder that houses each component . 
- These css files contain all styles related to that particular component and imported via the component. 
- The project uses class selectors in the component that follow the BEM convention see (https://getbem.com/) 
- The project uses Media queries at the bottom of css files to target smaller screens, to achieve
responsiveness. 
- The project uses the Framer motion package to achieve animations. see (https://www.framer.com/motion/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/omotayo-a-33a3a3120/
[product-screenshot]: ./public/screenshot.png
[folder-structure]: ./public/folderstructure.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
