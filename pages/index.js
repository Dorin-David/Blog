import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { database } from '../mock-database';
import ArticlesList from '../components/Articles/ArticlesList';

const Home = () => <ArticlesList articles={database} />;

export default Home
