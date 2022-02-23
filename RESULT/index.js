// ---------------------------------------------------------------------- button selection -------------------------------------------------------

function commonForSelectBtn(idBtn) {
    document.getElementById(idBtn).style.backgroundColor = "#bbedf4";
    document.getElementById(idBtn).style.color = "#0e80a4";
    document.getElementById(idBtn).style.border = "1px solid #BBEDF4";
}

function commonForNoselectedBtn(arrayBtnsId) {
    arrayBtnsId.map((el) => {
        document.getElementById(el).style.backgroundColor = "white";
        document.getElementById(el).style.color = "black";
        document.getElementById(el).style.border = "1px solid black";
    });
}

// ------------------------------------------------------------ ALL DRAG AND DROP -------------------------------------------------------------

// common commands

function allowDrop(e) {
    e.preventDefault();
}

// 2 QUESTION

function drag2(e) {
    localStorage.setItem("idOrigin2question6class", e.target.id);
}

function drop2(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin2question6class");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/2que/" + nameObjectOrig + ".svg";
    orignalElement.src = "./pictures/2que/" + nameObjectCurrent + ".svg";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;

    // меняем фон при определённом условии
    if (nameObjectCurrent === "emptyPlace") {
        currentElement.parentElement.style.backgroundColor = "white";
    }

    // меняем вид курсора
    currentElement.style.cursor = "grab";
    orignalElement.style.cursor = "default";
}

// 3 QUESTION

function drag3(e) {
    localStorage.setItem("idOrigin3question6class", e.target.id);
}

function drop3(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin3question6class");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/3que/" + nameObjectOrig + ".svg";
    orignalElement.src = "./pictures/3que/" + nameObjectCurrent + ".svg";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;

    // меняем фон при определённом условии
    if (nameObjectCurrent === "emptyPlace") {
        currentElement.parentElement.style.backgroundColor = "white";
    }

    // меняем вид курсора
    currentElement.style.cursor = "grab";
    orignalElement.style.cursor = "default";
}

// 4 QUESTION

function drag4(e) {
    localStorage.setItem("idOrigin4question6class", e.target.id);
}

function drop4(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin4question6class");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/4que/" + nameObjectOrig + ".svg";
    orignalElement.src = "./pictures/4que/" + nameObjectCurrent + ".svg";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;

    // меняем фон при определённом условии
    if (nameObjectCurrent === "emptyPlace") {
        currentElement.parentElement.style.backgroundColor = "white";
    }

    // меняем вид курсора
    currentElement.style.cursor = "grab";
    orignalElement.style.cursor = "default";
}

// ---------------------------------------------------------------------- SHOWING THE CORRECT ANSWER

function addCorrectAnswer(
    numberCorrectAnswer,
    numberQue,
    numberContent,
    numberContentCorrectAnswer
) {
    let newElement = document.createElement("div");
    newElement.className = numberCorrectAnswer;

    let childNewElement = document.createElement("div"); // сосед 1
    childNewElement.className = "headerCorrectAnswer";
    childNewElement.textContent = "Correct answer";

    let secondChildNewElement = document.createElement("div"); // сосед 2
    secondChildNewElement.className = numberContentCorrectAnswer;

    let contentContent = document.createElement("img");
    contentContent.src = "./pictures/" + numberQue + "/correctAnswer.svg";
    contentContent.alt = "correct answer";

    secondChildNewElement.appendChild(contentContent);

    document.getElementsByClassName(numberContent)[0].appendChild(newElement);

    document
        .getElementsByClassName(numberCorrectAnswer)[0]
        .appendChild(childNewElement);
    document
        .getElementsByClassName(numberCorrectAnswer)[0]
        .appendChild(secondChildNewElement);
}

function addCorrectAnswerQuestion1() {
    document.getElementsByClassName("app1")[0].style.height = "650px";
    addCorrectAnswer("correctAnswer1", "1que", "app1", "contentCorrectAnswer1");
}

function addCorrectAnswerQuestion2() {
    document.getElementsByClassName("app2")[0].style.height = "700px";
    addCorrectAnswer("correctAnswer2", "2que", "app2", "contentCorrectAnswer2");
}

function addCorrectAnswerQuestion3() {
    document.getElementsByClassName("app3")[0].style.height = "550px";
    addCorrectAnswer("correctAnswer3", "3que", "app3", "contentCorrectAnswer3");
}

function addCorrectAnswerQuestion4() {
    document.getElementsByClassName("app4")[0].style.height = "600px";
    addCorrectAnswer("correctAnswer4", "4que", "app4", "contentCorrectAnswer4");
}

function addCorrectAnswerQuestion5() {
    document.getElementsByClassName("app5")[0].style.height = "700px";
    addCorrectAnswer("correctAnswer5", "5que", "app5", "contentCorrectAnswer5");
}

function addCorrectAnswerQuestion6() {
    document.getElementsByClassName("app6")[0].style.height = "550px";
    addCorrectAnswer("correctAnswer6", "6que", "app6", "contentCorrectAnswer6");
}

function addCorrectAnswerQuestion7() {
    document.getElementsByClassName("app7")[0].style.height = "500px";
    addCorrectAnswer("correctAnswer7", "7que", "app7", "contentCorrectAnswer7");
}

function addCorrectAnswerQuestion8() {
    document.getElementsByClassName("app8")[0].style.height = "500px";
    addCorrectAnswer("correctAnswer8", "8que", "app8", "contentCorrectAnswer8");
}

function addCorrectAnswerQuestion9() {
    document.getElementsByClassName("app9")[0].style.height = "480px";
    addCorrectAnswer("correctAnswer9", "9que", "app9", "contentCorrectAnswer9");
}

function addCorrectAnswerQuestion10() {
    document.getElementsByClassName("app10")[0].style.height = "550px";
    addCorrectAnswer(
        "correctAnswer10",
        "10que",
        "app10",
        "contentCorrectAnswer10"
    );
}

function addCorrectAnswerQuestion11() {
    document.getElementsByClassName("app11")[0].style.height = "550px";
    addCorrectAnswer(
        "correctAnswer11",
        "11que",
        "app11",
        "contentCorrectAnswer11"
    );
}

