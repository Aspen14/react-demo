import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import RankItemsContainer from "./components/RankItemsContainer";
import MovieImageArr from "./components/MovieImages.js";
import AlbumImageArr from "./components/AlbumImages";
import { Info } from "./components/Info";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/rank-movies',
    element: <RankItemsContainer dataType={1} imgArr={MovieImageArr} />
  },
  {
    path: '/rank-albums',
    element: <RankItemsContainer dataType={2} imgArr={AlbumImageArr}/>
  },
  {
    path: '/info',
    element: < Info />
  }
];

export default AppRoutes;
