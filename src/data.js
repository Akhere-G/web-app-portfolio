import chatAppImg from "./assets/chatAppPage.jpeg";
import storytimeImg from "./assets/storytimePage.jpeg";
import movieSearchImg from "./assets/movieSearchPage.jpeg";
import blogSiteImg from "./assets/blogSitePage.jpeg";
import expenseTrackerImg from "./assets/expenseTrackerPage.jpeg";
import exerciseTrackerImg from "./assets/exerciseTrackerPage.jpeg";

const data = [
  {
    title: "Expense Tracker",
    slug: "expense-tracker",
    url: "https://ai-expense-tracker.herokuapp.com/",
    img: expenseTrackerImg,
    desc: `An app that tracks expenses and invoices. Users can make an account or sign up with google. 
    Once logged in, users can see their transactions, add new transactions, and edit and delete their transactions. 
    Express is used for the API, MongoDB is used for the database, Styled Components is used for styling and state 
    is managed by redux. The example user account is email: 'example@example.com' and password: '123456'`,
    github: ["https://github.com/Akhere-G/expense-tracker-frontend", "https://github.com/Akhere-G/expense-tracker-backend"],
    technologies: ["MongoDB", "Express", "React", "Node", "Redux", "TypeScript", "Styled Components"],
    
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
  {
    title: "Blog Site",
    slug: "blog-site",
    url: "https://ai-blog-site.netlify.app/",
    img: blogSiteImg,
    desc: `A blog site that displays markdown blog posts. This website is built using 
    Gatsby for the front end and Contentful for the CMS. It is responsive and allows blog 
    posts with images to be shown`,

    github: ["https://github.com/Akhere-G/gatsby-blog-site"],
    technologies: ["React", "Gatsby", "Contentful"],
  },
];

export default data;
