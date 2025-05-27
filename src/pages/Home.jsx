import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import GenButton from '../components/GenButton';
import Filters from './Filters.jsx'

const ai = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
 
function Home() {
    const [idea, setIdea] = useState('');
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState('');
    const [vibe, setVibe] = useState('');

    const generateIdea = async () => {
        setLoading(true);

        const model = ai.getGenerativeModel({model: 'models/gemini-2.0-flash'})
        const request = `Give me a date idea in ${city || "Seattle"} with a ${vibe || "fun"} vibe.`

        try {
            const response = await ai.models.generateContent(request);
            
        } catch (error) {
            console.error(error)
            setIdea("Error")
        }
        setLoading(false);
    };
    
    return ( 
        <div style={{padding: '1 rem'}}>
            <h1>Date Idea Generator</h1>
            <Filters city ={city} setCity={setCity} vibe={vibe} setVibe={setVibe} />
            <GenButton onClick={generateIdea} loading={loading} />
            
        </div>
    )
}

export default Home

