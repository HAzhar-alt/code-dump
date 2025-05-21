// ~~         BASICS OF FOR LOOPS          ~~ //

// set up loop starting i at 0, then set up the condition (here, we check if i is smaller than 5). If the condition is true, the code loop happens. i++ happens after each loop happens and normally increases or decreases the i value
for (let i = 0; i < 5; i++) {
    console.log(i); //
  }
  
  for (let i = 2; i <= 6; i += 2) {
    console.log(i); //
  }
  //-------------------------------------------------//
  
  // ~~             FOR...OF LOOPS            ~~ //
  
  const str = "an apple please";
  
  for (let char of str) {
    console.log(char);
  }
  
  //-------------------------------------------------//
  
  // ~~            USING BREAK AND CONTINUE IN FOR LOOPS                ~~ //
  
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
      // 
    }
    console.log(i); //
  }
  
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
      // 
    }
    console.log(i); //
  }
  //-------------------------------------------------//
  
   