function addCorrectAnswerQuestion12() {
    document.getElementsByClassName("app12")[0].style.height = "450px";
    addCorrectAnswer(
        "correctAnswer12",
        "12que",
        "app12",
        "contentCorrectAnswer12"
    );
}

function addCorrectAnswerQuestion13() {
    document.getElementsByClassName("app13")[0].style.height = "700px";
    addCorrectAnswer(
        "correctAnswer13",
        "13que",
        "app13",
        "contentCorrectAnswer13"
    );
}

function addCorrectAnswerQuestion14() {
    document.getElementsByClassName("app14")[0].style.height = "500px";
    addCorrectAnswer(
        "correctAnswer14",
        "14que",
        "app14",
        "contentCorrectAnswer"
    );
}

function addCorrectAnswerQuestion15() {
    document.getElementsByClassName("app15")[0].style.height = "700px";
    addCorrectAnswer(
        "correctAnswer15",
        "15que",
        "app15",
        "contentCorrectAnswer15"
    );
}

function addCorrectAnswerQuestion16() {
    document.getElementsByClassName("app16")[0].style.height = "700px";
    addCorrectAnswer(
        "correctAnswer16",
        "16que",
        "app16",
        "contentCorrectAnswer16"
    );
}

function addCorrectAnswerQuestion17() {
    document.getElementsByClassName("app17")[0].style.height = "450px";
    addCorrectAnswer(
        "correctAnswer17",
        "17que",
        "app17",
        "contentCorrectAnswer"
    );
}

function addCorrectAnswerQuestion18() {
    document.getElementsByClassName("app18")[0].style.height = "450px";
    addCorrectAnswer(
        "correctAnswer18",
        "18que",
        "app18",
        "contentCorrectAnswer18"
    );
}

function addCorrectAnswerQuestion19() {
    document.getElementsByClassName("app19")[0].style.height = "650px";
    addCorrectAnswer(
        "correctAnswer19",
        "19que",
        "app19",
        "contentCorrectAnswer"
    );
}

function addCorrectAnswerQuestion20() {
    document.getElementsByClassName("app20")[0].style.height = "900px";
    addCorrectAnswer(
        "correctAnswer20",
        "20que",
        "app20",
        "contentCorrectAnswer20"
    );
}

function addCorrectAnswerQuestion21() {
    document.getElementsByClassName("app21")[0].style.height = "500px";
    addCorrectAnswer(
        "correctAnswer21",
        "21que",
        "app21",
        "contentCorrectAnswer21"
    );
}

function addCorrectAnswerQuestion22() {
    document.getElementsByClassName("app22")[0].style.height = "600px";
    addCorrectAnswer(
        "correctAnswer22",
        "22que",
        "app22",
        "contentCorrectAnswer22"
    );
}

function addCorrectAnswerQuestion23() {
    document.getElementsByClassName("app23")[0].style.height = "400px";
    addCorrectAnswer(
        "correctAnswer23",
        "23que",
        "app23",
        "contentCorrectAnswer23"
    );
}

function addCorrectAnswerQuestion24() {
    document.getElementsByClassName("app24")[0].style.height = "700px";
    addCorrectAnswer(
        "correctAnswer24",
        "24que",
        "app24",
        "contentCorrectAnswer24"
    );
}

function addCorrectAnswerQuestion25() {
    document.getElementsByClassName("app25")[0].style.height = "950px";
    addCorrectAnswer(
        "correctAnswer25",
        "25que",
        "app25",
        "contentCorrectAnswer25"
    );
}

// --------------------------------------------------------------------- validation of input fields ----------------------------------------------

// -------------------------------------------------------------common function---------------------------------------------------

function succerror(elem, checkElement) {
    if (checkElement) {
        elem.style.backgroundColor = "#ED7777";
        elem.style.color = "white";
        elem.style.border = "1px solid #ED7777";
    } else {
        elem.style.backgroundColor = "#48B736";
        elem.style.color = "white";
        elem.style.border = "1px solid #48B736";
    }
}

// добавляем иконку статуса после номера вопроса

function addImage(status, ancestor, appClass, position) {
    let object = document.createElement("img");
    object.style.marginLeft = "10px";

    if (status === "success") {
        object.src = "./pictures/successIcon.svg";
        document.getElementsByClassName(appClass)[0].style.border =
            "1px solid #9DD765";
        document.getElementsByClassName(
            "lineUnderHeading" + position
        )[0].style.borderBottom = "1px solid #9DD765";
    } else {
        object.src = "./pictures/failureIcon.svg";
        document.getElementsByClassName(appClass)[0].style.border =
            "1px solid #FFB47D";
        document.getElementsByClassName(
            "lineUnderHeading" + position
        )[0].style.borderBottom = "1px solid #FFB47D";
    }

    ancestor[0].children[0].appendChild(object);
}

// добавляем крестик или галочку над областью результата

