import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  conor_questions: { [key: string]: string } = {
     
    "q1":"חשב.י על החודש האחרון, עד כמה נכון לגביך ההיגד: אני מצליח.ה להסתגל לשינויים",
    "q2":"חשב.י על החודש האחרון, עד כמה נכון לגביך ההיגד: אני יכול.ה להתמודד עם כל דבר",
    "q3":"חשב.י על החודש האחרון, עד כמה נכון לגביך ההיגד: אני רואה את הצד המשעשע בדברים",
    "q4":"חשב.י על החודש האחרון, עד כמה נכון לגביך ההיגד: התמודדות עם לחץ מחזקת אותי",
    "q5":"חשב.י על החודש האחרון, עד כמה נכון לגביך  ההיגד: אני נוטה להתאושש בקלות ממחלה \n או קושי",
    "q6":"חשב.י על החודש האחרון, עד כמה נכון לגביך ההיגד: תחת לחץ, אני מתמקד.ת וחושב בבהירות",
    "q7":" חשב.י על החודש האחרון, עד כמה נכון לגביך ההיגד: אני יכול.ה להשיג את המטרות שלי \n למרות הקשיים",
    "q8":"חשב.י על החודש האחרון, עד כמה נכון לגביך ההיגד: אני לא מתייאש.ת בקלות מכישלונות",
    "q9":"חשב.י על החודש האחרון, עד כמה נכון לגביך ההיגד: אני חושב.ת על עצמי כעל אדם חזק",
    "q10":"חשב.י על החודש האחרון, עד כמה נכון לגביך ההיגד אני: יכול.ה להתמודד עם רגשות לא נעימים"

}
  conor_options: { [key: string]: string} = {
    "0":"לא נכון בכלל",
    "1":"נכון לעיתים רחוקות",
    "2":"לפעמים נכון",
    "3":"נכון לעיתים קרובות",
    "4":"נכון כמעט כל הזמן"
}

stress_questions: { [key: string]: string } = {
  "q1": "בחודש האחרון, באיזו מידה היית 'מעוצבנ.ת' בגלל משהו שקרה באופן בלתי צפוי",
  "q2": "בחודש האחרון, באיזו מידה הרגשת חוסר שליטה בדברים החשובים בחייך",
  "q3": "בחודש האחרון, באיזו מידה הרגשת עצבני.ת 'לחוצ.ה",
  "q4": "בחודש האחרון, באיזו מידה טיפלת בהצלחה במטרדים מרגיזים",
  "q5": "בחודש האחרון, באיזו מידה הרגשת שאת.ה מתמודד.ת ביעילות עם שינויים חשובים בחייך",
  "q6": "בחודש האחרון, באיזו מידה הרגשת בטחון ביכולתך לטפל בבעיותיך האישיות",
  "q7": "בחודש האחרון, באיזו מידה הרגשת שהדברים מתפתחים בהתאם לרצונך",
  "q8": "בחודש האחרון, באיזו מידה יכולת להתמודד עם כל הדברים שהיה עליך לעשות",
  "q9": "בחודש האחרון, באיזו מידה יכולת לשלוט בדברים המרגיזים אותך",
  "q10": "בחודש האחרון, באיזו מידה הרגשת שאת.ה שולט.ת במצב",
  "q11": "בחודש האחרון, באיזו מידה התרגזת בגלל אירועים שהיו מחוץ לשליטתך",
  "q12": "בחודש האחרון, באיזו מידה הטרידו אותך מחשבות על דברים שהיה עליך להשלים",
  "q13": "בחודש האחרון, באיזו מידה יכולת לשלוט בדרך שבה את/ה מנצל.ת את זמנך",
  "q14": "בחודש האחרון, באיזו מידה הרגשת שהקשיים מצטברים עד כדי כך שלא יכולת להתגבר עליהם"
}

stress_options: { regular: {[key: string]: string,},
flipped: {[key: string]: string} } = {
  "regular": {
      "0":"כמעט אף פעם",
      "1":"לעיתים רחוקות",
      "2":"לפעמים",
      "3":"לעיתים קרובות",
      "4":"לעיתים קרובות מאד"
  },
  "flipped": {
      "4":"כמעט אף פעם",
      "3":"לעיתים רחוקות",
      "2":"לפעמים",
      "1":"לעיתים קרובות",
      "0":"לעיתים קרובות מאד"
  }
}

conclusion_questions:{ [key: string] : string} = {
  "menstrualChanges": "האם שמת לב לשינויים במחזור החודשי שלך בחודשים האחרונים",
  "changesExplained": "תרצי לספר מה השינויים אליהם שמת לב",
  "additional comments":"יש עוד משהו שתרצ.י לשתף"
}
conclusion_options: { [key: string]: string } = {
  "true": "כן",
  "false": "לא",
  "": "–"
}

intro_questions: { [key: string]: string } = {
  "gender": "מגדר",
  "wellbeing": "תרצ.י לשתף איך את מרגישה היום"
  }

intro_options: { [key: string]: string } = {
  "man":"זכר",
  "woman":"נקבה",
  "other":"אחר"
}
  constructor() { }
  calculateConor(data: []): number{
    let total = 0;

    for(let question in data){
      total += data[question]
    }

    return total;
  }
  calculateStress(data: []): number{
    let total = 0;
    const flipped = {
      0:4,
      1:3,
      2:2,
      3:1,
      4:0
    }

    for(let question in data){
      const q_number: number = +question.substring(1)
      if (q_number == 4 || q_number == 5 || q_number == 6 || q_number == 7 || q_number == 9 || q_number == 10 || q_number == 13){
        total += flipped[data[question]]
      }
      else{
        total += data[question]
      }
    }

    return total;
  }
  calculateDanger(conor: number, stress: number): string{
    if(conor > 30 || stress > 45){
      return "yes"
    }
    return "no"
  }
}
