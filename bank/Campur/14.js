function sortStudents(students){
  // Gryffindor Slytherin Ravenclaw Hufflepuff
  let result = {};

  for (let i = 0; i < students.length; i++) {
    if (students[i][1] == 'H') {
      if (!result.Hufflepuff) {
        result.Hufflepuff = [students[i][0]];
        continue;
      }
      result.Hufflepuff.push(students[i][0]);
    }

    if (students[i][1] == 'G') {
      if (!result.Gryffindor) {
        result.Gryffindor = [students[i][0]];
        continue;
      }
      result.Gryffindor.push(students[i][0]);
    }

    if (students[i][1] == 'S') {
      if (!result.Slytherin) {
        result.Slytherin = [students[i][0]];
        continue;
      }
      result.Slytherin.push(students[i][0]);
    }

    if (students[i][1] == 'R') {
      if (!result.Ravenclaw) {
        result.Ravenclaw = [students[i][0]];
        continue;
      }
      result.Ravenclaw.push(students[i][0]);
    }
  }

  return result;
}

var students = [
  ["Harry Potter", "G"],
  ["Draco Malfoy", "S"],
  ["Terry Boot", "R"],
  ["Vincent Crabbe", "S"],
  ["Gregory Goyle", "S"],
  ["Blaise Zabini", "S"],
  ["Zacharias Smith", "H"],
  ["Ronald Weasley", "G"],
  ["Ernest Macmillan", "H"],
  ["Michael Corner", "R"],
  ["Hannah Abbott", "H"],
  ["Susan Bones", "H"],
  ["Padma Patil", "R"]
]

var students2 = [
  ["Harry Potter", "G"],
  ["Draco Malfoy", "S"],
  ["Terry Boot", "R"],
  ["Vincent Crabbe", "S"],
  ["Gregory Goyle", "S"],
  ["Blaise Zabini", "S"],
]

var students3 = [
  ["Vincent Crabbe", "S"],
  ["Gregory Goyle", "S"],
  ["Blaise Zabini", "S"],
  ["Zacharias Smith", "H"],
]

console.log(sortStudents(students))
// { Gryffindor: [ 'Harry Potter', 'Ronald Weasley' ],
//   Slytherin:
//    [ 'Draco Malfoy',
//      'Vincent Crabbe',
//      'Gregory Goyle',
//      'Blaise Zabini' ],
//   Ravenclaw: [ 'Terry Boot', 'Michael Corner', 'Padma Patil' ],
//   Hufflepuff:
//    [ 'Zacharias Smith',
//      'Ernest Macmillan',
//      'Hannah Abbott',
//      'Susan Bones' ] }

console.log(sortStudents(students2))
// { Gryffindor: [ 'Harry Potter' ],
//   Slytherin:
//    [ 'Draco Malfoy',
//      'Vincent Crabbe',
//      'Gregory Goyle',
//      'Blaise Zabini' ],
//   Ravenclaw: [ 'Terry Boot' ] }

console.log(sortStudents(students3))
// { Slytherin: [ 'Vincent Crabbe', 'Gregory Goyle', 'Blaise Zabini' ],
//   Hufflepuff: [ 'Zacharias Smith' ] }