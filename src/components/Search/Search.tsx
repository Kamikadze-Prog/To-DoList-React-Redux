import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {searchItem} from "../../actions/actions";
import './search.scss';

function Search(): JSX.Element {
    const dispatch = useDispatch()
    const [value, setValue] = useState("");
    useEffect(() => {
        dispatch(searchItem(value))
    }, [value]);

    return (
        <div className={`filter-search`}>
            <input
                className="form-control"
                value={value}
                placeholder="Search task"
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </div>
    );
}

export default connect()(Search);
