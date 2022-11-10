function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let countMarks = marks.length;
    let sumMark = 0;
    for (let i = 0; i < countMarks; ++i) {
      sumMark += marks[i];
    }
    return Math.floor(sumMark / countMarks);
  }