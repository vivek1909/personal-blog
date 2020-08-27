module.exports = {
  siteMetadata: {
    title: "Vivek Mittal's Blog",
    description: "A blog site containing all the blogs written by Vivek Mittal",
    url: "https://vivek-writes.netlify.com",
    image: "/feature.jpg",
    twitter: "@vivek96_",
    instagram: "@vivek06_",
    github: "@vivek1909",
    author: "Vivek Mittal",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vivek Mittal`,
        short_name: `Vivek`,
        start_url: `/`,
        background_color: `hsl(227,2%,12%)`,
        theme_color: `hsl(227,2%,12%)`,
        display: `standalone`,
        icon: `src/images/logo.svg`,
        cache_busting_mode: `none`,
        theme_color_in_head: false,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/pokedex/`, `/ajax-requests/`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poppins\:400,700`, `montserrat\:400,700`],
        display: "swap",
      },
    },
  ],
}