function addMiniIcon(elem, status) {
    // создаём мини-иконку
    let objDiv = document.createElement("div");

    // получаем ширину элемента, чтобы выровнять по горизонтали
    let widthAdjacentElement = elem.getBoundingClientRect().width;

    // получаем отступы элемента, для того же

    let rightIndent = window
        .getComputedStyle(elem, null)
        .getPropertyValue("margin-right");

    objDiv.className = "statusMiniIcon";

    objDiv.style.width = widthAdjacentElement;
    objDiv.style.position = "absolute";

    if (elem.parentElement.parentElement.className === "content2") {
        objDiv.style.marginTop = "-55px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 7 + "px";
    } else if (
        elem.parentElement.parentElement.parentElement.className === "content6"
    ) {
        objDiv.style.marginTop = "-50px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 33 + "px";
    } else if (elem.parentElement.parentElement.className === "content9") {
        objDiv.style.marginTop = "-50px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 33 + "px";
    } else {
        objDiv.style.marginTop = "-63px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 7 + "px";
    }

    if (elem.parentElement.parentElement.className === "content5") {
        objDiv.style.marginTop = "-55px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 7 + "px";
    }

    if (elem.parentElement.parentElement.className === "content10") {
        objDiv.style.width = "70px";

        if (elem.className === "firstInput10") {
            objDiv.style.marginLeft =
                elem.offsetLeft + widthAdjacentElement / 2 - 335 + "px";
        } else if (elem.className === "secondInput10") {
            objDiv.style.marginLeft = "-30px";
        }

        objDiv.style.marginRight = "130px";
    }

    if (elem.parentElement.parentElement.className === "content13") {
        objDiv.style.marginTop = "-55px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 57 + "px";
    }

    if (
        elem.parentElement.parentElement.parentElement.className === "content11"
    ) {
        objDiv.style.marginTop = "-25px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 23 + "px";
    }

    if (
        elem.parentElement.parentElement.parentElement.className === "content14"
    ) {
        objDiv.style.marginTop = "-55px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 30 + "px";
    }

    if (elem.parentElement.parentElement.className === "content16") {
        objDiv.style.marginTop = "-25px";
    }

    if (
        elem.parentElement.parentElement.parentElement.className === "content18"
    ) {
        objDiv.style.marginTop = "-17px";
    }

    if (elem.parentElement.parentElement.className === "content19") {
        objDiv.style.marginTop = "-55px";
    }

    if (elem.parentElement.parentElement.className === "content20") {
        objDiv.style.marginTop = "-75px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 47 + "px";
    }

    if (
        elem.parentElement.parentElement.parentElement.className === "content24"
    ) {
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 75 + "px";
    }

    if (
        elem.parentElement.parentElement.parentElement.className === "content8"
    ) {
        objDiv.style.marginTop = "-23px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 27 + "px";
    }

    if (
        elem.parentElement.parentElement.parentElement.className === "content15"
    ) {
        objDiv.style.marginTop = "-17px";
    }

    if (
        elem.parentElement.parentElement.parentElement.parentElement
            .className === "content22"
    ) {
        objDiv.style.marginTop = "-23px";
    }

    if (
        elem.parentElement.firstElementChild.id === "secondNumber12" ||
        elem.parentElement.firstElementChild.id === "thirdNumber12" ||
        elem.parentElement.firstElementChild.id === "fourthNumber12"
    ) {
        objDiv.style.marginTop = "90px";
        objDiv.style.marginLeft = elem.offsetLeft - 100 + "px";
    }

    objDiv.style.marginRight = rightIndent;
    objDiv.style.paddingBottom = "10px";
    objDiv.style.display = "flex";
    objDiv.style.justifyContent = "center";
    objDiv.style.alignItems = "center";

    let obj = document.createElement("img");

    if (status === "success") {
        obj.src = "./pictures/successMiniIcon.svg";
    } else {
        obj.src = "./pictures/failureMiniIcon.svg";
    }

    objDiv.appendChild(obj);

    // устанавливаем её в нужное место
    elem.parentElement.insertBefore(objDiv, elem);
}

// делаем появление мини-иконок над областью проверки

function createMiniIcon(property, element) {
    if (property === "right") {
        addMiniIcon(element, "success");
    } else {
        addMiniIcon(element, "failure");
    }
}

function gettingDataFromFields(
    countId,
    correctNumbers,
    numberQuestion,
    number
) {
    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            document.getElementById("firstNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.firstNumber = "right";
                    } else {
                        number.firstNumber = "wrong";
                    }
                };
        }

        if (i === 1) {
            document.getElementById("secondNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.secondNumber = "right";
                    } else {
                        number.secondNumber = "wrong";
                    }
                };
        }

        if (i === 2) {
            document.getElementById("thirdNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.thirdNumber = "right";
                    } else {
                        number.thirdNumber = "wrong";
                    }
                };
        }

        if (i === 3) {
            document.getElementById("fourthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.fourthNumber = "right";
                    } else {
                        number.fourthNumber = "wrong";
                    }
                };
        }

        if (i === 4) {
            document.getElementById("fifthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.fifthNumber = "right";
                    } else {
                        number.fifthNumber = "wrong";
                    }
                };
        }

        if (i === 5) {
            document.getElementById("sixthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.sixthNumber = "right";
                    } else {
                        number.sixthNumber = "wrong";
                    }
                };
        }

        if (i === 6) {
            document.getElementById("seventhNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.seventhNumber = "right";
                    } else {
                        number.seventhNumber = "wrong";
                    }
                };
        }

        if (i === 7) {
            document.getElementById("eighthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.eighthNumber = "right";
                    } else {
                        number.eighthNumber = "wrong";
                    }
                };
        }
    }
}

function succerrorAndCreateMiniIcon(countId, numberQuestion, number) {
    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            succerror(
                document.getElementById("firstNumber" + numberQuestion),
                number.firstNumber === "wrong"
            );

            createMiniIcon(
                number.firstNumber,
                document.getElementById("firstNumber" + numberQuestion)
            );
        }

        if (i === 1) {
            succerror(
                document.getElementById("secondNumber" + numberQuestion),
                number.secondNumber === "wrong"
            );

            createMiniIcon(
                number.secondNumber,
                document.getElementById("secondNumber" + numberQuestion)
            );
        }

        if (i === 2) {
            succerror(
                document.getElementById("thirdNumber" + numberQuestion),
                number.thirdNumber === "wrong"
            );

            createMiniIcon(
                number.thirdNumber,
                document.getElementById("thirdNumber" + numberQuestion)
            );
        }

        if (i === 3) {
            succerror(
                document.getElementById("fourthNumber" + numberQuestion),
                number.fourthNumber === "wrong"
            );

            createMiniIcon(
                number.fourthNumber,
                document.getElementById("fourthNumber" + numberQuestion)
            );
        }

        if (i === 4) {
            succerror(
                document.getElementById("fifthNumber" + numberQuestion),
                number.fifthNumber === "wrong"
            );

            createMiniIcon(
                number.fifthNumber,
                document.getElementById("fifthNumber" + numberQuestion)
            );
        }

        if (i === 5) {
            succerror(
                document.getElementById("sixthNumber" + numberQuestion),
                number.sixthNumber === "wrong"
            );

            createMiniIcon(
                number.sixthNumber,
                document.getElementById("sixthNumber" + numberQuestion)
            );
        }

        if (i === 6) {
            succerror(
                document.getElementById("seventhNumber" + numberQuestion),
                number.seventhNumber === "wrong"
            );

            createMiniIcon(
                number.seventhNumber,
                document.getElementById("seventhNumber" + numberQuestion)
            );
        }

        if (i === 7) {
            succerror(
                document.getElementById("eighthNumber" + numberQuestion),
                number.eighthNumber === "wrong"
            );

            createMiniIcon(
                number.eighthNumber,
                document.getElementById("eighthNumber" + numberQuestion)
            );
        }
    }
}

