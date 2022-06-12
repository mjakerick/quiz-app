const quizData = [
  {
    question: 'What year was JavaScript created?',
    a: '1215',
    b: '1990',
    c: '1995',
    d: '2001',
    correct: 'c'
  }, {
    question: 'What year was I born?',
    a: '1215',
    b: '1990',
    c: '1995',
    d: '2001',
    correct: 'c'
  }, {
    question: 'Which of the following is a front-end programming language?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    e: 'All of the above',
    correct: 'd'
  }, {
    question: 'Which of these methods can be used to reduce website page loading times?',
    a: 'Reduce the size of images',
    b: 'HTTP compression',
    c: 'Minimize redirection and caching',
    d: 'Remove unnecessary widgets',
    e: 'All of the above',
    correct: 'e'
  }, {
    question: 'What is the main use of Cross-origin Resource Sharing(CORS)?',
    a: 'It decreases the loading times for the website',
    b: 'It allows a variety of resources to be requested at a time from a domain that is outside the current request domain',
    c: 'It tests for web application vulnerabilities',
    d: 'It prevents injection attacks that attempt to use application code to access or corrupt database content',
    correct: 'b'
  }, {
    question: 'What is Responsive Web Design(RWD)?',
    a: 'It automatically adjusts the structure of the web page based on the device it is viewed on to provide optimal viewing experience',
    b: 'It implements a messaging feature to websites for the support team to respond promptly to clients',
    c: 'It incorporates Artificial Intelligence(AI) to websites to respond to user interactions',
    d: 'It is a method for creating websites using drag and drop design software',
    correct: 'a'
  }
];

const questionElement = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const submitButton = document.getElementById('submit');

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  // check if there is an answer option for e. If not, set display = none
  if(typeof(currentQuizData.e) != 'undefined' && currentQuizData.e != null){
    document.getElementById('e').style.display = '';
    e_text.innerText = currentQuizData.e;
  } else{
    document.getElementById('e').style.display = 'none';
  };
};

submitButton.addEventListener('click', () => {
  currentQuiz++;

  loadQuiz();
});
