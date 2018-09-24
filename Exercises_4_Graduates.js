function graduates (students) {
  // Code disini
  var objClass = {}
  for (var i=0; i < students.length; i++) {
    if (objClass[students[i].class] === undefined) {
      objClass[students[i].class] = []
    }
    if (students[i].score > 75) {
      for (var key in objClass) {
        if (students[i].class === key) {
          var objNameDanClass = {
            name: students[i].name,
            score: students[i].score
          }
          objClass[students[i].class].push(objNameDanClass)
        }
      }
    }
  }
  return objClass
}
/*
1. Masuk ke students[i]. Jika students[i].score > 75, maka cek classnya.
  Jika class nya sama dengan objClass yg ke-[i], maka push obj nama dan score ke array objClass[students[i].class].

*/
console.log(graduates([
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
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }