import chatAppImg from "./assets/chatAppPage.jpeg";
import movieSearchImg from "./assets/movieSearchPage.jpeg";
import blogSiteImg from "./assets/blogSitePage.jpeg";

const data = [
  {
    title: "Chat App",
    url: "https://chat-app-34dd1.web.app/",
    img: chatAppImg,
    desc: `A chat app built using react for the front end and firebase for the 
    authentication and the database. The app allows users to login and 
    send messages to a public group chat. The user can delete their own 
    messages as well.`,
    github: "https://github.com/Akhere-G/chat-app",
    technologies: ["React", "Firebase"],
  },
  {
    title: "Movie Search",
    url: "https://akheresearchmovie.netlify.app/about",
    img: movieSearchImg,
    desc: ` This website is built using react for the front end. The api used is 
  themoviedb. A global context is used to manage state and a high order 
  component is used to load images with a fade in animation.`,

    github: "https://github.com/Akhere-G/movie-search-app",
    technologies: ["React"],
  },
  {
    title: "Blog Site",
    url: "https://akhere-blog-site.netlify.app/",
    img: blogSiteImg,
    desc: `A blog site that displays markdown blogs. This website is built using 
    Gatsby for the front end and Contentful for the CMS.`,

    github: "https://github.com/Akhere-G/gatsby-blog-site",
    technologies: ["React", "Gatsby", "Contentful"],
  },
];

export default data;
