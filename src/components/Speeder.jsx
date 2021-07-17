import {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './Result.module.css';

const Speeder = props =>{
    const [speeder, setSpeeder] = useState(null);

    useEffect( () => {
        axios.get(`https://swapi.dev/api/vehicles/${props.id}`)
            .then(response => setSpeeder(response.data))
            .catch(setSpeeder(null))
    }, [props])
    
    return (
        <>
            {
                speeder === null ?
                <div className={styles.result}>
                    <h1>These are not the droids you are looking for!</h1>
                </div>
                :
                <div className={styles.result}>
                    <h1>{speeder.name}</h1>
                    <ul>
                        <li><strong>Manufacturer:</strong> {speeder.manufacturer}</li>
                        <li><strong>Cargo Capacity:</strong> {isNaN(speeder.cargo_capacity) ? speeder.cargo_capacity : Number(speeder.cargo_capacity).toLocaleString()}</li>
                        <li><strong>Cost:</strong> {isNaN(speeder.cost_in_credits) ? speeder.cost_in_credits : Number(speeder.cost_in_credits).toLocaleString() + " Credits"}</li>
                        <li><strong>Class:</strong> {speeder.speeder_class}</li>
                    </ul>
                </div>
            }
        </>
    );
}

export default Speeder;