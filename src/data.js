import chatAppImg from "./assets/chatAppPage.jpeg";
import storytimeImg from "./assets/storytimePage.jpeg";
import movieSearchImg from "./assets/movieSearchPage.jpeg";
import eventPageImg from "./assets/EventPage.png";
import expenseTrackerImg from "./assets/expenseTrackerPage.jpeg";
import exerciseTrackerImg from "./assets/exerciseTrackerPage.jpeg";

const data = [
  {
    title: "Expense Tracker",
    slug: "expense-tracker",
    url: "https://ai-expense-tracker.netlify.app/",
    img: expenseTrackerImg,
    desc: `An app that tracks expenses and invoices. Users can make an account or sign up with google. 
    Once logged in, users can see their transactions, add new transactions, and edit and delete their transactions. 
    Express is used for the API, MongoDB is used for the database, Styled Components is used for styling and state 
    is managed by redux. The example user account is email: 'example@example.com' and password: '123456'`,
    github: [
      "https://github.com/Akhere-G/expense-tracker-frontend",
      "https://github.com/Akhere-G/expense-tracker-backend",
    ],
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node",
      "Redux",
      "TypeScript",
      "Styled Components",
    ],
  },
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
    title: "Storytime",
    slug: "storytime-app",

    url: "https://storytime-ai.herokuapp.com",
    img: storytimeImg,
    desc: `Storytime is a social app that allows users to create and 
    share stories. Users can create accounts, login and add their 
    favourite stories for other users to see. Stories can also be 
    deleted and added. JSON web tokens are used for authentication, 
    the front end is built using React, MongoDB is used for the 
    database, and express is used to create the rest API. 
    Hosted on heroku free tier so might take sometime to load.`,
    github: ["https://github.com/Akhere-G/auth-storytime"],
    technologies: ["MongoDB", "Express", "React", "Node", "Redux"],
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
  {
    title: "Exercise Tracker",
    slug: "exercise-tracker",

    url: "https://ai-exercise-tracker.netlify.app/",
    img: exerciseTrackerImg,
    desc: `A exercise tracker app made so teachers can assign exercise to students. 
    It is built using react for the front end, Express for the backend, MongoDB for 
    the database and Mongoose for data modelling. The app allows users to make new 
    students and add exercises to existing users. Exercises can be updated and deleted.`,
    github: ["https://github.com/Akhere-G/mern-exercise-tracker-app"],
    technologies: ["MongoDB", "Express", "React", "Node"],
  },
];

export default data;
