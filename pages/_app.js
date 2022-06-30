import '../styles/globals.css';
import StateWrapper from '../components/StateWarapper';
function MyApp({ Component, pageProps }) {
  return (
    <StateWrapper>
      <Component {...pageProps} />
    </StateWrapper>
  );
}
export default MyApp;
