function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  const myName = "Aki";
  console.log(introduction(myName));

 function introductionWithLanguage( name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
 }
    const myName1 = "Aki";
    const myLanguage1 = "Ember.js"
    console.log(introductionWithLanguage(myName1, myLanguage1));

    function introductionWithLanguageOptional( name, language ='JavaScript'){
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
     }
        const myName2 = "Aki";
        const myLanguage2 = "Ember.js"
        console.log(introductionWithLanguageOptional(myName2, myLanguage2));