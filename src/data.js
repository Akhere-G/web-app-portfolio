import chatAppImg from "./assets/chatAppPage.jpeg";
import movieSearchImg from "./assets/movieSearchPage.jpeg";
import eventPageImg from "./assets/eventPage.jpg";
import expenseTrackerImg from "./assets/expenseTrackerPage.png";
import taskFlowPage from "./assets/taskFlowPage.png"
import tripTrackPage from "./assets/tripTrackPage.png"

const data = [
  {
    title: "TripTrack",
    slug: "trip-track",
    url: "https://tripapp-752853711822.europe-west2.run.app",
    img: tripTrackPage,
    desc: `A collaborative travel and event planning application featuring integrated map and calendar views alongside AI-driven itinerary automation. Users can leverage AI to instantly generate daily plans, optimise routes to reduce travel times, and fetch tailored local travel tips. The platform supports real-time group collaboration with distinct Admin and Viewer roles, Google-powered event and place discovery, and seamless calendar exports for offline access.`,
    github: [
      "https://github.com/Akhere-G/event-planner",
    ],
    technologies: [
      "React",
      "Redux Toolkit (RTK Query)",
      "Flask",
      "SQLAlchemy",
    ],
  },
  {
    title: "TaskFlow",
    slug: "task-flow",
    url: "https://taskflow-752853711822.europe-west2.run.app", 
    img: taskFlowPage,
    desc: `A comprehensive productivity and task management application featuring flexible list and calendar views alongside AI-powered workflow automation. It includes smart habit tracking with future scheduling, natural language quick-add tools, and an AI coach for daily prioritisation and project decomposition. The platform also integrates focus-boosting features like a Pomodoro timer with automated logging, alongside detailed workload insights, activity maps, and deadline tracking visualisations.`,
    github: [
      "https://github.com/Akhere-G/task-manager",
    ],
    technologies: [
      "React",
      "Flask",
      "MySQL",
    ],
  },

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
    technologies: ["React", "NextJs", "Node", "Contentful"],
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
