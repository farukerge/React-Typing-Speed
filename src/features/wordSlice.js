import { createSlice } from "@reduxjs/toolkit";
import data from '../data/words.json'

const wordSlice = createSlice({
    name: "words",
    initialState: {
        items: [],
        timer: 60,
        time: "01:00",
        isFinish: false,
        lang: "turkish",
        correct: 0,
        inCorrect: 0,
        wordindexnumber: 0,
        typed: 0,
        corTyped: 0,
        inCorTyped: 0,
    },
    reducers: {
        decreaseTimer: (state) => {
            state.timer -= 1;
            state.timer < 60 && state.timer > 9 ? state.time = `00:${state.timer}` : state.time = `00:0${state.timer}`
            if (state.timer < 1) {
                state.isFinish = true;
                state.correct = state.items.slice(0, state.wordindexnumber).filter(w => w.status === "correct").length
                state.inCorrect = state.items.slice(0, state.wordindexnumber).filter(w => w.status === "incorrect").length
                state.corTyped = state.items.slice(0, state.wordindexnumber).filter(w => w.status === "correct").reduce((a, b) => a + b.word.length, 0);
                state.inCorTyped = state.typed - state.corTyped
            } else {
                state.isFinish = false
            }
        },
        getWords: (state, action) => {
            data.words.sort(() => Math.random() - 0.5);
            state.items = action.payload === "english" ? data.words.map(w => ({ "word": w.turkish, "status": "", "nowWords": false, })) : data.words.map(w => ({ "word": w.english, "status": "", "nowWords": false, }))
            state.items[0].nowWords = true;

        },
        increWordIndex: (state) => {
            state.wordindexnumber += 1;
            state.items.forEach(w => w.nowWords = false);
            state.items[state.wordindexnumber].nowWords = true
            state.typed -= 1
        },
        checkWords: (state, action) => {
            state.typed += 1
            if (state.items[state.wordindexnumber].word[0].toLowerCase() === action.payload[0].toLowerCase()) {
                if (state.items[state.wordindexnumber].word.toLowerCase() === action.payload.trim().toLowerCase()) {
                    state.items[state.wordindexnumber].status = "correct"
                } else {
                    state.items[state.wordindexnumber].status = "incorrect"

                }
            } else {
                state.items[state.wordindexnumber].status = "incorrect"
            }

        }

    }
})

export default wordSlice.reducer;
export const { decreaseTimer, changeLang, getWords, increWordIndex, checkWords } = wordSlice.actions