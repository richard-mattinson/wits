const minusButtons = document.querySelectorAll(".minus_button");
const plusButtons = document.querySelectorAll(".plus_button") 

const state = {
    film1GradeA: 0,
    film1GradeB: 0,
    film1GradeC: 0,
    film2GradeA: 0,
    film2GradeB: 0,
    film2GradeC: 0
};

minusButtons.forEach(button => {
    button.addEventListener("click", event => {
        const filmNo = event.currentTarget.id
        const splitId = filmNo.split("_")
        const gradeFilm = splitId[2]
        const gradeGrade = splitId[3]
        console.log("film: ", gradeFilm, "grade: ", gradeGrade);
        const concatFilmAndGrade = `film${gradeFilm}Grade${gradeGrade.toUpperCase()}`
        if (state[concatFilmAndGrade] > 0) {
            state[concatFilmAndGrade]--
        }
        const film1Counter = document.querySelector(`#counter_film_${gradeFilm}_${gradeGrade}`);
        film1Counter.textContent = String(state[concatFilmAndGrade]).padStart(2, 0);
        checkGrade(gradeFilm);
    })
});

plusButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const filmNo = event.currentTarget.id;
        const splitId = filmNo.split("_");
        const gradeFilm = splitId[2];
        const gradeGrade = splitId[3]
        console.log("film: ", gradeFilm, "grade: ", gradeGrade);
        const concatFilmAndGrade = `film${gradeFilm}Grade${gradeGrade.toUpperCase()}`;
        state[concatFilmAndGrade]++;
        console.log("grade now?", state[concatFilmAndGrade]);
        const film1Counter = document.querySelector(`#counter_film_${gradeFilm}_${gradeGrade}`);
        film1Counter.textContent = String(state[concatFilmAndGrade]).padStart(2, 0)
        checkGrade(gradeFilm)
    });
});

function checkGrade() {
    
}

