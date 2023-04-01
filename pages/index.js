import { database } from '../mock-database';
import StaticArticlesList from '../components/Articles/StaticArticlesList';
import Articles from '../components/Articles/Articles';

const API = process.env.NEXT_PUBLIC_CMS_API;

const Home = () => <Articles />;

export default Home
