import React from 'react'

const Model = ({errors, setErrors}) => {
    if(errors) {
        return (
            <div className='overlay'>
                <div className='modelContainer'>
                    <button onClick={() => setErrors()} className='closeBtn'>X</button>
                    <div className='content'>
                        <h2>{errors}</h2>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default Model