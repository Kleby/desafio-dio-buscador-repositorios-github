import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import Profile from "./components/profile/Profile";
import Repositories from "./components/repositories/index";
import useGithub from "./hooks/github-hooks";

function App() {
  const {githubState} = useGithub();
  return (
    <Layout> 
      {githubState.hasUser ?
          <>
          {githubState.loading ? (
          <p>Loading</p> ): (
          <>
            <Profile />
            <Repositories />
          </>)}
         </>
         :
         <NoSearch />
      }
  
  </Layout>
  );
}

export default App;
