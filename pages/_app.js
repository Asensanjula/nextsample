import '../styles/globals.css'
import Layout from "../components/Layout";
import '../utility/fontawesome';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
