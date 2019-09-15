import React from 'react'
import './collection-preview.styles.csss';

const CollectionPreview = ( {title, items}) => (
    <div className="collection-preview">
        <div className="title">{ title.toUpperCase() } </div>
        <div className="preview">
            {items
                .filter((item, index) => index < 4)
                .map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    </div>
);

export default CollectionPreview;