// IMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

(function sortingHat(){
    console.log('GRIFINDOR');
})();

// to prevent pollution from glope scope we use iife, so that the function iis not affected by global values
//we basically use  () in the begininng and end of the function for iife

( () => { // without using argument
    console.log('QUIDITCHH');
}) ();
// to end the iife - ; is imp

( (name1) => { // with using argument
    console.log(`QUIDITCHH , team ${name1}`);
}) ('ravenclaw')