function highlightUnselectedBlocks(countId, numberQuestion, number) {
    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            if (number.firstNumber === "") {
                document.getElementById(
                    "firstNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 1) {
            if (number.secondNumber === "") {
                document.getElementById(
                    "secondNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 2) {
            if (number.thirdNumber === "") {
                document.getElementById(
                    "thirdNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 3) {
            if (number.fourthNumber === "") {
                document.getElementById(
                    "fourthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 4) {
            if (number.fifthNumber === "") {
                document.getElementById(
                    "fifthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 5) {
            if (number.sixthNumber === "") {
                document.getElementById(
                    "sixthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 6) {
            if (number.seventhNumber === "") {
                document.getElementById(
                    "seventhNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 7) {
            if (number.eighthNumber === "") {
                document.getElementById(
                    "eighthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }
    }
}

function highlightingUnfillededBlocks(countId, numberQuestion) {
    let firstEmpty = document.getElementById("firstEmpty" + numberQuestion);
    let secondEmpty = document.getElementById("secondEmpty" + numberQuestion);
    let thirdEmpty = document.getElementById("thirdEmpty" + numberQuestion);
    let fourthEmpty = document.getElementById("fourthEmpty" + numberQuestion);
    let fifthEmpty = document.getElementById("fifthEmpty" + numberQuestion);
    let sixthEmpty = document.getElementById("sixthEmpty" + numberQuestion);
    let seventhEmpty = document.getElementById("seventhEmpty" + numberQuestion);
    let eighthEmpty = document.getElementById("eighthEmpty" + numberQuestion);

    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            if (firstEmpty.textContent === "") {
                firstEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 1) {
            if (secondEmpty.textContent === "") {
                secondEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 2) {
            if (thirdEmpty.textContent === "") {
                thirdEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 3) {
            if (fourthEmpty.textContent === "") {
                fourthEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 4) {
            if (fifthEmpty.textContent === "") {
                fifthEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 5) {
            if (sixthEmpty.textContent === "") {
                sixthEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 6) {
            if (seventhEmpty.textContent === "") {
                seventhEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 7) {
            if (eighthEmpty.textContent === "") {
                eighthEmpty.style.border = "2px solid #FFB47D";
            }
        }
    }
}

// ----------------------------------------------------------------------------------------------------------------------------

// 1 QUESTION

let numbers1 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

gettingDataFromFields(4, ["-0.6", "3.1", "-5", "8.6"], 1, numbers1);

function question1() {
    if (
        numbers1.firstNumber != "" &&
        numbers1.secondNumber != "" &&
        numbers1.thirdNumber != "" &&
        numbers1.fourthNumber != ""
    ) {
        succerrorAndCreateMiniIcon(4, 1, numbers1);

        // выносим общий статус к номеру вопроса

        if (
            numbers1.firstNumber === "right" &&
            numbers1.secondNumber === "right" &&
            numbers1.thirdNumber === "right" &&
            numbers1.fourthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question1"),
                "app1",
                1
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question1"),
                "app1",
                1
            );

            addCorrectAnswerQuestion1();
        }
    } else {
        highlightUnselectedBlocks(4, 1, numbers1);
    }
}

// 2 QUESTION

function question2() {
    let necessaryPlace1 = document.getElementsByClassName("emptyPlace2")[0];
    let necessaryPlace2 = document.getElementsByClassName("emptyPlace2")[1];
    let necessaryPlace3 = document.getElementsByClassName("emptyPlace2")[2];
    let necessaryPlace4 = document.getElementsByClassName("emptyPlace2")[3];

    let nameChild1 = necessaryPlace1.children[0].id.slice(0, -1);
    let nameChild2 = necessaryPlace2.children[0].id.slice(0, -1);
    let nameChild3 = necessaryPlace3.children[0].id.slice(0, -1);
    let nameChild4 = necessaryPlace4.children[0].id.slice(0, -1);

    if (
        nameChild1 !== "emptyPlace2" &&
        nameChild2 !== "emptyPlace2" &&
        nameChild3 !== "emptyPlace2" &&
        nameChild4 !== "emptyPlace2"
    ) {
        if (
            (nameChild1 === "secondBtn2" || nameChild1 === "fourthBtn2") &&
            (nameChild2 === "firstBtn2" || nameChild2 === "thirdBtn2") &&
            (nameChild3 === "fourthBtn2" || nameChild3 === "secondBtn2") &&
            (nameChild4 === "thirdBtn2" || nameChild4 === "firstBtn2")
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question2"),
                "app2",
                2
            );
        } else {
            if (nameChild1 !== "secondBtn2" && nameChild1 !== "fourthBtn2") {
                necessaryPlace1.children[0].style.border = "2px solid #ED7777";
                necessaryPlace1.children[0].style.borderRadius = "5px";
            }

            if (nameChild2 !== "firstBtn2" && nameChild2 !== "thirdBtn2") {
                necessaryPlace2.children[0].style.border = "2px solid #ED7777";
                necessaryPlace2.children[0].style.borderRadius = "5px";
            }

            if (nameChild3 !== "fourthBtn2" && nameChild3 !== "secondBtn2") {
                necessaryPlace3.children[0].style.border = "2px solid #ED7777";
                necessaryPlace3.children[0].style.borderRadius = "5px";
            }

            if (nameChild4 !== "thirdBtn2" && nameChild4 !== "firstBtn2") {
                necessaryPlace4.children[0].style.border = "2px solid #ED7777";
                necessaryPlace4.children[0].style.borderRadius = "5px";
            }

            addImage(
                "failure",
                document.getElementsByClassName("question2"),
                "app2",
                2
            );

            addCorrectAnswerQuestion2();
        }
    } else {
        if (nameChild1 === "emptyPlace2") {
            necessaryPlace1.children[0].style.border = "2px solid #FFB47D";
            necessaryPlace1.children[0].style.borderRadius = "5px";
        }

        if (nameChild2 === "emptyPlace2") {
            necessaryPlace2.children[0].style.border = "2px solid #FFB47D";
            necessaryPlace2.children[0].style.borderRadius = "5px";
        }

        if (nameChild3 === "emptyPlace2") {
            necessaryPlace3.children[0].style.border = "2px solid #FFB47D";
            necessaryPlace3.children[0].style.borderRadius = "5px";
        }

        if (nameChild4 === "emptyPlace2") {
            necessaryPlace4.children[0].style.border = "2px solid #FFB47D";
            necessaryPlace4.children[0].style.borderRadius = "5px";
        }
    }
}

// 3 QUESTION

function question3() {
    let necessaryPlace1 = document.getElementsByClassName("emptyPlace3")[0];
    let nameChild1 = necessaryPlace1.children[0].id.slice(0, -1);

    if (nameChild1 !== "emptyPlace3") {
        if (nameChild1 === "firstBtn3") {
            addImage(
                "success",
                document.getElementsByClassName("question3"),
                "app3",
                3
            );
        } else {
            if (nameChild1 !== "firstBtn3") {
                necessaryPlace1.children[0].style.border = "2px solid #ED7777";
                necessaryPlace1.children[0].style.borderRadius = "5px";
            }

            addImage(
                "failure",
                document.getElementsByClassName("question3"),
                "app3",
                3
            );

            addCorrectAnswerQuestion3();
        }
    } else {
        if (nameChild1 === "emptyPlace3") {
            necessaryPlace1.children[0].style.border = "2px solid #FFB47D";
            necessaryPlace1.children[0].style.borderRadius = "5px";
        }
    }
}

// 4 QUESTION

function question4() {
    let necessaryPlace1 = document.getElementsByClassName("emptyPlace4")[0];
    let necessaryPlace2 = document.getElementsByClassName("emptyPlace4")[1];
    let necessaryPlace3 = document.getElementsByClassName("emptyPlace4")[2];
    let necessaryPlace4 = document.getElementsByClassName("emptyPlace4")[3];
    let necessaryPlace5 = document.getElementsByClassName("emptyPlace4")[4];
    let necessaryPlace6 = document.getElementsByClassName("emptyPlace4")[5];

    let nameChild1 = necessaryPlace1.children[0].id.slice(0, -1);
    let nameChild2 = necessaryPlace2.children[0].id.slice(0, -1);
    let nameChild3 = necessaryPlace3.children[0].id.slice(0, -1);
    let nameChild4 = necessaryPlace4.children[0].id.slice(0, -1);
    let nameChild5 = necessaryPlace5.children[0].id.slice(0, -1);
    let nameChild6 = necessaryPlace6.children[0].id.slice(0, -1);

    if (
        nameChild1 !== "emptyPlace4" &&
        nameChild2 !== "emptyPlace4" &&
        nameChild3 !== "emptyPlace4" &&
        nameChild4 !== "emptyPlace4" &&
        nameChild5 !== "emptyPlace4" &&
        nameChild6 !== "emptyPlace4"
    ) {
        if (
            nameChild1 === "fourthBtn4" &&
            nameChild2 === "secondBtn4" &&
            nameChild3 === "fifthBtn4" &&
            nameChild4 === "thirdBtn4" &&
            nameChild5 === "firstBtn4" &&
            nameChild6 === "sixthBtn4"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question4"),
                "app4",
                4
            );
        } else {
            if (nameChild1 !== "fourthBtn4") {
                necessaryPlace1.children[0].style.border = "2px solid #ED7777";
                necessaryPlace1.children[0].style.borderRadius = "5px";
            }

            if (nameChild2 !== "secondBtn4") {
                necessaryPlace2.children[0].style.border = "2px solid #ED7777";
                necessaryPlace2.children[0].style.borderRadius = "5px";
            }

            if (nameChild3 !== "fifthBtn4") {
                necessaryPlace3.children[0].style.border = "2px solid #ED7777";
                necessaryPlace3.children[0].style.borderRadius = "5px";
            }

            if (nameChild4 !== "thirdBtn4") {
                necessaryPlace4.children[0].style.border = "2px solid #ED7777";
                necessaryPlace4.children[0].style.borderRadius = "5px";
            }

            if (nameChild5 !== "firstBtn4") {
                necessaryPlace5.children[0].style.border = "2px solid #ED7777";
                necessaryPlace5.children[0].style.borderRadius = "5px";
            }

            if (nameChild6 !== "sixthBtn4") {
                necessaryPlace6.children[0].style.border = "2px solid #ED7777";
                necessaryPlace6.children[0].style.borderRadius = "5px";
            }

            addImage(
                "failure",
                document.getElementsByClassName("question4"),
                "app4",
                4
            );

            addCorrectAnswerQuestion4();
        }
    } else {
        if (nameChild1 === "emptyPlace4") {
            necessaryPlace1.children[0].style.border = "2px solid #FFB47D";
            necessaryPlace1.children[0].style.borderRadius = "5px";
        }

        if (nameChild2 === "emptyPlace4") {
            necessaryPlace2.children[0].style.border = "2px solid #FFB47D";
            necessaryPlace2.children[0].style.borderRadius = "5px";
        }

        if (nameChild3 === "emptyPlace4") {
            necessaryPlace3.children[0].style.border = "2px solid #FFB47D";
            necessaryPlace3.children[0].style.borderRadius = "5px";
        }

        if (nameChild4 === "emptyPlace4") {
            necessaryPlace4.children[0].style.border = "2px solid #FFB47D";
            necessaryPlace4.children[0].style.borderRadius = "5px";
        }

        if (nameChild5 === "emptyPlace4") {
            necessaryPlace5.children[0].style.border = "2px solid #FFB47D";
            necessaryPlace5.children[0].style.borderRadius = "5px";
        }

        if (nameChild6 === "emptyPlace4") {
            necessaryPlace6.children[0].style.border = "2px solid #FFB47D";
            necessaryPlace6.children[0].style.borderRadius = "5px";
        }
    }
}

// 5 QUESTION

let numbers5 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

gettingDataFromFields(4, ["1/2", "2/3", "1/3", "1/5"], 5, numbers5);

function question5() {
    if (
        numbers5.firstNumber != "" &&
        numbers5.secondNumber != "" &&
        numbers5.thirdNumber != "" &&
        numbers5.fourthNumber != ""
    ) {
        succerrorAndCreateMiniIcon(4, 5, numbers5);

        // выносим общий статус к номеру вопроса

        if (
            numbers5.firstNumber === "right" &&
            numbers5.secondNumber === "right" &&
            numbers5.thirdNumber === "right" &&
            numbers5.fourthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question5"),
                "app5",
                5
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question5"),
                "app5",
                5
            );

            addCorrectAnswerQuestion5();
        }
    } else {
        highlightUnselectedBlocks(4, 5, numbers5);
    }
}

// 6 QUESTION

let numbers6 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

gettingDataFromFields(3, [20, 7, 15], 6, numbers6);

function question6() {
    if (
        numbers6.firstNumber != "" &&
        numbers6.secondNumber != "" &&
        numbers6.thirdNumber != ""
    ) {
        succerrorAndCreateMiniIcon(3, 6, numbers6);

        // выносим общий статус к номеру вопроса

        if (
            numbers6.firstNumber === "right" &&
            numbers6.secondNumber === "right" &&
            numbers6.thirdNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question6"),
                "app6",
                6
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question6"),
                "app6",
                6
            );

            addCorrectAnswerQuestion6();
        }
    } else {
        highlightUnselectedBlocks(3, 6, numbers6);
    }
}

// 7 QUESTION

let selectBtn7 = "",
    nameSelectedBtn7 = "";

document.getElementById("firstBtn7").onclick = function () {
    selectBtn7 = "wrong";
    nameSelectedBtn7 = "firstBtn7";

    commonForSelectBtn("firstBtn7");
    commonForNoselectedBtn(["secondBtn7"]);
};

document.getElementById("secondBtn7").onclick = function () {
    selectBtn7 = "right";
    nameSelectedBtn7 = "secondBtn7";

    commonForSelectBtn("secondBtn7");
    commonForNoselectedBtn(["firstBtn7"]);
};

function question7() {
    if (selectBtn7 !== "") {
        succerror(
            document.getElementById(nameSelectedBtn7),
            selectBtn7 === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (selectBtn7 === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question7"),
                "app7",
                7
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question7"),
                "app7",
                7
            );

            addCorrectAnswerQuestion7();
        }
    } else {
        document.getElementById("firstBtn7").style.border = "2px solid #FFB47D";
        document.getElementById("secondBtn7").style.border =
            "2px solid #FFB47D";
    }
}

// 8 QUESTION

let numbers8 = {
    firstNumber: "",
};

gettingDataFromFields(1, [90], 8, numbers8);

function question8() {
    if (numbers8.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 8, numbers8);

        // выносим общий статус к номеру вопроса

        if (numbers8.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question8"),
                "app8",
                8
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question8"),
                "app8",
                8
            );

            addCorrectAnswerQuestion8();
        }
    } else {
        highlightUnselectedBlocks(1, 8, numbers8);
    }
}

// 9 QUESTION

let numbers9 = {
    firstNumber: "",
};

gettingDataFromFields(1, [90], 9, numbers9);

function question9() {
    if (numbers9.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 9, numbers9);

        // выносим общий статус к номеру вопроса

        if (numbers9.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question9"),
                "app9",
                9
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question9"),
                "app9",
                9
            );

            addCorrectAnswerQuestion9();
        }
    } else {
        highlightUnselectedBlocks(1, 9, numbers9);
    }
}

// 10 QUESTION

let selectBtn10 = "",
    nameSelectedBtn10 = "";

document.getElementById("firstBtn10").onclick = function () {
    selectBtn10 = "right";
    nameSelectedBtn10 = "firstBtn10";

    commonForSelectBtn("firstBtn10");
    commonForNoselectedBtn(["secondBtn10", "thirdBtn10", "fourthBtn10"]);
};

document.getElementById("secondBtn10").onclick = function () {
    selectBtn10 = "wrong";
    nameSelectedBtn10 = "secondBtn10";

    commonForSelectBtn("secondBtn10");
    commonForNoselectedBtn(["firstBtn10", "thirdBtn10", "fourthBtn10"]);
};

document.getElementById("thirdBtn10").onclick = function () {
    selectBtn10 = "wrong";
    nameSelectedBtn10 = "thirdBtn10";

    commonForSelectBtn("thirdBtn10");
    commonForNoselectedBtn(["firstBtn10", "secondBtn10", "fourthBtn10"]);
};

document.getElementById("fourthBtn10").onclick = function () {
    selectBtn10 = "wrong";
    nameSelectedBtn10 = "fourthBtn10";

    commonForSelectBtn("fourthBtn10");
    commonForNoselectedBtn(["firstBtn10", "secondBtn10", "thirdBtn10"]);
};

function question10() {
    if (selectBtn10 !== "") {
        succerror(
            document.getElementById(nameSelectedBtn10),
            selectBtn10 === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (selectBtn10 === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question10"),
                "app10",
                10
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question10"),
                "app10",
                10
            );

            addCorrectAnswerQuestion10();
        }
    } else {
        document.getElementById("firstBtn10").style.border =
            "2px solid #FFB47D";
        document.getElementById("secondBtn10").style.border =
            "2px solid #FFB47D";
        document.getElementById("thirdBtn10").style.border =
            "2px solid #FFB47D";
        document.getElementById("fourthBtn10").style.border =
            "2px solid #FFB47D";
    }
}

// 11 QUESTION

let numbers11 = {
    firstNumber: "",
    secondNumber: "",
};

gettingDataFromFields(2, [3, 4], 11, numbers11);

function question11() {
    if (numbers11.firstNumber != "" && numbers11.secondNumber != "") {
        succerror(
            document.getElementById("firstNumber11"),
            numbers11.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondNumber11"),
            numbers11.secondNumber === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers11.firstNumber === "right" &&
            numbers11.secondNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question11"),
                "app11",
                11
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question11"),
                "app11",
                11
            );

            addCorrectAnswerQuestion11();
        }
    } else {
        highlightUnselectedBlocks(2, 11, numbers11);
    }
}

// 12 QUESTION

let numbers12 = {
    firstNumber: "",
};

gettingDataFromFields(1, [21], 12, numbers12);

function question12() {
    if (numbers12.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 12, numbers12);

        // выносим общий статус к номеру вопроса

        if (numbers12.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question12"),
                "app12",
                12
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question12"),
                "app12",
                12
            );

            addCorrectAnswerQuestion12();
        }
    } else {
        highlightUnselectedBlocks(1, 12, numbers12);
    }
}

// 13 QUESTION

let numbers13 = {
    firstNumber: "",
};

gettingDataFromFields(1, ["2/3"], 13, numbers13);

function question13() {
    if (numbers13.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 13, numbers13);

        // выносим общий статус к номеру вопроса

        if (numbers13.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question13"),
                "app13",
                13
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question13"),
                "app13",
                13
            );

            addCorrectAnswerQuestion13();
        }
    } else {
        highlightUnselectedBlocks(1, 13, numbers13);
    }
}

// 14 QUESTION

let numbers14 = {
    firstNumber: "",
    secondNumber: "",
};

gettingDataFromFields(2, [8, 27], 14, numbers14);

function question14() {
    if (numbers14.firstNumber != "" && numbers14.secondNumber != "") {
        succerrorAndCreateMiniIcon(2, 14, numbers14);

        // выносим общий статус к номеру вопроса

        if (
            numbers14.firstNumber === "right" &&
            numbers14.secondNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question14"),
                "app14",
                14
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question14"),
                "app14",
                14
            );

            addCorrectAnswerQuestion14();
        }
    } else {
        highlightUnselectedBlocks(2, 14, numbers14);
    }
}

// 15 QUESTION

let numbers15 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

gettingDataFromFields(3, [20, 77, 15], 15, numbers15);

function question15() {
    if (
        numbers15.firstNumber != "" &&
        numbers15.secondNumber != "" &&
        numbers15.thirdNumber != ""
    ) {
        succerrorAndCreateMiniIcon(3, 15, numbers15);

        // выносим общий статус к номеру вопроса

        if (
            numbers15.firstNumber === "right" &&
            numbers15.secondNumber === "right" &&
            numbers15.thirdNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question15"),
                "app15",
                15
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question15"),
                "app15",
                15
            );

            addCorrectAnswerQuestion15();
        }
    } else {
        highlightUnselectedBlocks(3, 15, numbers15);
    }
}

// 16 QUESTION

let numbers16 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

gettingDataFromFields(3, ["-1.45", "-0.7", "0.8"], 16, numbers16);

function question16() {
    if (
        numbers16.firstNumber != "" &&
        numbers16.secondNumber != "" &&
        numbers16.thirdNumber != ""
    ) {
        // succerrorAndCreateMiniIcon(3, 16, numbers16);

        succerror(
            document.getElementById("firstNumber16"),
            numbers16.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondNumber16"),
            numbers16.secondNumber === "wrong"
        );

        succerror(
            document.getElementById("thirdNumber16"),
            numbers16.thirdNumber === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers16.firstNumber === "right" &&
            numbers16.secondNumber === "right" &&
            numbers16.thirdNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question16"),
                "app16",
                16
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question16"),
                "app16",
                16
            );

            addCorrectAnswerQuestion16();
        }
    } else {
        highlightUnselectedBlocks(3, 16, numbers16);
    }
}

// 17 QUESTION

let selectBtn17 = "",
    nameSelectedBtn17 = "";

document.getElementById("firstBtn17").onclick = function () {
    selectBtn17 = "right";
    nameSelectedBtn17 = "firstBtn17";

    commonForSelectBtn("firstBtn17");
    commonForNoselectedBtn(["secondBtn17"]);
};

document.getElementById("secondBtn17").onclick = function () {
    selectBtn17 = "wrong";
    nameSelectedBtn17 = "secondBtn17";

    commonForSelectBtn("secondBtn17");
    commonForNoselectedBtn(["firstBtn17"]);
};

function question17() {
    if (selectBtn17 !== "") {
        succerror(
            document.getElementById(nameSelectedBtn17),
            selectBtn17 === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (selectBtn17 === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question17"),
                "app17",
                17
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question17"),
                "app17",
                17
            );

            addCorrectAnswerQuestion17();
        }
    } else {
        document.getElementById("firstBtn17").style.border =
            "2px solid #FFB47D";
        document.getElementById("secondBtn17").style.border =
            "2px solid #FFB47D";
    }
}

// 18 QUESTION

let numbers18 = {
    firstNumber: "",
};

gettingDataFromFields(1, [62], 18, numbers18);

function question18() {
    if (numbers18.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 18, numbers18);

        // выносим общий статус к номеру вопроса

        if (numbers18.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question18"),
                "app18",
                18
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question18"),
                "app18",
                18
            );

            addCorrectAnswerQuestion18();
        }
    } else {
        highlightUnselectedBlocks(1, 18, numbers18);
    }
}

// 19 QUESTION

let numbers19 = {
    firstNumber: "",
};

gettingDataFromFields(1, [48], 19, numbers19);

function question19() {
    if (numbers19.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 19, numbers19);

        // выносим общий статус к номеру вопроса

        if (numbers19.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question19"),
                "app19",
                19
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question19"),
                "app19",
                19
            );

            addCorrectAnswerQuestion19();
        }
    } else {
        highlightUnselectedBlocks(1, 19, numbers19);
    }
}

