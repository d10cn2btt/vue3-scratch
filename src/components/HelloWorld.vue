<template>
    <div class="w-full flex justify-center">
        <input type="text" placeholder="Enter pokemon here" class="mt-10 p2 border-blue-500 border-2" v-model="searchPokemon" />
    </div>
    <div class="mt-10 p-4 flex flex-wrap justify-center">
        <div class="ml-4 text-2x text-blue-200"
             v-for="(pokemon, idx) in filteredPokemon"
             :key="idx"
        >
            <router-link :to="`/about/${urlIdLookup[pokemon.name]}`">
                {{ pokemon.name }}
            </router-link>
        </div>
    </div>
</template>

<script>
import {computed, reactive, toRefs} from 'vue';

export default {
    name: 'HelloWorld',
    setup() {
        const state = reactive({
            pokemons: [123],
            urlIdLookup: {},
            searchPokemon: '',
            filteredPokemon:computed(() => updatePokemon()),
        })

        function updatePokemon() {
            if (!state.searchPokemon) {
                return []
            }

            return state.pokemons.filter((pokemon) => {
                return pokemon.name.includes(state.searchPokemon)
            })
        }

        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                state.pokemons = data.results;
                state.urlIdLookup = data.results.reduce((acc, cur, idx) =>
                    acc = {...acc, [cur.name]:idx+1}
                , {})
            })

        // const pokemons = computed(() => state.pokemons);

        return {
            // pokemons
            ... toRefs(state)
        };
    }
}
</script>
