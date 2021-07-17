import {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './Result.module.css';

const Planet = props =>{
    const [planet, setPlanet] = useState(null);

    useEffect( () => {
        axios.get(`https://swapi.dev/api/planets/${props.id}`)
            .then(response => setPlanet(response.data))
            .catch(setPlanet(null))
    }, [props])
    
    return (
        <>
            {
                planet === null ?
                <div className={styles.result}>
                    <h1>These are not the droids you are looking for!</h1>
                </div>
                :
                <div className={styles.result}>
                    <h1>{planet.name}</h1>
                    <ul>
                        <li><strong>Climate:</strong> {planet.climate}</li>
                        <li><strong>Terrain:</strong> {planet.terrain}</li>
                        <li><strong>Surface Water:</strong> {planet.surface_water}{isNaN(planet.surface_water) ? null : "%"}</li>
                        <li><strong>Population:</strong> {isNaN(planet.population) ? planet.population : Number(planet.population).toLocaleString()}</li>
                    </ul>
                </div>
            }
        </>
    );
}

export default Planet;