// 20 QUESTION

let numbers20 = {
    firstNumber: "",
};

gettingDataFromFields(1, ["5x(-3)+4"], 20, numbers20);

function question20() {
    if (numbers20.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 20, numbers20);

        // выносим общий статус к номеру вопроса

        if (numbers20.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question20"),
                "app20",
                20
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question20"),
                "app20",
                20
            );

            addCorrectAnswerQuestion20();
        }
    } else {
        highlightUnselectedBlocks(1, 20, numbers20);
    }
}

// 21 QUESTION

let numbers21 = {
    firstNumber: "",
    secondNumber: "",
};

gettingDataFromFields(2, ["8/27", "1/32"], 21, numbers21);

function question21() {
    if (numbers21.firstNumber != "" && numbers21.secondNumber != "") {
        succerrorAndCreateMiniIcon(2, 21, numbers21);

        // выносим общий статус к номеру вопроса

        if (
            numbers21.firstNumber === "right" &&
            numbers21.secondNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question21"),
                "app21",
                21
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question21"),
                "app21",
                21
            );

            addCorrectAnswerQuestion21();
        }
    } else {
        highlightUnselectedBlocks(2, 21, numbers21);
    }
}

// 22 QUESTION

let numbers22 = {
    firstNumber: "",
};

gettingDataFromFields(1, [8], 22, numbers22);

