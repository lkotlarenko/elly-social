# Link Hub

Minimalist, linktree-style website designed to showcase and provide easy access to your most important online profiles and content. Built with Gatsby.js and React, the site emphasizes simplicity, aesthetics, and responsiveness.

## Table of Contents

- [Link Hub](#link-hub)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
    - [Running Locally](#running-locally)
  - [Deployment](#deployment)
    - [Deploying to GitHub Pages](#deploying-to-github-pages)
    - [Custom Domain Setup](#custom-domain-setup)
  - [Customization](#customization)
    - [Adding or Editing Links](#adding-or-editing-links)
    - [Changing Styles](#changing-styles)
    - [Updating Icons](#updating-icons)
  - [Contributing](#contributing)
  - [Acknowledgments](#acknowledgments)

---

## Features

- **Minimalist Design**: Clean and simple interface focused on your links.
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices.
- **Easy to Customize**: Modify links and styles with minimal effort.
- **Fast and Secure**: Built with Gatsby.js, ensuring high performance.
- **SEO-Friendly**: Pre-rendered content for better search engine indexing.

---

## Getting Started

### Prerequisites

- **Node.js** (v12 or later)
- **npm** or **yarn**

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/lkotlarenko/link-hub.git
   cd link-hub
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

---

## Usage

### Running Locally

Start the development server:

```bash
gatsby develop
# or
npm run develop
```

Open your browser and navigate to `http://localhost:8000` to view the site.

---

## Deployment

### Deploying to GitHub Pages

1. **Build the Project**

   ```bash
   gatsby build
   # or
   npm run build
   ```

2. **Deploy**

   ```bash
   npm run deploy
   ```

   This will deploy the `public` folder to the `gh-pages` branch of your repository.

### Custom Domain Setup

- Add a `CNAME` file in the `public` directory containing your custom domain:

  ```
  example.com
  ```

- Update your DNS records to point to GitHub Pages. Add the following A records:

  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```

---

## Customization

### Adding or Editing Links

- Edit the `src/data/links.js` file to add your own links:

  ```javascript
  const links = [
    {
      name: "X (Twitter)",
      url: "https://x.com/YourUsername",
      icon: "x-icon.png",
    },
    // Add more links here
  ]

  export default links
  ```

### Changing Styles

- Modify the `src/styles/global.css` file to customize the site's appearance.

### Updating Icons

- Place your icon images in the `src/images/` directory.
- Update the icon paths in `src/components/LinkItem.js` if necessary.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.

---

## Acknowledgments

- **Frameworks and Libraries**
  - [Gatsby.js](https://www.gatsbyjs.com/)
  - [React](https://reactjs.org/)
- **Inspiration**
  - [Linktree](https://linktr.ee/)
  - [Awesome Gatsby Starter Projects](https://www.gatsbyjs.com/starters/)
