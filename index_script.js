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

function checkGrade(filmNo) {
    const gradeA = state[`film${filmNo}GradeA`];
    const gradeB = state[`film${filmNo}GradeB`];
    const gradeC = state[`film${filmNo}GradeC`];

    console.log("grade: ", gradeA, gradeB, gradeC);

    // calculate the total sum of all grades
    const total = gradeA + gradeB + gradeC;

    // calculate percentages (using a fallback to avoid division by zero)
    const percentageA = total > 0 ? (gradeA / total) * 100 : 0;
    const percentageB = total > 0 ? (gradeB / total) * 100 : 0;
    const percentageC = total > 0 ? (gradeC / total) * 100 : 0;

    // format to 2 decimal places
    console.log(`Grade A: ${percentageA.toFixed(1)}%`); // e.g., "50.0%"
    console.log(`Grade B: ${percentageB.toFixed(1)}%`); // e.g., "33.3%"
    console.log(`Grade C: ${percentageC.toFixed(1)}%`); // e.g., "16.7%"

    let highestGradeName = "";
    let highestGradePercentage = 0

    if (gradeA >= gradeB && gradeA >= gradeC) {
        highestGradeName = "Grade: A";
        highestGradePercentage = percentageA
        if (percentageA > 50) {
            highestGradeName = "Grade A+"; 
        }
    } else if (gradeB >= gradeA && gradeB >= gradeC) {
        highestGradeName = "Grade: B";
        highestGradePercentage = percentageB;
        if (percentageB > 50) {
            highestGradeName = "Grade B+";
        }
    } else {
        highestGradeName = "Grade: C";
        highestGradePercentage = percentageC;
        if (percentageC > 50) {
            highestGradeName = "Grade C-";
        }
    }

    console.log(`${highestGradeName} is the greatest with ${highestGradePercentage.toFixed(0)}% of the vote!`);

    const filmGradeTitle = document.querySelector(`#film_${filmNo}_grade`)
    filmGradeTitle.textContent = highestGradeName

}

