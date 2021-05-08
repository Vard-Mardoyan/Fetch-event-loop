const movieList = document.getElementById("movies-list");
fetch(`https://ghibliapi.herokuapp.com/films`)
	.then((response) => response.json())
	.then((movie) => {
		movie.forEach(
			({ title, description, director, producer, release_date }) => {
				const moviesContainer = document.createElement("div");
				moviesContainer.style.cssText =
					"	width: 400px;height: 350px;border: 3px solid lightgray; margin-top:15px";

				const movieTitle = document.createElement("div");
				movieTitle.style.cssText =
					"	text-align: center;padding-top: 5px;margin: 0 auto;width: 280px;height: 28px;margin-top: 20px;font-size: 12px;border: 1px solid lightgray;background-color: lightgray;";
				movieTitle.innerHTML = `<span>title: </span> ${title}`;
				moviesContainer.append(movieTitle);

				const movieDescription = document.createElement("div");
				movieDescription.style.cssText =
					"		margin: 0 auto;padding-top: 5px;text-align: center;width: 280px;height: 128px;margin-top: 15px;overflow: hidden;font-size: 12px;border: 1px solid lightgray;background-color: lightgray;";
				movieDescription.textContent = description;
				moviesContainer.append(movieDescription);

				const movieDirector = document.createElement("div");
				movieDirector.style.cssText =
					"	text-align: center;padding-top: 5px;margin:0 auto;margin-top: 15px;width: 280px;height: 28px;font-size: 12px;border: 1px solid lightgray;background-color: lightgray;";
				movieDirector.textContent = director
				;
				moviesContainer.append(movieDirector);

				const movieProducer = document.createElement("div");
				movieProducer.style.cssText =
					"	text-align: center;padding-top: 5px;margin: 0 auto;width: 280px;height: 28px;margin-top: 15px;font-size: 12px;border: 1px solid lightgray;background-color: lightgray;";
				movieProducer.textContent = producer;
				moviesContainer.append(movieProducer);

				const releaseDate = document.createElement("div");
				releaseDate.style.cssText =
					"	text-align: center;padding-top: 5px;margin: 0 auto;width: 280px;height: 28px;margin-top: 15px;font-size: 12px;border: 1px solid lightgray;background-color: lightgray;";

				releaseDate.textContent = release_date;
				moviesContainer.append(releaseDate);

				movieList.append(moviesContainer);
			}
		);
		erHTML = html;
	});
