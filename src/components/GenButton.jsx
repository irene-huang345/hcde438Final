import React from 'react';

function GenButton( {onClick, loading} ) {
    return(
        <button
            onClick={onClick}
            style={{
                padding: '1rem',
                border: 'none',
                color:'black',
                cursor:'pointer'
            }}
        >
            {loading ? 'Generating...' : 'Generate Idea'}
        </button>
    );
}

export default GenButton;