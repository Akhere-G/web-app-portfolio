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
    messages as well. It is responsive and  mobile friendly.`,
    github: "https://github.com/Akhere-G/chat-app",
    technologies: ["React", "Firebase"],
  },
  {
    title: "Movie Search",
    url: "https://ai-search-movie.netlify.app/about",
    img: movieSearchImg,
    desc: `This website is built using react for the front end. The API used is 
    Themoviedb. A global context is used to manage state and a higher order component 
    is used to load images with a fade in animation. A pagination components is used to display 
    the movies in the given space.`,

    github: "https://github.com/Akhere-G/movie-search-app",
    technologies: ["React"],
  },
  {
    title: "Blog Site",
    url: "https://ai-blog-site.netlify.app/",
    img: blogSiteImg,
    desc: `A blog site that displays markdown blog posts. This website is built using 
    Gatsby for the front end and Contentful for the CMS. It is responsive and allows blog 
    posts with images to be shown`,

    github: "https://github.com/Akhere-G/gatsby-blog-site",
    technologies: ["React", "Gatsby", "Contentful"],
  },
];

export default data;