function question22() {
    if (numbers22.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 22, numbers22);

        // выносим общий статус к номеру вопроса

        if (numbers22.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question22"),
                "app22",
                22
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question22"),
                "app22",
                22
            );

            addCorrectAnswerQuestion22();
        }
    } else {
        highlightUnselectedBlocks(1, 22, numbers22);
    }
}

// 23 QUESTION

let selectedButton23 = {
    firstBtn23: "",
    secondBtn23: "",
    thirdBtn23: "",
    fourthBtn23: "",
    fifthBtn23: "",
};

document.getElementById("firstBtn23").onclick = function () {
    commonForSelectBtn("firstBtn23");

    selectedButton23.firstBtn23 = "right";
};

document.getElementById("secondBtn23").onclick = function () {
    commonForSelectBtn("secondBtn23");

    selectedButton23.secondBtn23 = "right";
};

document.getElementById("thirdBtn23").onclick = function () {
    commonForSelectBtn("thirdBtn23");

    selectedButton23.thirdBtn23 = "right";
};

document.getElementById("fourthBtn23").onclick = function () {
    commonForSelectBtn("fourthBtn23");

    selectedButton23.fourthBtn23 = "right";
};

document.getElementById("fifthBtn23").onclick = function () {
    commonForSelectBtn("fifthBtn23");

    selectedButton23.fifthBtn23 = "right";
};

