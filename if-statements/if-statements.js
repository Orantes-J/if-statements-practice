const dolphinsAve = Math.round((108 + 108 + 88) / 3);
const koalasAve = Math.round((110 + 108 + 88) / 3);
const minScore = 100;

if (dolphinsAve > koalasAve && dolphinsAve >= minScore) {
    console.log(`We have a winner and it is the Dolphins!! Woo hoo`);
} else if(dolphinsAve === koalasAve && koalasAve > minScore && dolphinsAve > minScore) {
    console.log(`Minimum score of ${minScore} has been met and end game score has been delt a Tie!`);
} else if (koalasAve > dolphinsAve && koalasAve >= minScore){
    console.log(`We have a winner and it is the Koalas!! Woo Hoo`);
} else{
    console.log(`No one made the minimum requirement of ${minScore} points`)
};
