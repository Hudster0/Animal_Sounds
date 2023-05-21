//Step One: Create a loop so we can querySelect (All) and write less lines of code.

for (var i = 0; i < document.querySelectorAll(".animal").length; i++) {

   document.querySelectorAll(".animal")[i].addEventListener("click", function () {


      var buttonInnerHTML = this.innerHTML;

      // for every key we have, we create a switch statement.  This is easier than an if/conditional statement

      switch (buttonInnerHTML) {

         case "Bee":
            var bee = new Audio("sounds/bee.wav")
            bee.play();
            break;

         case "Goat":
            var kid = new Audio("sounds/kid.wav")
            kid.play();
            break;

         case "Monkey":
            var monkey = new Audio("sounds/monkey.wav")
            monkey.play();
            break;

         case "Horse":
            var horse = new Audio("sounds/horse.wav")
            horse.play();
            break;

         case "Hyena":
            var hyena = new Audio("sounds/hyena.wav")
            hyena.play();
            break;

         case "Lion":
            var lion = new Audio("sounds/lion.wav")
            lion.play();
            break;

         case "Pig":
            var pig = new Audio("sounds/pig.wav")
            pig.play();
            break;

         case "Cow":
            var cow = new Audio("sounds/cow.wav")
            cow.play();
            break;

         case "Kitten":
            var cat = new Audio("sounds/cat.wav")
            cat.play();
            break;

         case "Elephant":
            var elephant = new Audio("sounds/elephant.mp3")
            elephant.play();
            break;

         case "Dog":
            var dog = new Audio("sounds/dog.wav")
            dog.play();
            break;

         case "Rooster":
            var rooster = new Audio("sounds/rooster.wav")
            rooster.play();
            break;

         default:
            break;
      }


   })
};




