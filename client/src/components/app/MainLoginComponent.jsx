import { useAuth0 } from "@auth0/auth0-react";

const MainLoginComponent = (props) => {
    const { loginWithRedirect, isLoading, error } = useAuth0();
    return (
      <>
        {isLoading && <>
          <div className="loading-page">
            <div className="loading-page__spinner">
              <div className="lds-dual-ring"></div>          
            </div>
          </div>
        </>}
        {error && <p>Error</p>}
        {!isLoading && !error && <>
          <div className="main-login">
            <div className="main-login__inside">
              <h1 className="main-login__title">Aplikacja Organizer</h1>
              <button className="main-login__button" onClick={loginWithRedirect}>Zaloguj się</button>
            </div>
          </div>
        </>}
        
      </>
    )
  }

  export default MainLoginComponent;