import { useEffect, useState } from "react";
import axios from 'axios';
import Movie from "./Movie";
import './Home.css';

function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.post('https://hoblist.com/api/movieList', {
            "category": "movies",
            "language": "kannada",
            "genre": "all",
            "sort": "voting",
        })
            .then(response => {
                // console.log(response.data);
                setData(response.data.result);
            })
            .catch(err => {
                console.log('error in posting data', err);
            })
    }, [])
    return (
        <div className="home-container">
            {
                data.map((movie) => {
                    return (
                        <div key={movie._id}>
                            <Movie movie={movie}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home;


// {
//     "_id": "5ce26565842db9428619496d",
//     "director": [
//         "Santhosh Ananddram"
//     ],
//     "writers": [
//         ""
//     ],
//     "stars": [
//         "puneeth rajkumar"
//     ],
//     "releasedDate": 1617218999,
//     "productionCompany": [
//         ""
//     ],
//     "title": "Yuvarathnaa",
//     "language": "Kannada",
//     "runTime": null,
//     "genre": "action,drama",
//     "voted": [
//         {
//             "upVoted": [
//                 "5e175e1d0638b447521cae98"
//             ],
//             "downVoted": [],
//             "_id": "5ce26565842db9428619496f",
//             "updatedAt": 1566905378,
//             "genre": "action"
//         },
//         {
//             "upVoted": [
//                 "5e175e1d0638b447521cae98"
//             ],
//             "downVoted": [],
//             "_id": "5ce26565842db9428619496e",
//             "updatedAt": 1566905378,
//             "genre": "drama"
//         }
//     ],
//     "poster": "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1558340965271_Yuvarathnaa.jpg",
//     "pageViews": 335,
//     "description": "",
//     "upVoted": [
//         "6066b32b9de1c7591dac55dd",
//         "6070a229315bc40c7d445944"
//     ],
//     "downVoted": [
//         "6071243a315bc40c7d4459c7"
//     ],
//     "totalVoted": 3,
//     "voting": 1
// }