/*Реализовать рекурсивную функцию которая возводит число в степень.
Число которое нужно возвести в степень передается как первый аргумент в функцию
Степень передается как второй аргумент в функцию
pow(num, degree)*/

function pow(num, degree) {
    return (degree === 1) ? num : (num * pow(num, degree - 1));
  }

  console.log(pow(2, 1)); 
  console.log(pow(3, 3)); 
  console.log(pow(5, 3)); 

