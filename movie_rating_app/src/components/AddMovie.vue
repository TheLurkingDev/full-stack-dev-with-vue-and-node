<template>
    <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
        label="Movie Name"
        v-model="name"
        :rules="nameRules"
        required
        >
        </v-text-field>
        <v-textarea
        name="input-7-1"
        label="Movie Description"
        v-model="description"
        >
        </v-textarea>
        <v-select
        label="Movie Release Year"
        v-model="release_year"
        required
        :rules="releaseRules"
        :items="years"
        >
        </v-select>
        <v-text-field
        label="Movie Genre"
        v-model="genre"
        required
        :rules="genreRules"
        >
        </v-text-field>
        <v-btn
        @click="submit"
        :disabled="!valid">
            Submit
        </v-btn>
        <v-btn
        @click="clear"
        >
            Clear
        </v-btn>
    </v-form>
</template>
<script>
import axios from 'axios';

export default {
    data: () => ({
        valid: true,
        name: '',
        description: '',
        genre: '',
        release_year: '',
        nameRules: [
            v => !!v || 'Name is required.'
        ],
        genreRules: [
            v => !!v || 'Genre is required.',
            v => (v && v.length <= 80) || 'Genre must be no more than 80 characters.'
        ],
        releaseRules: [
            v => !!v || 'Release Year is required.'
        ],
        select: null,
        years: [
            '2018',
            '2017',
            '2016',
            '2015'
        ]
    }),
    methods: {
        submit () {
            if (this.$refs.form.validate()) {
                return axios({
                    method: 'post',
                    data: {
                        name: this.name,
                        description: this.description,
                        release_year: this.release_year,
                        genre: this.genre
                    },
                    url: 'http://localhost:8081/movies',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(() => {
                    this.$swal('Movie added successfully!');
                    this.$router.push({ name: 'Home' });
                    this.$refs.form.reset();
                })
                .catch(() => {
                    this.$swal('Unable to add movie. :(');
                });
            }

            return true;
        },
        clear () {
            console.log('clear called');
            this.$refs.form.reset();
        }
    }
}
</script>