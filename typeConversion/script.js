function convertToNumber(str){
    try{
      const num = Number(str)
      if(isNaN(num)){
        throw new Error("Invalid number");
      }
      return num
    }catch(error){
      console.log(error.message)
    //   return error.message
    }
}

convertToNumber('abd')