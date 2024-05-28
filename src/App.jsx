
function App() {
  // test GET à l'api Strava des données de l'athlete
  const StravaFetch = () => {
    fetch("https://www.strava.com/api/v3/athlete", {
      method: "GET",
      headers: {
        Authorization: "Bearer 9abaa7d4245b66e1d82fe6f5576fb5c065035620"
      }
    })
    .then(response => response.json()).then(data => console.log(data))
  }

  const redirectionLogin = () => {
    window.location.href = "http://www.strava.com/oauth/authorize?client_id=127497&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=read"
  }

  return (
    <div>
      <header>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <button onClick={() => redirectionLogin()}>Connexion avec Strava</button>
        <button onClick={() => StravaFetch()}>Info athlete</button>
      </main>
    </div>
  );
}

export default App;
