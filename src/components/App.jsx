import { Layout } from "./Layout/Layout";
import { Home } from "pages/Home/Home";
import { Movies } from "pages/Movies/Movies";
import { MoviesDetails } from "pages/MovieDetails/MovieDetails";
export const App = () => {
  return (<>
<Layout>
<Home/>
<Movies/>
<MoviesDetails/>
</Layout>
</>
  );
};
