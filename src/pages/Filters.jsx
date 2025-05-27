import React from 'react';

function Filters({ city, setCity, vibe, setVibe}) {
    return(
        <div>
            <label>
                City:
                <select
                 value={city}
                 onChange={(e) => setCity(e.target.value)}
                 >
                    <option value="">Choose City</option>
                    <option value="Seattle">Seattle</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="New York">New York</option>
                </select>
            </label>

            <label>
                Vibe:
                <select
                 value={vibe}
                 onChange={(e) => setVibe(e.target.value)}
                 >
                    <option value="">Choose Vibe</option>
                    <option value="Fun">Fun</option>
                    <option value="Night">Night Time</option>
                    <option value="Cute">Cute</option>
                    <option value="Rainy">Rainy</option>
                </select>
            </label>
        </div>
    );
}

export default Filters;