import Footer from "../components/Footer";
import Main from "../components/Main";
import RowsMovies from "../components/RowsMovies";
import requestsApi from "../helpers/requests";

import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <>
      <Main />
      <RowsMovies
        rowId="1"
        title={"Up Coming"}
        fetchUrl={requestsApi.requestUpcoming}
      />
      <RowsMovies
        rowId="2"
        title={"Popular"}
        fetchUrl={requestsApi.requestPopular}
      />
      <RowsMovies
        rowId="3"
        title={"Top Rated"}
        fetchUrl={requestsApi.requestTopRated}
      />
      <RowsMovies
        rowId="4"
        title={"Horror"}
        fetchUrl={requestsApi.requestHorror}
      />
      <RowsMovies
        rowId="5"
        title={"Trending"}
        fetchUrl={requestsApi.requestTrending}
      />
      <RowsMovies
        rowId="6"
        title={"Drama"}
        fetchUrl={requestsApi.requestDrama}
      />
      <RowsMovies
        rowId="7"
        title={"Anime"}
        fetchUrl={requestsApi.requestAnime}
      />

      <ToastContainer />

      <Footer />
    </>
  );
};

export default Home;
