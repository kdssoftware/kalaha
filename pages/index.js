import Head from 'next/head'
import Header from '../components/header';

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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="px-4">
      <div
        className="
          flex
          justify-center
          items-center
          bg-white
          mx-auto
          max-w-2xl
          rounded-lg
          my-16
          p-16
        "
      >
        <h1 className="text-2xl font-medium">Hier komen onze films!</h1>
      </div>
    </div>
    </div>
  )
}
