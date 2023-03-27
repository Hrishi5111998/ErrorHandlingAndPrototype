function getPerson(obj){
  try{
   if(typeof obj !== 'object' || !obj.name || !obj.age){
      throw new Error("Invalid parameter");
   }
   return `Name: ${obj.name}, age: ${obj.age}`
  }catch(err){
   console.log(err.message);
  }
}

console.log(getPerson({name: "joe", age: 25}))