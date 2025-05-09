import type { Problem } from "../types/problems";

export const validParenthesesHandler = (fn: (s: string) => boolean) => {
  try {
    const tests = ["()", "()[]{}", "(]", "([)]", "{[]}"];
    const answers = [true, true, false, false, true];
    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i]);
      if (result !== answers[i]) return false;
    }
    return true;
  } catch (error) {
    console.error("Error from validParenthesesHandler:", error);
    throw new Error(error as string);
  }
};

const starterCodeValidParenthesesJS = `function validParentheses(s: string): boolean {
  // Write your code here
};`;

export const validParentheses: Problem = {
	id: "valid-parentheses",
	title: "4. Valid Parentheses",
	problemStatement: `<p class='mt-3'>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p> 
  <p class='mt-3'>An input string is valid if:</p> 
  <ul> 
    <li class='mt-2'>Open brackets must be closed by the same type of brackets.</li> 
    <li class='mt-3'>Open brackets must be closed in the correct order.</li>
    <li class="mt-3">Every close bracket has a corresponding open bracket of the same type.</li>
  </ul>`,
	examples: [
		{ id: 0, input: 's = "()"', output: "true" },
		{ id: 1, input: 's = "()[]{}"', output: "true" },
		{ id: 2, input: 's = "(]"', output: "false" },
		{ id: 3, input: 's = "([)]"', output: "false" },
	],
	constraints: `<li class='mt-2'><code>1 <= s.length <= 10<sup>4</sup></code></li>
  <li class='mt-2 '><code>s</code> consists of parentheses only <code class="text-md">'()[]{}'</code>.</li>`,
	handlerFunction: validParenthesesHandler,
	starterCode: starterCodeValidParenthesesJS,
	starterFunctionName: "function validParentheses(",
	order: 4,
	name: ""
};
