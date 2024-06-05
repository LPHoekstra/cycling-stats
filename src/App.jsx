function App() {
  // données de l'athlete
  const StravaFetch = () => {
    fetch("https://localhost:4000/athlete", {
      method: "GET",
      credentials: "include"
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }

  const redirectionLogin = () => {
    window.location.href = "http://www.strava.com/oauth/authorize?client_id=127497&response_type=code&redirect_uri=https://localhost:4000/exchange_token&approval_prompt=force&scope=read"
  }


  return (
    <div>
      <header></header>
      <main>
        <button onClick={() => redirectionLogin()}>Connexion avec Strava</button>
        <button onClick={() => StravaFetch()}>Info athlete</button>
        <span>test</span>
      </main>
    </div>
  );
}

export default App;
