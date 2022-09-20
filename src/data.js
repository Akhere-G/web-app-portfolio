import chatAppImg from "./assets/chatAppPage.jpeg";
import movieSearchImg from "./assets/movieSearchPage.jpeg";
import eventPageImg from "./assets/EventPage.png";

const data = [
  {
    title: "Events Page",
    slug: "Events-page",
    url: "https://communitythf.vercel.app/",
    img: eventPageImg,
    desc: `A blog site built in Next.js that lists the different events available for a community based organisation. 
    Event pages are generated using static generation and data for events are fetched from Contentful. Events are listed 
    by category, and each event has a page that is built using a dynamic route.`,

    github: ["https://github.com/Akhere-G/nextjs-blog"],
    technologies: ["React", "NextJs", "Contentful"],
  },
  {
    title: "Chat App",
    slug: "chat-app",
    url: "https://chat-app-34dd1.web.app/",
    img: chatAppImg,
    desc: `A chat app built using react for the front end and firebase for the 
    authentication and the database. The app allows users to login and 
    send messages to a public group chat. The user can delete their own 
    messages as well. It is responsive and  mobile friendly.`,
    github: ["https://github.com/Akhere-G/chat-app"],
    technologies: ["React", "Firebase"],
  },
  {
    title: "Movie Search",
    slug: "movie-search",
    url: "https://ai-search-movie.netlify.app",
    img: movieSearchImg,
    desc: `This website is built using react for the front end. The API used is 
    Themoviedb. A global context is used to manage state and a higher order component 
    is used to load images with a fade in animation. A pagination components is used to display 
    the movies in the given space.`,

    github: ["https://github.com/Akhere-G/movie-search-app"],
    technologies: ["React"],
  },
];

export default data;
