import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {searchItem} from "../../actions/actions";

function Search(): JSX.Element {
    const dispatch = useDispatch()
    const [value, setValue] = useState("");
    useEffect(() => {
         dispatch(searchItem(value))
    }, [value]);

    return (
        <input
            className="form-control"
            value={value}
            placeholder="search"
            onChange={(e) => {
                setValue(e.target.value);
            }}
        />
    );
}

export default connect()(Search);
