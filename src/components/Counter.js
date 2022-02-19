import React from 'react'
import Container from './Container/Container';

const Counter = ({counter}) => {
    const counterItems = counter.counter;
    return (
        <div className='counter' style={{backgroundImage: `url(${counter.counterBackground && counter.counterBackground.mediaItemUrl })`}}>
            <Container>
                <div className="counter-wrapper">
                    {
                        counterItems.map(item => 
                            <div key={item.text} className='counter-item'>
                                <span className='number'>{item.number}</span>
                                <span className='name'>{item.text}</span>
                            </div>
                        )
                    }
                </div>
            </Container>
        </div>
    )
}

export default Counter
