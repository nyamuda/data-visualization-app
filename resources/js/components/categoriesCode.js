/*The purpose of the following code is to check if the radio buttons have been
    checked for each group before the user can go to the next category of the questions*/
function next(
    class_name,
    category_questions,
    category_name,
    errors,
    mutation_name
) {
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
        and the category_name parameter is 'team', it means there are going to be 5 groups of 
        radio buttons: team_0, team_1,...,team_4*/

        let groupName = allInputs.filter(val2 => {
            //returnong a specific group of radio buttons.
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
            errors++;
        }
        //else we remove the error messages
        else {
            let removeError = document.getElementById(`${category_name}_${i}`);
            removeError.innerHTML = "";
        }
    }
    /*If all the radio buttons for each question have be checked - errors=0
    Then  we move to the next category of questions.*/
    console.log(errors);
    if (errors == 0) {
        mutation_name();
    }
}

/* The following function is for getting the answers the user selects */

function getAnswers(par, userInfo, categoryAnswers) {
    //getting the id value of each question and its selected answer.
    //so first getting the id value of the question.
    let question_id =
        par.target.parentElement.parentElement.firstElementChild.value;
    //then the selected answer to the question
    let given_answer = Number(par.target.value);

    //the question category id
    let category_id = par.target.parentElement.parentElement.children[1].value;

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

export { next, getAnswers };