function question23() {
    let selectedButtons = [],
        namesSelectedButtons = [],
        isTheArrayEmpty = 0;

    for (let key in selectedButton23) {
        if (selectedButton23[key] !== "") {
            selectedButtons.push(selectedButton23[key]);
            namesSelectedButtons.push(key);
            isTheArrayEmpty++;
        }
    }

    if (isTheArrayEmpty > 0) {
        namesSelectedButtons.map((el, index) => {
            succerror(
                document.getElementById(el),
                selectedButtons[index] === "wrong"
            );
        });

        // выносим общий статус к номеру вопроса

        if (
            selectedButton23.firstBtn23 !== "" &&
            selectedButton23.secondBtn23 !== "" &&
            selectedButton23.thirdBtn23 !== "" &&
            selectedButton23.fourthBtn23 !== "" &&
            selectedButton23.fifthBtn23 !== ""
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question23"),
                "app23",
                23
            );
        } else {
            // подсветим невыбранные блоки
            if (selectedButton23.firstBtn23 === "") {
                document.getElementById("firstBtn23").style.border =
                    "2px solid #FFB47D";
            }

            if (selectedButton23.secondBtn23 === "") {
                document.getElementById("secondBtn23").style.border =
                    "2px solid #FFB47D";
            }

            if (selectedButton23.thirdBtn23 === "") {
                document.getElementById("thirdBtn23").style.border =
                    "2px solid #FFB47D";
            }

            if (selectedButton23.fourthBtn23 === "") {
                document.getElementById("fourthBtn23").style.border =
                    "2px solid #FFB47D";
            }

            if (selectedButton23.fifthBtn23 === "") {
                document.getElementById("fifthBtn23").style.border =
                    "2px solid #FFB47D";
            }

            // придадим статуса
            addImage(
                "failure",
                document.getElementsByClassName("question23"),
                "app23",
                23
            );

            addCorrectAnswerQuestion23();
        }
    } else {
        document.getElementById("firstBtn23").style.border =
            "2px solid #FFB47D";
        document.getElementById("secondBtn23").style.border =
            "2px solid #FFB47D";
        document.getElementById("thirdBtn23").style.border =
            "2px solid #FFB47D";
        document.getElementById("fourthBtn23").style.border =
            "2px solid #FFB47D";
        document.getElementById("fifthBtn23").style.border =
            "2px solid #FFB47D";
    }
}

