import Head from 'next/head'
import Header from '../components/header';
import Movie from '../components/movie';

export default function Home() {
  return (
    <div id="root"
      className="
      antialiased
      bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400
      h-screen
    ">
      <Head>
        <title>Studio KaLaHa: movie reviews</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="px-4">
        <Movie movie_id={354912} />
        <Movie movie_id={629} />
        <Movie movie_id={424} />
    </div>
    </div>  
  )
}
