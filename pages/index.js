import { database } from '../mock-database';
import StaticArticlesList from '../components/Articles/StaticArticlesList';

const Home = () => <StaticArticlesList articles={database} />;

export default Home
