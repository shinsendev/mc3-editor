import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function PersonNew() {
    return (
        <div>
            <div>Hello world from Gaétan</div>
            <Autocomplete
                id="combo-box-demo"
                options={['top100Films', 'nope']}
                getOptionLabel={(option) => 'option'}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
            />
        </div>
    )
}
