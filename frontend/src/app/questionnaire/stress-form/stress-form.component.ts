import { NgIf, NgSwitchCase, NgSwitch, NgForOf, ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-stress-form', // Replace with your actual component selector
  templateUrl: './stress-form.component.html', // Replace with your actual template URL
  styleUrls: ['./stress-form.component.css'], // Replace with your actual styles URL
  imports: [ReactiveFormsModule, NgIf, NgSwitchCase, NgSwitch, NgForOf]
})
export class StressFormComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
  stressForm: FormGroup;
  intro = "";
  conclusion = "continue";
  showConclusion = false;
  // scrollContainer: any
  questions = [
    { 
      label: "בחודש האחרון, באיזו מידה היית 'מעוצבנ.ת' בגלל משהו שקרה באופן בלתי צפוי", 
      controlName: "q1", 
      type: "radio", 
      options: [
        { label: "כמעט אף פעם", value: 0},
        { label: "לעיתים רחוקות", value: 1 },
        { label: "לפעמים", value: 2 },
        { label: "לעיתים קרובות", value: 3 },
        { label: "לעיתים קרובות מאד", value: 4}
      ]   
    },
    { 
      label: "בחודש האחרון, באיזו מידה הרגשת חוסר שליטה בדברים החשובים בחייך", 
      controlName: "q2", 
      type: "radio", 
      options: [
        { label: "כמעט אף פעם", value: 0},
        { label: "לעיתים רחוקות", value: 1 },
        { label: "לפעמים", value: 2 },
        { label: "לעיתים קרובות", value: 3 },
        { label: "לעיתים קרובות מאד", value: 4}
      ]   
    },
    { 
      label:"בחודש האחרון, באיזו מידה הרגשת עצבני.ת, לחוצ.ה", 
      controlName: "q3", 
      type: "radio", 
      options: [
        { label: "כמעט אף פעם", value: 0},
        { label: "לעיתים רחוקות", value: 1 },
        { label: "לפעמים", value: 2 },
        { label: "לעיתים קרובות", value: 3 },
        { label: "לעיתים קרובות מאד", value: 4}
      ]
    },
    { 
      label: "בחודש האחרון, באיזו מידה טיפלת בהצלחה במטרדים מרגיזים", 
      controlName: "q4", 
      type: "radio", 
      options: [
        { label: "כמעט אף פעם", value: 4},
        { label: "לעיתים רחוקות", value: 3 },
        { label: "לפעמים", value: 2 },
        { label: "לעיתים קרובות", value: 1 },
        { label: "לעיתים קרובות מאד", value: 0}
      ]
    },
    { 
      label: "בחודש האחרון, באיזו מידה הרגשת שאת.ה מתמודד.ת ביעילות עם שינויים חשובים בחייך", 
      controlName: "q5", 
      type: "radio", 
      options: [
        { label: "כמעט אף פעם", value: 4},
        { label: "לעיתים רחוקות", value: 3 },
        { label: "לפעמים", value: 2 },
        { label: "לעיתים קרובות", value: 1 },
        { label: "לעיתים קרובות מאד", value: 0}
      ]
    },
    {
      statement: "true",
      label: "בהחלט תקופה מאתגרת, חשוב מאד שאת.ה משתפ.ת ומקדיש.ה זמן לעצמך"
    },
    { 
      label: "בחודש האחרון, באיזו מידה הרגשת בטחון ביכולתך לטפל בבעיותיך האישיות", 
      controlName: "q6", 
      type: "radio", 
      options: [
        { label: "כמעט אף פעם", value: 4},
        { label: "לעיתים רחוקות", value: 3 },
        { label: "לפעמים", value: 2 },
        { label: "לעיתים קרובות", value: 1 },
        { label: "לעיתים קרובות מאד", value: 0}
      ] 
    },
    { 
      label: "בחודש האחרון, באיזו מידה הרגשת שהדברים מתפתחים בהתאם לרצונך", 
      controlName: "q7", 
      type: "radio", 
      options: [
        { label: "כמעט אף פעם", value: 4},
        { label: "לעיתים רחוקות", value: 3 },
        { label: "לפעמים", value: 2 },
        { label: "לעיתים קרובות", value: 1 },
        { label: "לעיתים קרובות מאד", value: 0}
      ]   
    },
    { 
      label: "בחודש האחרון, באיזו מידה יכולת להתמודד עם כל הדברים שהיה עליך לעשות", 
      controlName: "q8", 
      type: "radio", 
      options: [
        { label: "כמעט אף פעם", value: 0},
        { label: "לעיתים רחוקות", value: 1 },
        { label: "לפעמים", value: 2 },
        { label: "לעיתים קרובות", value: 3 },
        { label: "לעיתים קרובות מאד", value: 4}
      ] 
    },
    { 
      label: "בחודש האחרון, באיזו מידה יכולת לשלוט בדברים המרגיזים אותך", 
      controlName: "q9", 
      type: "radio", 
      options: [
        { label: "כמעט אף פעם", value: 4},
        { label: "לעיתים רחוקות", value: 3 },
        { label: "לפעמים", value: 2 },
        { label: "לעיתים קרובות", value: 1 },
        { label: "לעיתים קרובות מאד", value: 0}
      ] 
    },
    { 
      label: "בחודש האחרון, באיזו מידה הרגשת שאת.ה שולט.ת במצב", 
      controlName: "q10", 
      type: "radio", 
      options: [
        { label: "כמעט אף פעם", value: 4},
        { label: "לעיתים רחוקות", value: 3 },
        { label: "לפעמים", value: 2 },
        { label: "לעיתים קרובות", value: 1 },
        { label: "לעיתים קרובות מאד", value: 0}
      ] 
    },
    { 
      label: "בחודש האחרון, באיזו מידה התרגזת בגלל אירועים שהיו מחוץ לשליטתך", 
      controlName: "q11", 
      type: "radio", 
      options: [
        { label: "כמעט אף פעם", value: 0},
        { label: "לעיתים רחוקות", value: 1 },
        { label: "לפעמים", value: 2 },
        { label: "לעיתים קרובות", value: 3 },
        { label: "לעיתים קרובות מאד", value: 4}
      ]
    },
    { 
      label: "בחודש האחרון, באיזו מידה הטרידו אותך מחשבות על דברים שהיה עליך להשלים", 
      controlName: "q12", 
      type: "radio", 
      options: [
        { label: "כמעט אף פעם", value: 0},
        { label: "לעיתים רחוקות", value: 1 },
        { label: "לפעמים", value: 2 },
        { label: "לעיתים קרובות", value: 3 },
        { label: "לעיתים קרובות מאד", value: 4}
      ]  
    },
    { 
      label: "בחודש האחרון, באיזו מידה יכולת לשלוט בדרך שבה את/ה מנצל.ת את זמנך", 
      controlName: "q13", 
      type: "radio", 
      options: [
        { label: "כמעט אף פעם", value: 4},
        { label: "לעיתים רחוקות", value: 3 },
        { label: "לפעמים", value: 2 },
        { label: "לעיתים קרובות", value: 1 },
        { label: "לעיתים קרובות מאד", value: 0}
      ]  
    },
    { 
      label: "בחודש האחרון, באיזו מידה הרגשת שהקשיים מצטברים עד כדי כך שלא יכולת להתגבר עליהם", 
      controlName: "q14", 
      type: "radio", 
      options: [
        { label: "כמעט אף פעם", value: 0},
        { label: "לעיתים רחוקות", value: 1 },
        { label: "לפעמים", value: 2 },
        { label: "לעיתים קרובות", value: 3 },
        { label: "לעיתים קרובות מאד", value: 4}
      ]  
    },
  
  ]
  currentQuestionIndex = 0;
  showAnswers = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient, // Inject HttpClient here
    private router: Router,
    private scroller: ViewportScroller
  ) {
    this.stressForm = this.fb.group({});
    this.questions.forEach(question => {
      if(!question.statement){
        console.log("called")
        this.stressForm.addControl(question.controlName!, this.fb.control(''));
      }
    });
  }

  ngAfterViewInit(): void {
  }
  
  ngAfterViewChecked() {
    setTimeout(() => {
      this.scrollToBottom(); // Call scroll after each check
    }, 3000)
    
  }

  ngOnInit() {
    this.showQuestionWithDelay();
  }

  showQuestionWithDelay() {
    if(this.currentQuestionIndex == 5){
      setTimeout(() => {
        this.scrollToBottom();
        this.moveToNextQuestion();
      }, 500); // Adjust delay time (in milliseconds) as needed
    }
    else{
      this.showAnswers = false; // Hide options initially
      setTimeout(() => {
        this.showAnswers = true; // Show options after delay
        this.scrollToBottom();
      }, 1000); // Adjust delay time (in milliseconds) as needed
    }
  }

  onAnswerSelected() {
    const controlName = this.questions[this.currentQuestionIndex].controlName;
    const value = this.stressForm.get(controlName!)!.value;

    // Automatically move to the next question if an answer is selected
    if (value !== undefined) {
      this.moveToNextQuestion();
    }
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
    // if(this.currentQuestionIndex == 6){
    //   setTimeout(() => {
    //   }, 500);
    // }
    if (this.currentQuestionIndex < this.questions.length) {
      this.showQuestionWithDelay(); // Show next question with a delay for answer options
    } else {
      this.onSubmit(); // Automatically submit when the last question is answered
    }
  }

  private scrollToBottom(): void {
    // setTimeout(() =>{
      this.scrollContainer.nativeElement.scrollTop = 2 * this.scrollContainer.nativeElement.scrollHeight;
    // },500)
  }
  getValueName(
    controlName: string,
    value: number
    // question: {label: string, controlName: string, type: string, options: []}
  ){
    const options = [
      { label: "כמעט אף פעם", value: 0},
      { label: "לעיתים רחוקות", value: 1 },
      { label: "לפעמים", value: 2 },
      { label: "לעיתים קרובות", value: 3 },
      { label: "לעיתים קרובות מאד", value: 4}
    ]
    const inverse_options = [
      { label: "כמעט אף פעם", value: 4},
      { label: "לעיתים רחוקות", value: 3 },
      { label: "לפעמים", value: 2 },
      { label: "לעיתים קרובות", value: 1 },
      { label: "לעיתים קרובות מאד", value: 0}
    ]
    // console.log(controlName, value)
    // return options[1].label
    if (controlName == "q4" || controlName == "q5" || controlName == "q6" || controlName == "q7" || controlName == "q9" || controlName == "q10" || controlName == "q13"){
      console.log("detected", value)
      return inverse_options[4 - value].label;
    }
    else{
      return options[value].label;
    }
    
      
  }
          
  onSubmit() {
    console.log("Form submitted:", this.stressForm.value);
    setTimeout(() => {
      this.showConclusion = true;
    }, 1000)
  // }, 1)
    const user = sessionStorage['user'];
    this.http.post('https://tova-demo.onrender.com/api/modify-user', [user, "stress_results", this.stressForm.value])
    .subscribe(res => {
      // const response = JSON.stringify(res);
      console.log("response", res);
    });

    setTimeout(() => {
      this.router.navigate(['/conclusion'])
    }, 3000)
  }
}