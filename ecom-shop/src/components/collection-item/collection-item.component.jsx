import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({id, name, price, imageUrl}) => (
    <div class="collection-item">
        <div className="image"
             style={{ backgroundIamge: `url(${imageUrl})`}}
        </div>
    </div>
)