/*The purpose of the following code is to check if each radio button has been
    checked for each question before the user can submit the quiz*/
function next(class_name, category_questions, category_name, errors, callback) {
    //first get all the radio buttons
    let allInputs = [...document.getElementsByClassName(class_name)];

    //getting the total number of questions
    let numQuestions = category_questions.length;

    /**errors respresents the number of unchecked questions. 
     So everytime a user clicks the next button, we start we
     zero errors and if all the questions have been answered,
     errors will still remain zero and the user can move on 
     to the next category otherwise errors will be greater 
     than zero and the user won't be able to move to the
     next category.
    */
    errors = 0;

    //looping through each radio button
    for (let i = 0; i < numQuestions; i++) {
        /*getting each group of the radio buttons. Each radio group has a name of 'category_name'_index.
        So for each index, we get a group of radio buttons. If for instance there are 5 questions 
        and the category_name parameter is 'quiz', it means there are going to be 5 groups of 
        radio buttons: quiz_0, quiz_1,...,quiz_4*/

        let groupName = allInputs.filter(val2 => {
            //returning a specific group of radio buttons.
            //remember val2 is one specific radio button.
            return val2.name == `${category_name}_${i}`;
        });

        /*Once we get a radio group. We check to see if one of the radio buttons of the group has been checked */
        let groupStatus = groupName.some(val3 => {
            return val3.checked;
        });

        /*Then we check and display an error message if the groupStatus
        variable is false i.e if none of the radio button was checked for that specific group.*/
        if (!groupStatus) {
            let showError = document.getElementById(`${category_name}_${i}`);
            showError.innerHTML = "*Please select one of the options.";
            //console.log(groupName);
            errors++;
        }
        //else we remove the error messages
        else {
            let removeError = document.getElementById(`${category_name}_${i}`);
            removeError.innerHTML = "";
        }
    }

    /*If all the radio buttons for each question have be checked - errors=0
    Then  we run the following callback*/
    console.log(errors);
    if (errors == 0) {
        callback();
    }
}

/* The following function is for getting the answers the user selects. 
This function is run every the user selects/clicks a specific answer */

function getAnswers(par, userInfo, categoryAnswers) {
    //getting the id value of each question and its selected answer.
    //so first getting the id value of the question.
    let question_id = Number(
        par.target.parentElement.parentElement.firstElementChild.value
    );
    //then the selected answer to the question
    let given_answer = Number(par.target.value);

    //the question category id
    let category_id = Number(
        par.target.parentElement.parentElement.children[1].value
    );

    //the name of the clicked radio button
    let question_name = par.target.name;

    let answerObject = {};

    /*storing the question_id,category_id of the question and the
    answer to the question to the answerObject */

    answerObject["question_id"] = question_id;
    answerObject["category_id"] = category_id;
    answerObject["question_answer"] = given_answer;

    //getting the id of the user
    answerObject["user_id"] = userInfo.id;

    /*storing the answerObject to the component's object 'categoryAnswers' with the radio button 
    name (question_name) as the key */
    categoryAnswers[question_name] = answerObject;
}

/*the following function is for open-ended questions and checking if they been answered. 
And if there are, we store the answers.*/

function checkOpen(err, class_name, fn, userInfo, categoryAnswers) {
    err = 0;
    //all open ended questions have the same class name
    let open_questions = [...document.getElementsByClassName(class_name)];
    console.log(open_questions.length);
    //we check if there are any open ended questions.
    if (open_questions.length > 0) {
        //if there are, we loop through them
        for (let i = 0; i < open_questions.length; i++) {
            //if the open ended question has no answer given - its empty
            if (!!!open_questions[i]["value"]) {
                //then display the error
                /*The id of the p tag in which display an error is the same as the id its of textarea.
                So to select the p tag, we can use the name of its textarea */
                let showError = document.getElementById(
                    `${open_questions[i]["name"]}`
                );

                showError.innerHTML = "*This field is required";

                err++;
            }

            //else if an answer was given
            else {
                //else remove the error message
                let hideError = document.getElementById(
                    `${open_questions[i]["name"]}`
                );
                hideError.innerHTML = "";
                /*Now for this particular question, since an answer was given, we store that answer.*/

                //getting the id value of each question and its selected answer.
                //so first getting the id value of the question.
                let question_id = Number(
                    open_questions[i].parentElement.firstElementChild.value
                );
                //then the selected answer to the question, which will be a string.
                let given_answer = open_questions[i].value.trim();

                //the question category_id
                let category_id = Number(
                    open_questions[i].parentElement.children[1].value
                );

                //the name of the text area
                let question_name = open_questions[i].name;

                let objAnswer = {};

                objAnswer["question_id"] = question_id;
                objAnswer["category_id"] = category_id;
                objAnswer["question_answer"] = given_answer;

                //getting the id of the user
                objAnswer["user_id"] = userInfo.id;

                /*storing the objAnswer to the component's object 'categoryAnswers' with the text area
                name (question_name) as the key */
                categoryAnswers[question_name] = objAnswer;
            }
        }
        // if there are no errors - err=0
        if (err == 0) {
            //run  a function fn()
            fn();
        }
    }
    //if there are no open endede questions
    else {
        fn();
    }
}

export { next, getAnswers, checkOpen };
