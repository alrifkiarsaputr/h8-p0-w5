function highestScore(students) {
    // Code disini
    if (students.length < 1) {
        return {}
    }
    else {

        var obj = {}
        for (var i = 0; i < students.length; i++) {
            obj[students[i].class] = {
                name: '',
                score: 0
            }
        }
        // return obj

        for (var i = 0; i < students.length; i++) {
            // 90 > obj[foxes].score
            if (students[i].score > obj[students[i].class].score) {
                obj[students[i].class].name = students[i].name
                obj[students[i].class].score = students[i].score
            }
        }
    }
    // console.log(obj)
    return obj
}

// TEST CASE
console.log(highestScore([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]))

console.log(highestScore([
    {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]))

console.log(highestScore([]))