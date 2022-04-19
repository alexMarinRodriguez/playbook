const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }





   ]
  explorers.forEach(explorers => console.log(explorers.name));
  explorers.forEach(explorers => console.log(explorers.stack));
  explorers.map(explorers => console.log(explorers.stack));
  const explorer_with_js = explorers.filter(my_explorer_in_list => my_explorer_in_list.stack.includes("js"))
console.log(explorer_with_js);

const explorer_with_CDMX = explorers.find(my_explorer_in_list => my_explorer_in_list.city === "CDMX")
console.log(explorer_with_CDMX);
const all_exercises = explorers.reduce((acc, my_explorer_in_list) => acc + my_explorer_in_list.exercises_completed,0 )
console.log( all_exercises );
const issome = explorers.some(explorer => explorer["missions"]["frontend"].exercisesFinished === true)

console.log(issome);
const exploreris = explorers.every(explorer => explorer["missions"]["onboarding"].exercisesFinished === true)
 console.log(exploreris)