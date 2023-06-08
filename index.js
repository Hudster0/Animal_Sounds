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
            var lion = new Audio("sounds/lion.mp3")
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

         case "Buffalo":
            var buffalo = new Audio("sounds/buffalo.mp3")
            buffalo.play();
            break;

         case "Cricket":
            var cricket = new Audio("sounds/cricket.wav")
            cricket.play();
            break;

         case "Crow":
            var crow = new Audio("sounds/crow.mp3")
            crow.play();
            break;

         case "Duck":
            var duck = new Audio("sounds/duck.mp3")
            duck.play();
            break;

         case "Bird":
            var bird = new Audio("sounds/littleBird.wav")
            bird.play();
            break;

         case "Frog":
            var frog = new Audio("sounds/frog.mp3")
            frog.play();
            break;

         case "Hippo":
            var hippo = new Audio("sounds/hippo.mp3")
            hippo.play();
            break;

         case "Raccoon":
            var raccoon = new Audio("sounds/raccoon.mp3")
            raccoon.play();
            break;

         case "Tiger":
            var tiger = new Audio("sounds/tiger.mp3")
            tiger.play();
            break;

         case "Turkey":
            var turkey = new Audio("sounds/turkey.mp3")
            turkey.play();
            break;

         case "Wolf":
            var wolf = new Audio("sounds/wolf.mp3")
            wolf.play();
            break;

         case "Parrot":
            var parrot = new Audio("sounds/african-grey-parrot.mp3")
            parrot.play();
            break;

         default:
            break;
      }


   })
};




