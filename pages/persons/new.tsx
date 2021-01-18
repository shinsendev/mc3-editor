import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useSWR from 'swr';
import {Container} from "@material-ui/core";

function CreatePerson({films}) {
    // const { data, error } = useSWR('https://127.0.0.1:8000/api/films.jsonld', fetch)
    // if (error) return <div>failed to load</div>
    // if (!data) return <div>loading...</div>
    //
    // console.log(data['hydra:totalItems']);

    console.log(films);
    const [filmInput, setFilmInput] = useState('')

    function handleFilmChange(event) {
        console.log(event.target.value);
        setFilmInput(event.target.value)
    }

    return (
        <Container>
            <div>My value = {filmInput}</div>


            <h2>Add a person</h2>

            <TextField label='First name'/>
            <TextField label='Last name'/>
            <TextField label='Gender' />
            <TextField label='Band Name' />

            <Autocomplete
                id="films-box"
                options={films['hydra:member']}
                getOptionLabel={(film) => film.title}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} onChange={handleFilmChange} label="Films" variant="outlined" />}
            />

        </Container>
    )
}

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://127.0.0.1:8000/api/films.jsonld')
    const films = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            films,
        },
    }
}

export default CreatePerson;