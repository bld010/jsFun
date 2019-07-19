/* eslint-disable */

const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');





// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties.filter(kitty => kitty.color === 'orange').map(kitty => kitty.name);

    return result;

    // Annotation:
    // We want to return an array of names of kitties that have a value
    // of orange in the color properties. We could use an if statement to 
    // return kitties with orange values in their color properties, or we
    // can first filter (which will return each orange kitty object), and
    // then run map to return only the names of the orange kitties in the
    // result. I chained these to prototype methods together. 
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b)=> b.age - a.age);
    return result;

    // Annotation:
    // We want to sort the kitties, which requires the sort prototype 
    // method. It takes a callback function as an argument, which will
    // take the arguments a and b. .....................
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]


    const result = kitties.map(function(kitty) {
        kitty.age +=2;
        return kitty
    })
    return result;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }
    let result = {}

    clubs.forEach(function(club, index){
        club.members.forEach(function(member) {
            if (!result[member]) {
                result[member] = [];
            }; 
            result[member].push(club.club);
        });
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = []

    mods.forEach((module, index)=>result.push({mod: parseInt(`${module.mod}`), studentsPerInstructor: parseInt(`${module.students}` / parseInt(`${module.instructors}`))}))
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};







// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
  
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    
    const result = cakes.reduce((acc, cake) => {
      acc.push({'flavor': cake.cakeFlavor, 'inStock': cake.inStock});
      return acc
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter((cake) => {
      if (cake.inStock > 0) {
        return cake;
      }
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  
  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((acc, cake) => {
      acc += cake.inStock;
      return acc;
    }, 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]
    
    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach(topping => {
        if (!acc.includes(topping)) {
        acc.push(topping)
      }})
      return acc
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // { 
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2, 
    //    ...etc
    // }

    const result = cakes.reduce((acc, cake) => {
        cake.toppings.forEach(topping => {
        if (!acc[topping]) {
          acc[topping] = 1;
        } else {
          acc[topping]++;
        }
      })
      return acc;
    }, {})
  
    return result
    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(classroom => classroom.program === 'FE');
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((acc, classroom) => {
      let feCapacity = classrooms.filter(classroom => classroom.program === 'FE').reduce((acc2, classroom) => {
        acc2 += classroom.capacity;
        acc.feCapacity = acc2
        return acc2
      }, 0);
      let beCapacity = classrooms.filter(classroom => classroom.program === 'BE').reduce((acc3, classroom) => {
        acc3 += classroom.capacity;
        acc.beCapacity = acc3;
        return acc3
      }, 0)
      return acc;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => {
      return a.capacity - b.capacity;
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((acc, brewery) => {
      acc += brewery.beers.length;
      return acc
    }, 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.reduce((acc, brewery) => {
      acc.push({'name': brewery.name, 'beerCount': brewery.beers.length});
      return acc
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = breweries.reduce((acc, brewery) => {
      let highestAbv = brewery.beers.forEach((beer) => {
        if (beer.abv > acc.abv) {
          acc = beer;
        }
      })
      return acc;
    }, {abv: 0})
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g. 
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.reduce((acc, instructor) => {
      cohorts.forEach(cohort => {
        if (cohort.module === instructor.module) {
          acc.push({"name": instructor.name, "studentCount": cohort.studentCount})
        }
      })
      return acc;
    },[]);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }



let cohortCounts = cohorts.map(cohort => {
  instructors.map(instructor => {
    if(!cohort.instructorCount && cohort.module === instructor.module) {
      cohort.instructorCount = 1
    } else {
    if (cohort.module === instructor.module) {
      cohort.instructorCount++
    }
  }
  })
  return cohort
})



    const result = cohortCounts.reduce((acc, cohort) => {
      if (!acc[`cohort${cohort.cohort}`]) {
        acc[`cohort${cohort.cohort}`] = cohort.studentCount /cohort.instructorCount;
      } 
        return acc;
    }, {})
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }


    const result = instructors.reduce((acc, instructor) => {
      cohorts.map(cohort => {
        instructor.teaches.map(subject => {
          if (cohort.curriculum.includes(subject)) {
            if (!acc[instructor.name]) {
              acc[instructor.name] = []
            } if (!acc[instructor.name].includes(cohort.module)) {
              acc[instructor.name].push(cohort.module)
            }
          }
          return instructor
        })
      })
      return acc
    }, {})
    return result;

    // Annotation:
    // I needed to return an object, so I started with a reduce
    // I wanted to iterate through the cohorts so I could access 
    // each cohort's information while I iterated through each instructor
    // If the cohort's curriculum included the subject from instructor.teaches
    // then i check to see if the instructor exists in the accumulator array
    // if it didn't, i created the property and assigned the value to an empty
    // array. If it did already exist, then i checked to see if the module 
    // was already pushed into the array (to prevent duplicates). If it didn't
    // already include the module number, then i pushed that into the accumulator
    // object at the instructor's name's property. 
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // { 
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = instructors.reduce((acc, instructor) => {
      instructor.teaches.forEach(topic => {
        if (!acc[topic]) {
          acc[topic] = []
          acc[topic].push(instructor.name)
        }
        if (acc[topic] && !Object.values(acc[topic]).includes(instructor.name)) {
          acc[topic].push(instructor.name)
        
        }
      })
      return acc 
    }, {})
      
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]


    let bossObjects = Object.keys(bosses).map(bossObjKey => {
      return bosses[bossObjKey]
    })
    
    let result = bossObjects.reduce((acc, bossObj) => {
      acc.push(sidekicks.reduce((acc2, sidekick) => {
        if (!acc2.bossName && sidekick.boss === bossObj.name) {
          acc2.bossName = sidekick.boss;
          acc2.sidekickLoyalty = 0;
          console.log(sidekick.loyaltyToBoss)
        }
        if (sidekick.boss === bossObj.name) {
          acc2.sidekickLoyalty += sidekick.loyaltyToBoss
          console.log(sidekick.loyaltyToBoss)
        }
        return acc2
      }, {}))
      return acc
    }, [])
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [ 
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]
    let starNames = Object.keys(constellations).reduce((acc, constellation) => {
      return acc.concat(constellations[constellation].stars)
    }, [])
    
    const result = stars.filter(star => {
      return starNames.includes(star.name)
    });
    return result;

    // Annotation:
    // I accessed all of the properties of the constellations object, and
    // then put all of the constellation.star names into one array with 
    // a reduce method. I then filtered through the stars array and returned 
    // any stars with a name that are found in the starNames array. It returns
    // any star that makes the starNames.includes(star.name) statement true. 
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = stars.reduce((acc, star) => {
      if (!acc[star.color]) {
        acc[star.color] = [star]
      } else {
        acc[star.color].push(star)
      }
      return acc
    }, {})
    return result;

    // Annotation:
    // I reduced the stars array into an object with colors as keys;
    // For each star, I checked if the color exists as a property in the 
    // accumulator object. If it doesn't, I create that property within the 
    // accumulator object and set it equal to an array with that star. 
    // If the color property already exists in the array, I push the star into 
    // the property with it's matching color. 
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra", 
    //    "Canis Minor", 
    //    "The Plow", 
    //    "Orion", 
    //    "The Little Dipper" ]


    const result = stars.sort((starA, starB) => {
      starB.visualMagnitude - starA.visualMagnitude;
    }).map(star => {
      return star.constellation;
    }).filter(star => {
      if (star !== '') {
        return star
      }
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = characters.reduce((acc, character) => {
      acc = acc.concat(character.weapons)
      return acc
    }, []).reduce((acc, weapon) => {
      Object.keys(weapons).forEach(key => {
        if (weapon === key) {
          acc += weapons[key].damage;
        }
      })
      return acc
    }, 0) 

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object. 
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = characters.reduce((acc, character) => {
      let newObj = {}
      newObj[character.name] = {damage: 0, range: 0};
      Object.keys(weapons).forEach(weaponKey => {
        if (character.weapons.includes(weaponKey)) {
          newObj[character.name].damage += weapons[weaponKey].damage;
          newObj[character.name].range += weapons[weaponKey].range;
        }
      })
      acc.push(newObj)
      return acc;
    }, [])

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the 
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      { 
        'Steven Spielberg': 
          { 
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37 
          },
        'Joe Johnston': 
          { 
            'Jurassic Park III': 44 
          },
        'Colin Trevorrow': 
          { 
            'Jurassic World': 56
           },
        'J. A. Bayona': 
          { 
            'Jurassic World: Fallen Kingdom': 59 
          } 
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      }, 
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  dinosaurPrompts
};