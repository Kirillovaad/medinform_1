let infoPazient=["Иванов", "Иван", "Иванович", 15, "мая",1974, "м"];
    console.log(infoPazient);
    console.log(infoPazient[0]);
    console.log(infoPazient[5]);
    /*
    let lastname;
    lastname=prompt("Введите имя пациента", lastname);
    console.log(lastname);
    infoPazient[0]=lastname;
    console.log(infoPazient);
    */
    let person = {
        "SNILS 1": ["Иванов", "Иван", "Иванович", 15, "мая", 1974, "м", "исполнено"],
        "SNILS 2": ["Сидоров", "Сидор", "Сидорович", 20, "мая", 1980, "м", "медотвод"],
        "SNILS 3": ["Петрова", "Мария", "Ивановна", 1, "июня", 1975, "ж", "назначено"]};
    console.log(person);
    /* SNILS4="SNILS 4"
    let lastname;
    lastname=prompt("Введите фамилию пациента", lastname);
    //console.log(lastname); 
    infoPazient[0]=lastname;
    console.log(infoPazient);
    let firstname;
    firstname= prompt("Введите имя пациента", firstname);
    //console.log(lastname); 
    infoPazient[1]=firstname;
    console.log(infoPazient);
    let middlename;
    middlename=prompt("Введите отчество пациент", middlename);
    //console.log(lastname); 
    infoPazient[2]=middlename;
    console.log(infoPazient);
    let date;
    date=prompt ("Введите дату рождения пациента", date);
    infoPazient[3]=date;
    console.log(infoPazient);
    person.SNILS4= infoPazient;
    console.log(person); */
    //Получаем информацию о пациенте по СНИЛС 
    let SNILS;
    var FirstFunction = function (person, SNILS) {
    SNILS = prompt("Введите SNILS пациента", SNILS);
    infoname = person[SNILS];
     //console.log(infoname);
    alert("Информация о пациенте" + infoname);
    statusPriv = person[SNILS][7];
    console.log(statusPriv);
    };
    /*let phase;
    phase=prompt("Введите действие или медотвод или назначено или исполнено ", phase);
    infoname.push(phase);
    console.log(infoname);
    person[SNILS]=infoname;
    console.log(person); */
    //Извлекаем информацию о текущем статусе привики
    var SecondFunction = function (statusPriv, infoname) {
    //statusPriv = person[SNILS][7];
    console.log(statusPriv);
    //Проверяем возможность изменения статуса 
    if (statusPriv === "исполнено") {
        alert("Отказано в прививке пациенту" + infoname);
    } else if (statusPriv === "медотвод") {
        alert("Отказано в прививке пациенту" + infoname);
    } else {
        alert("Исполнить прививку пациенту" + infoname);
    }
}
    ForSecond = FirstFunction(person, SNILS);
    SecondFunction(statusPriv, infoname);

    //Предлагаем закончить или продожить работу в этом окне
    while  (confirm("Продолжить проверку прививочного статуса?")) {
        ForSecond = FirstFunction(person, SNILS);
        SecondFunction(statusPriv, infoname);
    }
        console.log("Сеанс проверки прививочного статуса закочен");
    