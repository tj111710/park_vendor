var user = prompt("You are strolling through a park on a sunny day. You pass by a street vendor asks if you would like anything","Gooses type here").toLowerCase();

    switch(user){
        case 'food':
            var pretzel = prompt("Would you like a pretzel?").toLowerCase();
            var hotdog = prompt("Would you like a hotdog?"                 ).toLowerCase();
                if (pretzel === "yes" && hotdog === "yes")                     {
                    console.log ("That'll be $2");
                    }
                else if (pretzel === "yes" || hotdog ===                      "yes") {
                console.log("That'll be $1");
                }
                else {
                    prompt("Then what would you like?");
                    }
            break;
        case 'drink':
             var cola = prompt("Would you like a cola?").toLowerCase();
            var lemonade = prompt("Would you like a lemonade?"                 ).toLowerCase();
                if (cola === "yes" && lemonade === "yes")                     {
                    console.log ("That'll be $2");
                    }
                else if (cola === "yes" || lemonade ===                      "yes") {
                console.log("That'll be $1");
                }
                else {
                    prompt("Then what would you like?");
                    }
            break;
        case 'nothing':
            prompt("AHHHHHH");
            break;
        default: prompt("The vendor looked at you in confusion. Run again and choose food/drink/nothing");
            break;
    }

