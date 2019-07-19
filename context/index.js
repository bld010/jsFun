/* eslint-disable */

const context = {
  exerciseA() {
    const fly = () => {
      console.log(this);
    };

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification;
        this.fly = fly;
      } 
    }

    const ship = new SpaceProbe('voyager', 'classy');


    // What is the value of `this` when we call ship.fly()?
    const result = 'global window object';
    return result;

    // Annotation:
    // fly was already defined in the global scope, so it will refer to
    // the global window object
  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }
    
    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation:
    // fn() is defined in the global window context and fn() is invoked
    // within the global context, so 'this' refers to the global window object
  },

  exerciseC() {
    const car = {
      make: 'Tesla',
      getInfo: function(){
        console.log(this);
      }
    };

    const el = document.getElementById('btn');
    el.addEventListener('click', car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // within an event listener, the element on which the listener is attached is the 
    // element that actually invokes the function car.getInfo. therefore, when the el
    // is clicked, 'this' will refer to that element
  },

  exerciseD() {
    const dog = {
      breed: 'Chihuahua',
      getBreed: function(){

        const innerFunction = function() {
          console.log(this.breed);
        };
    
        return innerFunction;
      }
    };

    var breed = dog.getBreed();

    // What is the value of `this` when we call breed()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // breed belongs to the global window object
  },

  exerciseE() {

    const fn = () => {
      value = 21;
      return this.value;
    };


    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // the anonymous function is declared within a variable 
    // that is scoped to the global window object
  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero('Ororo', 'weather control', true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = 'instance of Hero';
    return result;

    // Annotation: 
    // storm is an instance of Hero, and the method is being called on it.
    // therefore, 'this' refers to the Hero instance. 
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
      }

      resetGame() {
        console.log('Clearing the board and starting over');
      }

      restart() {
        setTimeout(function() {
          console.log(`Restarting ${this.title}...`);
        }, 1000);
      }
    }

    const monopoly = new Game('Monopoly');


    // What is the value of `this` when we call monopoly.restart()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // setTimeout is a method on the gobal window object
  },

  exerciseH() {
    const obj = {
      arrowFunction: null,
      method: function() {
        this.arrowFunction = () => { 
          return this;
        };
      }
    };

    obj.method();

    // What is the value of `this` when we call obj.arrowFunction()?
    const result = 'obj';
    return result;

    // Annotation: 
    // the arrow function will bind this upon being defined
    // so it this belongs to the obj
  },

  exerciseI() {  
    const poets = [{
      name: 'Sappho'
    }, {
      name: 'Maya'
    }, {
      name: 'Emily'
    }, {
      name: 'Audre'
    }];

    poets.map(function(poet) {
      return this;
    }, poets);

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = 'poets';
    return result;

    // Annotation: 
    // the second 'poets' argument is what binds 'this' to the map method
  },

  exerciseJ() {
    const el = $('#btn');
    el.on('click', function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // the event listener is fired when the el is clicked on, so this refers to the el.
  },

  exerciseK() {
    var store = {
      fruit: "grapes",
      sellMe: function() {
        return this.fruit;
      }
    }

    // What is the value of `this` when we call store.sellMe()?
    const result = 'store';
    return result;

    // Annotation: 
    // sellMe is a method on store and sellMe() is invoked on store with dot notation
    // this refers to the store object on which the sellMe() method was called. 
  },

  exerciseL() {
    const dog = {
      breed: 'Chihuahua',
      getBreed: function(){
        var _this = this;

        setTimeout(function() {
          console.log('Your dog is a ' + _this.breed);
        }) 
      }
    };

    // What is the value of `this` when we call dog.getBreed()?
    const result = 'dog';
    return result;

    // Annotation: 
    // getBreed is a method within dog, and getBreed() is invoked using dot notation
    // on dog, so this will refer to the dog object
  },

  exerciseM() {
    const robert = {
      name: 'Bobo',
      occupation: 'instructor'
    }

    const william = {
      name: 'will',
      occupation: 'instructor'
    }

    function makeBirdNoise() {
      console.log('My name is ' + this.name + ' ... caw! caw!');
    }

    // What is the value of `this` when we call makeBirdNoise.call(robert);
    const result = 'robert';
    return result;

    // Annotation: 
    // the call() method sets the value of `this` to robert
  },

  exerciseN() {
    class Bird {
      constructor(name, species) {
        this.name = name;
        this.species = species;
      }

      delayNoise() {
        setTimeout(this.makeNoise.bind(this), 1000)
      }

      makeNoise() {
        console.log('caw, caw');
      }
    }
    
    var firstBird = new Bird('Calvin', 'budgie');

    // What is the value of `this` when we call firstBird.delayNoise();
    const result = 'instance of Bird';
    return result;

    // Annotation: 
    // delayNoise() is invoked with dot notation on the firstBird instance of Bird,
    // so `this` refers to the bird instance
  },

  exerciseO() {
    const button = document.querySelector('#submit');

    button.addEventListener('click', () => {
      console.log(this);
      this.classList.toggle('on');
    });

    // What is the value of `this` when a user clicks on our button element and the callback is triggered?
    const result = 'global window object';
    return result;

    // Annotation: 
    // the function triggered by the event listener is an es6 function, so it binds this when it's defined,
    // not when it's invoked. since it's an anonymous function, it's within the global scope
  },

  exerciseP() {
    const child = {
      totalScreams : 4,
      scream: () => {
        this.totalScreams++;
      }
    }

    const result = 'global window object';
    return result;

    // What is the value of `this` when we call child.scream();
    // Annotation: 
    // since the function for scream() is an es6 function, it takes the global window object context
    // upon being defined (not when it's invoked)
  }
};

module.exports = context;