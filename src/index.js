function fetchJokes() {
  return fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
}

async function displayJokes() {
  try {
    const jokeContainer = document.getElementById("joke-container");
    const jokeSetup = document.createElement("p");
    const firstjokes = document.createElement("p");
    const jokeData = await fetchJokes();

    jokeSetup.innerHTML = jokeData.setup;
    firstjokes.innerHTML = jokeData.punchline;
    jokeContainer.appendChild(jokeSetup);
    setTimeout(() => jokeContainer.appendChild(firstjokes), 2000);
  } catch (error) {
    console.log("Error displaying jokes:", error);
  }
}

displayJokes();
