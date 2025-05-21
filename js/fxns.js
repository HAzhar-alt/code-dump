// long version of fxn...

function greetings(name) {
    console.log("Hello, " + name + "!");
  }
  greetings("Bill");
  
  // can also be written as...
  greetings = (name) => {
    console.log("Hello, " + name + "!");
  };
  greetings("Ben");
  // can get rid of {} and return as well like this...
  greetings = (name) => console.log("Hello, " + name + "!");
  greetings("Bob");
  
  // FXN EXAMPLE 2
  function calcVolume(width, length, height) {
    return width * length * height;
  }
  console.log(calcVolume(4, 2, 2));
  // is shortened to...
  calcVolume = (width, length, height) => width * length * height;
  console.log(calcVolume(3, 2, 2));
