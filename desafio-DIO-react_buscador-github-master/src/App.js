import Layout from "./components/layout";
import Profile from "./components/profile/Profile";
import Repositories from "./components/repositories/index";
import { ResetCSS } from "./global/resetCSS";

function App() {
  return (
    <main>
      <ResetCSS />
      <Layout> 
        <Profile />
        <Repositories />
      </Layout>
    </main>
  );
}

export default App;
