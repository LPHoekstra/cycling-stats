
function App() {
  const client_secret = ""

  const pathname = window.location.pathname
  const verification = pathname.split("?")
  const next = verification[0]
  console.log(next)

  if (next === "/exchange_token") {
    // récupération du code d'autorisation
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get("code")
    localStorage.setItem("code", code)
    // Récupération de l'ACCESS TOKEN
    fetch(`https://www.strava.com/oauth/token?client_id=127497&client_secret=${client_secret}&code=${code}&grant_type=authorization_code`, {
      method: "POST",
    })
    .then(response => response.json())
    .then(data => {
      const access_token = data.access_token
      access_token === undefined ? localStorage.setItem("undefined", access_token) : localStorage.setItem("access_token", access_token)
    })

    window.location.href = "http://localhost:3000/"
  }

  // test GET à l'api Strava des données de l'athlete
  const StravaFetch = () => {
    const access_token = localStorage.getItem("access_token")
    fetch("https://www.strava.com/api/v3/athlete", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })
    .then(response => response.json()).then(data => console.log(data))
  }

  const redirectionLogin = () => {
    window.location.href = "http://www.strava.com/oauth/authorize?client_id=127497&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force&scope=read"
  }


  return (
    <div>
      <header>
        <a
          href="https://reactjs.org"
        >
          Learn React
        </a>
      </header>
      <main>
        <button onClick={() => redirectionLogin()}>Connexion avec Strava</button>
        <button onClick={() => StravaFetch()}>Info athlete</button>
        <span>test</span>
      </main>
    </div>
  );
}

export default App;
