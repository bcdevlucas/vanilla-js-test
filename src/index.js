import "./styles.css";
import {
  question1,
  question2,
  question3,
  question4,
  question5
} from "./questions";

const doc = document;
/**
 * Please answer questions in the questions folder, that way
 * we keep everything nice and clean in separate scopes!
 */
doc.getElementById("app").innerHTML = `
<h3>Questions!</h3>
<p>Please answer questions in the questions folder, that way
we keep everything nice and clean in separate scopes!</p>
<p>Don't forget to return the result for each question function
so the answer appears in plaintext below.</p>
<div>
  <h3>Test answers:</h3>
  <div id="question-1">
    <h4>How can we check if an object is an array or not?</h4>
    <div class="answer">
      ${question1()}
    </div>
  </div>
  <div id="question-2">
    <h4>Explain what a callback function is and provide a simple example.</h4>
    <div class="answer">
      ${question2()}
    </div>
  </div>
  <div id="question-3">
    <h4>Implement enqueue and dequeue using only two stacks.</h4>
    <div class="answer">
      ${question3()}
    </div>
  </div>
  <div id="question-4">
    <h4>How would you use a closure to create a private 'counter'?</h4>
    <div class="answer">
      ${question4()}
    </div>
  </div>
  <div id="question-5">
    <h4>Demonstrate the difference between 'call' and 'apply'.</h4>
    <div class="answer">
      ${question5()}
    </div>
  </div>
</div>
`;
