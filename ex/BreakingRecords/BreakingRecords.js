function breakingRecords(scores) {

    let minimumScores = scores[0];
    let maximumScores = scores[0];
   
    let countMin = 0;
    let countMax = 0;
    
   
   for (let i = 1; i < scores.length; i++ ) {
       if (maximumScores < scores[i]) {
            maximumScores = scores[i];
            countMax++; 
       } else if (minimumScores > scores[i]) {
            minimumScores = scores[i];
            countMin++;
       }
   }

   let record = [countMax, countMin]; 
   
   return console.log(record);

}

let scores = [9, 10, 5, 20, 20, 4, 5, 2, 25, 1];

breakingRecords(scores);