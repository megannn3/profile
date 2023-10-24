// PROBLEM ONE
// Given an object of the stolen items for a household, return the total amount of items stolen (number). If nothing was robbed, return the string "Lucky you!”.
import { stolenItems } from "./data.js";
function houseTotal(obj) {
  let a = obj.socks+ obj.spoons + obj.nutella_jar + obj.keys + obj.shoelaces + obj.rotisserie_chicken

    if(a>0){
      return a
    
    }else {
      a ="Lucky you!"
      return a
    }}
   // uncomment these out to test it out
    console.log(houseTotal(stolenItems[0])); 
    console.log(houseTotal(stolenItems[1]));
    console.log(houseTotal(stolenItems[2])); 
     
    // PROBLEM TWO
    // Given an object of the stolen items for a household and a string in lowercase representing a specific item, return true if that item was stolen and false if it was not. 
    
    function isStolen(obj, item) {
        var stolen
      if(obj[item] == 0){
          stolen = false
        }else{
            stolen = true
        }
      
        return stolen
        }
        // uncomment these out to test it out
        console.log(isStolen(stolenItems[0], "keys")); 
        console.log(isStolen(stolenItems[1], "socks"));
        console.log(isStolen(stolenItems[2], "spoons")); 
    
    //PROBLEM THREE
    // Given an array of objects representing an entire neighborhood, return the most frequently stolen item. This is NOT the item that has been stolen from the most households, this is the item that has been stolen the most times TOTAL. 
    
    function neighborhoodTotal(arr) {
     let totals = [0,0,0,0,0,0]
     let things
     for(let i=0; i< arr.length; i++){
      for(let j=0;j<totals.length;j++){
        things = Object.keys(arr[i])
        totals[j]+= arr[i][things[j]]
      }
     }
     let max= totals.indexOf(Math.max.apply(null, totals))

      return things[max]; 
      
    }
    
    // uncomment these out to test it out
   console.log(neighborhoodTotal(stolenItems)); 
    
    
    
    // PROBLEM FOUR
    // Based on the item that has been stolen the most, who do you think the burglar is? (you won’t get marked down for getting the “wrong” answer - just give me a fun explanation for why you think it is who it is! 
    //The burglars must be the foxes, because they are the only animals strange enough to wear clothes. None of the other animals have been seen with any human clothing but the foxes.
    
    