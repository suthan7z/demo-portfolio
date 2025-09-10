import weather from "../../assets/projects/weather.jpg";
import todoImg from "../../assets/projects/todo.jpeg";
import portfolioImg from "../../assets/projects/portfolio.jpeg";
import movieImg from "../../assets/projects/movie.jpeg";

const projects = [
  {
    title: "Weather App",
    description: "Weather app using React and OpenWeather API",
    live: "https://www.google.com/404",
    repo: "https://github.com/yourusername/weather-app",
    image: weather
  },
  {
    title: "Todo App",
    description: "A simple todo list with local storage support",
    live: "https://www.google.com/404",
    repo: "https://github.com/yourusername/todo-app",
    image: todoImg
  },
  {
    title: "Movie App",
    description: "A simple Movie App with API",
    live: "https://www.google.com/404",
    repo: "https://github.com/yourusername/movie-app",
    image: movieImg
  },
  {
    title: "Portfolio",
    description: "My personal portfolio built with React and CSS Modules",
    live: "https://www.google.com/404",
    repo: "https://github.com/yourusername/portfolio",
    image: portfolioImg
  }
];

export default projects;
