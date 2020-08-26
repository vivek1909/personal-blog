module.exports = {
  siteMetadata: {
    title: "Vivek Mittal's Blog",
    description: "A blog site containing all the blogs written by Vivek Mittal",
    url: "https://vivek-writes.netlify.com",
    image: "/feature.jpg",
    twitterUsername: "@vivek96_",
    instagramUsername: "@vivek06_",
    githubUsername: "@vivek1909",
    author: "Vivek Mittal",
  },
  plugins: [
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
