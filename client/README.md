

<div align="center">


</div>

## 🛠 Installation & Set Up

1. Clone this repository

   ```sh
   gh repo fork repository --clone=true
   ```

2. Change directories

   ```sh
   cd blog
   ```

3. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install
   ```

4. Install dependencies

   ```sh
   npm install
   ```

5. Start the development server

   ```sh
   npm start
   ```

6. Create a .env.local and following the .env.example input some environment variables so that can run normally.

   ```txt
   NEXT_PUBLIC_GISCUS_REPO=
   NEXT_PUBLIC_GISCUS_REPOSITORY_ID=
   NEXT_PUBLIC_GISCUS_CATEGORY=
   NEXT_PUBLIC_GISCUS_CATEGORY_ID=
   EMAILOCTOPUS_API_URL=
   EMAILOCTOPUS_API_KEY=
   EMAILOCTOPUS_LIST_ID=
   DATABASE_URL=
   OAUTH_CLIENT_KEY=
   OAUTH_CLIENT_SECRET=
   NEXTAUTH_URL=
   SECRET=
   TWITTER_API_KEY=
   TWITTER_BEARER_TOKEN=
   SPOTIFY_CLIENT_ID =
   SPOTIFY_CLIENT_SECRET =
   SPOTIFY_REFRESH_TOKEN =
   ```

## 🏗️ Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run dev
   ```

2. Preview the site as it will appear once deployed

   ```sh
   npm run serve
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## 👨‍🎨️ Customization

1. Personalize `siteMetadata.js` (site related information)
2. Modify the content security policy in `next.config.js` if you want to use any analytics provider or a commenting solution other than giscus.
3. Personalize `authors/default.md` (main author)
4. Modify `projectsData.js`
5. Modify `headerNavLinks.js` to customize navigation links
6. Add blog posts

## 📝 Files to customize

- `data/siteMetadata.js` - contains most of the site related information which should be modified for a user's need.

- `data/authors/default.md` - default author information (required). Additional authors can be added as files in `data/authors`.

- `data/projectsData.js` - data used to generate styled card on the projects page.

- `data/headerNavLinks.js` - navigation links.

- `data/logo.svg` - replace with your own logo.

- `data/blog` - replace with your own blog posts.

- `public/static` - store assets such as images and favicons.

- `tailwind.config.js` and `css/tailwind.css` - contain the tailwind stylesheet which can be modified to change the overall look and feel of the site.

- `components/social-icons` - to add other icons, simply copy an svg file from [Simple Icons](https://simpleicons.org/) and map them in `index.js`. Other icons use [heroicons](https://heroicons.com/).

- `components/MDXComponents.js` - pass your own JSX code or React component by specifying it over here. You can then call them directly in the `.mdx` or `.md` file. By default, a custom link and image component is passed.

- `layouts` - main templates used in pages.

- `pages` - pages to route to. Read the [Next.js documentation](https://nextjs.org/docs) for more information.

- `next.config.js` - configuration related to Next.js. You need to adapt the Content Security Policy if you want to load scripts, images etc. from other domains.

## 🔨 Compose

Run `node ./scripts/compose.js` to bootstrap a new post.

Follow the interactive prompt to generate a post with pre-filled front matter.

## 📚 Tech Stack

| Tool           | Link                                                      |
| -------------- | --------------------------------------------------------- |
| Framework      | [Next.js](https://nextjs.org/)                            |
| Styling        | [Tailwindcss](https://tailwindcss.com/)                   |
| Comment        | [Tailwindcss](https://tailwindcss.com/)                   |
| Favicon        | [realfavicongenerator](https://realfavicongenerator.net/) |
| Content        | [MDX](https://mdxjs.com/)                                 |


## 🪜 Project structure

```bash
📦 root
├── 🗂️ components             # React files to customize the components for the site
├── 🗂️ css                    # Tailwind CSS files
├── 🗂️ data                   # Files to change the content of pages
│ ├── 🗂️ authors              # Markdown files for authors of blog
│ ├── 🗂️ blog                 # Markdown files for blog posts
│ └── 🗂️ snippets             # Markdown files for code snippets
├── 🗂️ layouts                # Templates for pages
├── 🗂️ lib                    # Non-react modules
├── 🗂️ pages                  # Page files for website
├── 🗂️ public                 # Static files for images, rss, and assets
│ ├── 🗂️ static               # Holds images, favicons, and other assets
│ │ ├── 🗂️ favicon            # Favicon files
│ │ └── 🗂️ images             # Image Files
│ ├── 📝 feed.xml             # RSS feed
│ ├── 📝 robots.txt           # Helps crawlers to crawl your site
│ └── 📝 sitemap.xml          # Sitemap
├── 🗂️ scripts                # Scripts to run for different tasks
├── 📝 tailwind.config.js     # Contains tailwind stylesheet to change the look
└── 📝 next.config.js         # configuration related to Next.js
```

## 🍰 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Commit your Changes

   ```bash
   git commit -m 'Add some Feature'
   ```

3. Push to the Branch

   ```bash
   git push origin main
   ```

4. Open a Pull Request

<div align="center">

<a href="https://makeapullrequest.com" target="blank" >![PRs Welcome](https://img.shields.io/badge/PR-Welcome-brightgreen?style=for-the-badge)</a>

</div>
