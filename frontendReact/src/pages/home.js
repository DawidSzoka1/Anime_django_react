import React, {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const result = await axios.get('/api/');
            setData(result.data)

        }

        fetchData();
    }, []);

    return (
        <div>
            {data.map((el, index) =>(
                <div id={index}>
                    <p>{el.name}</p>
                    <p>{el.description}</p>
                    <img src={el.img} alt={'obrazke'}/>

                </div>
                ))}


        </div>
    )
}

export default Home;
