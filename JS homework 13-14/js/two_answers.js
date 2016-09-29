    var firstQuestion = [fQfInp, fQsInp, fQtInp];


    var firstRule = setInterval(function() {

        if (firstQuestion[0].checked & firstQuestion[1].checked) {

            firstQuestion[2].setAttribute('disabled','disabled');

        } else {

            firstQuestion[2].removeAttribute('disabled');
        };

        if (firstQuestion[1].checked & firstQuestion[2].checked) {

            firstQuestion[0].setAttribute('disabled','disabled');

        } else {

            firstQuestion[0].removeAttribute('disabled');
        };

        if (firstQuestion[2].checked & firstQuestion[0].checked) {

            firstQuestion[1].setAttribute('disabled','disabled');

        } else {

            firstQuestion[1].removeAttribute('disabled');
        };

    }, 1);



    var secondQuestion = [sQfInp, sQsInp, sQtInp];


    var secondRule = setInterval(function() {

        if (secondQuestion[0].checked & secondQuestion[1].checked) {

            secondQuestion[2].setAttribute('disabled','disabled');

        } else {

            secondQuestion[2].removeAttribute('disabled');
        };

        if (secondQuestion[1].checked & secondQuestion[2].checked) {

            secondQuestion[0].setAttribute('disabled','disabled');

        } else {

            secondQuestion[0].removeAttribute('disabled');
        };

        if (secondQuestion[2].checked & secondQuestion[0].checked) {

            secondQuestion[1].setAttribute('disabled','disabled');

        } else {

            secondQuestion[1].removeAttribute('disabled');
        };

    }, 1);



    var thirdQuestion = [tQfInp, tQsInp, tQtInp];


    var thirdRule = setInterval(function() {

        if (thirdQuestion[0].checked) {

            thirdQuestion[1].setAttribute('disabled','disabled');

            thirdQuestion[2].setAttribute('disabled','disabled');

        } else if (thirdQuestion[1].checked) {

            thirdQuestion[2].setAttribute('disabled','disabled');

            thirdQuestion[0].setAttribute('disabled','disabled');

        } else if (thirdQuestion[2].checked) {

            thirdQuestion[0].setAttribute('disabled','disabled');

            thirdQuestion[1].setAttribute('disabled','disabled');

        } else {
            thirdQuestion[0].removeAttribute('disabled');

            thirdQuestion[1].removeAttribute('disabled');

            thirdQuestion[2].removeAttribute('disabled');
        };

    }, 1);