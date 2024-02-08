let xAxis = prompt("Введіть значення вісі абсцис:");
let yAxis = prompt("Введіть значення вісі ординат:");

function quadrantDefinition(xAxis, yAxis) {
  if (xAxis > 0 && yAxis > 0) {
    console.log(
      "Точка знаходиться в першому квадранті -",
      `(${xAxis}; ${yAxis})`
    );
  } else if (xAxis < 0 && yAxis > 0) {
    console.log(
      "Точка знаходиться в другому квадранті -",
      `(${xAxis}; ${yAxis})`
    );
  } else if (xAxis < 0 && yAxis < 0) {
    console.log(
      "Точка знаходиться в третьому квадранті -",
      `(${xAxis}; ${yAxis})`
    );
  } else if (xAxis > 0 && yAxis < 0) {
    console.log(
      "Точка знаходиться в четвертому квадранті -",
      `(${xAxis}; ${yAxis})`
    );
  } else if (xAxis === 0 && yAxis !== 0) {
    console.log("Точка лежить на вісі Y -", `(${xAxis}; ${yAxis})`);
  } else if (xAxis !== 0 && yAxis === 0) {
    console.log("Точка лежить на вісі X -", `(${xAxis}; ${yAxis})`);
  } else if (xAxis === 0 && yAxis === 0) {
    console.log(
      "Точка знаходиться на початку координат -",
      `(${xAxis}; ${yAxis})`
    );
  }
}

if (String(xAxis).length > 0 && String(yAxis).length > 0) {
  if (isNaN(parseFloat(xAxis)) || isNaN(parseFloat(yAxis))) {
    alert("Ви ввели некоректний тип даних");
  } else if (xAxis == 0 || yAxis == 0) {
    quadrantDefinition(parseFloat(xAxis), parseFloat(yAxis));
  } else if (
    xAxis > Number.MAX_SAFE_INTEGER ||
    yAxis > Number.MAX_SAFE_INTEGER ||
    xAxis < Number.MIN_SAFE_INTEGER ||
    yAxis < Number.MIN_SAFE_INTEGER
  ) {
    alert("Перевищення безпечного цілочисельного значення мови JavaScript!");
    location.reload();
  } else if (!Number(xAxis) || !Number(yAxis)) {
    let question = prompt(
      "Ви ввели зайві символи після числа, чи бажаєте ви обробити інформацію без цих символів? (введіть yes || так)"
    );
    if (question.toLowerCase() === "так" || question.toLowerCase() === "yes") {
      quadrantDefinition(parseFloat(xAxis), parseFloat(yAxis));
    } else {
      alert("Перезапускаємо програму...");
      location.reload();
    }
  } else {
    quadrantDefinition(parseFloat(xAxis), parseFloat(yAxis));
  }
} else {
  alert("Ви не ввели значення");
}
