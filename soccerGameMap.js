const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//1
const events = [...new Set(gameEvents.keys())];
console.log(events);

//2
console.log(gameEvents.delete(64));

//3
const average = [gameEvents.keys()];
aveEvent = 90 / average.length;
console.log(`An event happened, on average, every ${aveEvent} minutes`);

//4
const beforeHalfTime = [...new Set(gameEvents.values())];
// console.log(beforeHalfTime);
const times = [...new Set(gameEvents.entries())];
for (const [time, event] of times) {
  const pace =
    time < 45
      ? `[FIRST HALF] ${time}:${event}`
      : `[SECOND HALF]${time}:${event}`;
  console.log(pace);
}
const events1 = [...gameEvents.keys()];
events2 = events1.push(10);
console.log(events2);



//Actual answers from Jonas (lecturer)

//1)

// const map = new Set(gameEvents[value]);
// console.log(value);
// const [...c] = [...gameEvents];
// const x = new Set(c);
// console.log(c);
// for (const [nr, noDups] of gameEvents) console.log(noDups);

// let arr = [gameEvents];
// console.log(arr);
// for (const [setDups, val] of newNoDups)

// console.log(arr);
// const newEvents = new Set(val);
// newEvents.set(val);
// console.log(newEvents.get(val));

// console.log(gameEvents.get(17));

/*
  // 1.
  const events = [...new Set(gameEvents.values())];
  console.log(events);
  
  // 2.
  gameEvents.delete(64);
  
  // 3.
  console.log(
    `An event happened, on average, every ${90 / gameEvents.size} minutes`
  );
  const time = [...gameEvents.keys()].pop();
  console.log(time);
  console.log(
    `An event happened, on average, every ${time / gameEvents.size} minutes`
  );
  
  // 4.
  for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
  }
  */

/*
  ///////////////////////////////////////
  // Maps: Iteration
  const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
  ]);
  console.log(question);
  
  // Convert object to map
  console.log(Object.entries(openingHours));
  const hoursMap = new Map(Object.entries(openingHours));
  console.log(hoursMap);
  
  // Quiz app
  console.log(question.get('question'));
  for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
  }
  // const answer = Number(prompt('Your answer'));
  const answer = 3;
  console.log(answer);
  
  console.log(question.get(question.get('correct') === answer));
  
  // Convert map to array
  console.log([...question]);
  // console.log(question.entries());
  console.log([...question.keys()]);
  console.log([...question.values()]);
  */
