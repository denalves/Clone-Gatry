import React from 'react';
import {useParams} from 'react-router-dom';

const PagesPromotinForm = () => {

    const {id} = useParams();
    return (
        <div>
            form
            {id && <div>id : {id}</div>}
        </div>
    )
}

export default PagesPromotinForm;
