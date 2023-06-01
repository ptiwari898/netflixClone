import React from "react";
import "./Home.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillPlayCircle, AiOutlinePlusCircle } from "react-icons/ai";
const apiKey = "6095d7be5ef714699cfe932d1f4f2c24";
const url = "https://api.themoviedb.org/3/movie";
const imgurl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const now_playing = "now_playing";
const popular = "popular";
const top_rated = "top_rated";

const Card = ({ img }) => <img className="card" src={img} alt="" />;

const Row = ({
  title,
  arr = [
    {
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg",
    },
  ],
}) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgurl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [top_ratedMovies, setTop_ratedMovies] = useState([]);

  useEffect(() => {
    const fetchupcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${upcoming}?api_key=${apiKey}`);

      setUpcomingMovies(results);
    };
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${popular}?api_key=${apiKey}`);

      setPopularMovies(results);
    };
    const fetchnow_playing = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${now_playing}?api_key=${apiKey}`);

      setNowPlayingMovies(results);
    };

    const fetchtop_rated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${top_rated}?api_key=${apiKey}`);

      setTop_ratedMovies(results);
    };

    fetchupcoming();
    fetchPopular();
    fetchnow_playing();
    fetchtop_rated();
  }, []);

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: popularMovies[0]
            ? `url(${`${imgurl}/${popularMovies[0].poster_path}`})`
            : "none",
        }}
      >
        {popularMovies[0] && <h1>{popularMovies[0].original_title} </h1>}
        {popularMovies[0] && <p>{popularMovies[0].overview}</p>}
       <div>
       <button>
          Play <AiFillPlayCircle />
        </button>
        <button>
          My LIst
          <AiOutlinePlusCircle />
        </button>
       </div>
      </div>
      <Row title={"Top Rated"} arr={top_ratedMovies} />
      <Row title={"Popular on Netflix"} arr={popularMovies} />
      <Row title={"Movie"} arr={nowPlayingMovies} />
      <Row title={" upcoming Movies  on Netflix"} arr={upcomingMovies} />
    </section>
  );
};

export default Home;
