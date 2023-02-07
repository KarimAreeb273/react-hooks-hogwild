import React from 'react';
import HogRender from './HogRender';

function HogTitle({hogs}) {

    const renderHogs = hogs.map((hog) => { 
       return <HogRender key = {hog.name} hog={hog} />
    });

    return (
        <div className="ui three stackable cards"> 
        {renderHogs} 
        </div>
    )
}

export default HogTitle;