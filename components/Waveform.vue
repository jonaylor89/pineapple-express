<template>
    <div id="container" 
    class=
    "grid grid-cols-4 
    border-2 border-purple-700 
    mt-6 mx-5 
    space-x-1 
    rounded-xl
    md:mx-96">

        <div v-on:click="toggle" 
        class=
        "flex justify-center items-center 
        rounded-full
        bg-indigo-600
        text-white
        hover:bg-grey-300
        my-8
        ml-12
        md:w-20 md:justify-center
       ">
        {{ playing ? "Pause" : "Play "}}
        </div>
    
        <div class="col-span-3 flex-col">
            <h1 class="md:ml-6">1017 Pooh Shiesty Cove</h1>
            <h2 class="md:ml-6 text-gray-400">Playboy Carti</h2>
            <!-- Waveform -->
            <div :id='idPath'
                class=
                "col-span-3
                relative
                sm:mx-12
                ">
            </div>
        </div> 

    </div>
</template>

<script>
import WaveSurfer from "wavesurfer.js";
import CursorPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.cursor.min.js';

export default {
    name: "waveform",
    props: ['id'],
    data() {
        return {
            waveform: null,
            playing: false,
        };
    },
    computed: {
        idPath() {
            console.log(`ID: ${this.id}`)
            return "wave" + this.id;
        }
    },
    mounted() {
        this.waveform = WaveSurfer.create({
            container: document.querySelector(`#wave${this.id}`),
            waveColor: "#D9DCFF",
            progressColor: "#6200EE",
            cursorColor: "#D9DCFF",
            barWidth: 3,
            barRadius: 3,
            cursorWidth: 1,
            height: 80,
            barGap: 3,
            plugins: [
                CursorPlugin.create({
                    showTime: true,
                    opacity: 1,
                    zIndex: 4,
                    "height": "10px",
                    customShowTimeStyle: {
                        'background-color': '#000',
                        color: "#fff",
                        padding: "2px",
                        'font-size': "10px",
                    },
                }),
            ],
        })
        this.waveform.load("assets/example_media_demo.wav");
    },
    methods: {
        play() {
            this.waveform.play();
        },
        pause() {
            this.waveform.pause();
        },
        load(sourceUrl) {
            this.waveform.load(sourceUrl);
        },
        toggle() {
            if (!this.playing) {
                this.playing = true;
                this.play();
            } else {
                this.playing = false;
                this.pause();
            }
        }
    }
}
</script>
