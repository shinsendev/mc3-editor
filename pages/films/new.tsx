import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useSWR from 'swr';
import {Container} from "@material-ui/core";

export default function New() {
    return (
        <Container>
            <TextField label="Title" />
        </Container>
    )
}