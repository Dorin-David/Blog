import Articles from '../components/Articles/Articles';

const API = process.env.NEXT_PUBLIC_CMS_API;

const Home = () => <Articles API={API}/>;

export default Home
