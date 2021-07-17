import {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './Result.module.css';

const Starship = props =>{
    const [starship, setStarship] = useState(null);

    useEffect( () => {
        axios.get(`https://swapi.dev/api/starships/${props.id}`)
            .then(response => setStarship(response.data))
            .catch(setStarship(null))
    }, [props])
    
    return (
        <>
            {
                starship === null ?
                <div className={styles.result}>
                    <h1>These are not the droids you are looking for!</h1>
                </div>
                :
                <div className={styles.result}>
                    <h1>{starship.name}</h1>
                    <ul>
                        <li><strong>Manufacturer:</strong> {starship.manufacturer}</li>
                        <li><strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}</li>
                        <li><strong>Cost:</strong> {isNaN(starship.cost_in_credits) ? starship.cost_in_credits : Number(starship.cost_in_credits).toLocaleString() + " Credits"}</li>
                        <li><strong>Class:</strong> {starship.starship_class}</li>
                    </ul>
                </div>
            }
        </>
    );
}

export default Starship