// 24 QUESTION

let numbers24 = {
    firstNumber: "",
    secondNumber: "",
};

gettingDataFromFields(2, ["1/8", "6/4"], 24, numbers24);

function question24() {
    if (numbers24.firstNumber != "" && numbers24.secondNumber != "") {
        succerrorAndCreateMiniIcon(2, 24, numbers24);

        // выносим общий статус к номеру вопроса

        if (
            numbers24.firstNumber === "right" &&
            numbers24.secondNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question24"),
                "app24",
                24
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question24"),
                "app24",
                24
            );

            addCorrectAnswerQuestion24();
        }
    } else {
        highlightUnselectedBlocks(2, 24, numbers24);
    }
}

// 25 QUESTION

let numbers25 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

gettingDataFromFields(3, ["-3", "5", "8"], 25, numbers25);

function question25() {
    if (
        numbers25.firstNumber != "" &&
        numbers25.secondNumber != "" &&
        numbers25.thirdNumber != ""
    ) {
        // succerrorAndCreateMiniIcon(3, 25, numbers25);

        succerror(
            document.getElementById("firstNumber25"),
            numbers25.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondNumber25"),
            numbers25.secondNumber === "wrong"
        );

        succerror(
            document.getElementById("thirdNumber25"),
            numbers25.thirdNumber === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers25.firstNumber === "right" &&
            numbers25.secondNumber === "right" &&
            numbers25.thirdNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question25"),
                "app25",
                25
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question25"),
                "app25",
                25
            );

            addCorrectAnswerQuestion25();
        }
    } else {
        highlightUnselectedBlocks(3, 25, numbers25);
    }
}

// RESULT

document.getElementById("submit").onclick = function () {
    question1();
    question2();
    question3();
    question4();
    question5();
    question6();
    question7();
    question8();
    question9();
    question10();
    question11();
    question12();
    question13();
    question14();
    question15();
    question16();
    question17();
    question18();
    question19();
    question20();
    question21();
    question22();
    question23();
    question24();
    question25();
};
