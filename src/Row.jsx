import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl,isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	useEffect(() => {
		async function fetchDaata() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			
			return request;
		}

		fetchDaata();
	}, [fetchUrl]);


	const handleClick = async (movie) => {
		if (trailerUrl) {
		  setTrailerUrl("");
		} else {
		  let trailerurl = await axios.get(
			`/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
		  );
		  setTrailerUrl(trailerurl.data.results[0]?.key);
		}
	  };

	const opts = {
		height:"390",
		width:"100%",
		playerVars: {
			autoplay: 1,
		  },
	}

	return (
		<div className="row">
			{/* title */}
			<h1>{title}</h1>

			<div className="row__posters">
				{/*several row  posters */}

				{movies.map((movie,ind) => {
					return (
						<img
						onClick={()=> handleClick(movie)}
                            key={ind}
							className={`row__poster ${isLargeRow && "row__posterLarge" }`}
							src={`${base_url}${isLargeRow ? movie.poster_path  : movie.backdrop_path}`}
							alt={movie.name}
						/>
					);
				})}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</div>
	);
}

export default Row;
