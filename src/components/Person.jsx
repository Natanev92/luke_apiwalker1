import {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

import styles from './Result.module.css';

const People = props =>{
    const [person, setPerson] = useState(null);
    const [homeworld, setHomeworld] = useState({});

    useEffect( () => {
        axios.get(`https://swapi.dev/api/people/${props.id}`)
            .then(response =>{
                setPerson(response.data);
                return response.data;
            })
            .catch(setPerson(null))
        .then(person => axios.get(person.homeworld))
        .then(response => setHomeworld(response.data));
    }, [props])
    
    return (
        <>
            {
                person === null ?
                <div className={styles.result}>
                    <h1>These are not the droids you are looking for!</h1>
                </div>
                :
                <div className={styles.result}>
                    <h1>{person.name}</h1>
                    <ul>
                        <li><strong>Height:</strong> {person.height}cm</li>
                        <li><strong>Mass:</strong> {person.mass}kg</li>
                        <li><strong>Hair Color:</strong> {person.hair_color}</li>
                        <li><strong>Skin Color:</strong> {person.skin_color}</li>
                        <li><strong>Homeworld:</strong> <Link to = {person.homeworld.slice(20)}>{homeworld.name}</Link></li>
                    </ul>
                </div>
            }
        </>
        
    );
}

export default People;