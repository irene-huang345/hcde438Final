import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import GenButton from '../components/GenButton';
import Filters from './Filters.jsx'

const ai = new GoogleGenerativeAI(import.meta.env.VITE_APP_GEMINI_API_KEY);
 
function Home() {
    const [idea, setIdea] = useState('');
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState('');
    const [vibe, setVibe] = useState('');
    const [error, setError] = useState(null);

    const generateIdea = async () => {
        setLoading(true);

        try {
            const model = ai.getGenerativeModel({model: 'gemini-1.5-flash'})
            const request = `Give me a date idea in ${city || "Seattle"} with a ${vibe || "fun"} vibe.`

            const result = await model.generateContent(request);
            const push = await result.response.text();

            setIdea(push);
            console.log("idea", push)
            
        } catch (error) {
            console.error(error)
            setIdea("Fail")
        }
        setLoading(false);
    };
    
    return ( 
        <div style={{padding: '1rem'}}>
            <h1>Date Idea Generator</h1>
            <Filters city ={city} setCity={setCity} vibe={vibe} setVibe={setVibe} />
            <GenButton onClick={generateIdea} loading={loading} />

            {error && <p style={{color: 'red'}}>{error}</p>}

            {idea && (
                <div style = {{ padding: '1rem'}}>
                    <h2>Date idea</h2>
                    <p>{idea}</p>
                </div>
            )}
            
        </div>
    )
}

export default Home

