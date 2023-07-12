import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import { AppContextProvider } from "../context";
import "./tailwind.css"

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <NavBar/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  )
}

export default MyApp;