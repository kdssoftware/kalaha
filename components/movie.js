import Image from 'next/image';
import {useState} from 'react';
import { useEffect } from 'react';


export default function Movie({ movie }) {
    // console.log(movie);
    return (
        <div className="mb-16">
            <div className="py-3 sm:max-w-xl sm:mx-auto">
                <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
                <div className="h-48 overflow-visible w-1/2">
                        <Image 
                        className="rounded-3xl shadow-lg" 
                        width={600}
                        height={900}
                        src={"https://image.tmdb.org/t/p/original"+movie.tmdb.poster_path} 
                        alt="" />
                </div>
                <div className="flex flex-col w-1/2 space-y-4">
                    <div className="flex justify-between items-start">
                    <h2 className="text-3xl font-bold">{movie.tmdb.title}</h2>
                    <div className="bg-yellow-400 font-bold rounded-xl p-2">{movie.tmdb.vote_average}</div>
                    </div>
                    <div>
                    <div className="text-sm text-gray-400">Release date</div>
                    <div className="text-lg text-gray-800">{movie.tmdb.release_date}</div>
                    </div>
                    <p className=" text-gray-400 max-h-40 overflow-y-hidden">{movie.tmdb.overview}</p>
                </div>

                </div>
            
            </div>
        </div>
    );
}