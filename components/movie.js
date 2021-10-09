import Image from 'next/image';
import {useState} from 'react';
import { useEffect } from 'react';


export default function Movie({ movie_id }) {
    //fetch movie details
    const [movieDetails, setMovieDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=84820fcd9dbc45269d08e17d64e25958&language=en`);
                const data = await res.json();
                setMovieDetails(data);
                setLoading(false);
            } catch (error) {
                setError(true);
            }
        };
        fetchData();
    }, []);
    
    return (
        <div className="mb-16">
            <div className="py-3 sm:max-w-xl sm:mx-auto">
                <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
                <div className="h-48 overflow-visible w-1/2">
                    {
                        loading ?
                        <div className="h-full w-full flex justify-center items-center">
                            <div className="spinner"></div>
                        </div>
                        :
                        error ?
                        <div className="h-full w-full flex justify-center items-center">
                            <div className="text-red-500">
                                <p>Error fetching movie details</p>
                            </div>
                        </div>
                        :
                        <Image 
                        className="rounded-3xl shadow-lg" 
                        width={600}
                        height={900}
                        src={"https://image.tmdb.org/t/p/original"+movieDetails.poster_path} 
                        alt="" />
                    }
                </div>
                <div className="flex flex-col w-1/2 space-y-4">
                    <div className="flex justify-between items-start">
                    <h2 className="text-3xl font-bold">{movieDetails.title}</h2>
                    <div className="bg-yellow-400 font-bold rounded-xl p-2">{movieDetails.vote_average}</div>
                    </div>
                    <div>
                    <div className="text-sm text-gray-400">Release date</div>
                    <div className="text-lg text-gray-800">{movieDetails.release_date}</div>
                    </div>
                    <p className=" text-gray-400 max-h-40 overflow-y-hidden">{movieDetails.overview}</p>
                </div>

                </div>
            
            </div>
        </div>
    );
}