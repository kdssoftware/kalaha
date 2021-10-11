import Head from "next/head";
import Header from "../components/header";
import Movie from "../components/movie";
import fauna from "../lib/fauna";
const {
  Paginate,
  Get,
  Select,
  Match,
  Index,
  Create,
  Collection,
  Lambda,
  Var,
  Join,
  Documents,
  Update,
  Delete,
  Map,
} = fauna.query;
const client = fauna.client;

export default function Home({ movies }) {
  return (
    <div
      id="root"
      className="
      antialiased
      bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400
      h-screen
    "
    >
      <Head>
        <title>Studio KaLaHa: movie reviews</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="px-4">
        {
        movies.map((movie) => (
          <Movie movie={movie} key={movie.faunadb.ref}/>
        ))
        }
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const result = await client.query(
    Map(
      Paginate(Documents(Collection("movie"))),
      Lambda((x) => Get(x))
    )
  );
  const movies_promised = await result.data.map(async (movieData) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieData.data.tmdb_id}?api_key=84820fcd9dbc45269d08e17d64e25958&language=en`);
    const tmdb = await res.json();
    return {
      faunadb: {
        data: movieData.data,
        ref: movieData.ref.id,
        ts: movieData.ts,
      },
      tmdb,
    }
  });
  const movies = await Promise.all(movies_promised);
  return {
    props: {
      movies,
    },
  };
}
