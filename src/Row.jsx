import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchDaata() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}

		fetchDaata();
	}, [fetchUrl]);

	return (
		<div className="row">
			{/* title */}
			<h1>{title}</h1>

			<div className="row__posters">
				{/*several row  posters */}

				{movies.map((movie) => {
					return (
						<img
							className="row__poster"
							src={`${base_url}${movie.poster_path}`}
							alt={movie.name}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Row;
