import '../styles/globals.css'
import Layout from "../components/Layout";
import '../Utility/fontawesome';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
