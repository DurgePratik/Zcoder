import assert from "assert";
import type { Problem } from "../types/problems";

const starterCodePalindromeNumber = `function isPalindrome(x) {
  // Write your code here
};`;

const handlerPalindromeNumber = (fn: any) => {
  try {
    const numbers = [121, -121, 10, 0];
    const answers = [true, false, false, true];

    for (let i = 0; i < numbers.length; i++) {
      const result = fn(numbers[i]);
      assert.strictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("Palindrome Number handler function error");
    throw new Error(error);
  }
};

export const palindromeNumber: Problem = {
  id: "palindrome-number",
  title: "9. Palindrome Number",
  problemStatement: `<p class='mt-3'>
    Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is a palindrome, and <code>false</code> otherwise.
  </p>
  <p class='mt-3'>
    An integer is a palindrome when it reads the same forward and backward.
  </p>
  <p class='mt-3'>
    For example, <code>121</code> is a palindrome while <code>123</code> is not.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: "x = 121",
      outputText: "true",
      explanation: "121 reads as 121 from left to right and right to left."
    },
    {
      id: 2,
      inputText: "x = -121",
      outputText: "false",
      explanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore, it is not a palindrome."
    },
    {
      id: 3,
      inputText: "x = 10",
      outputText: "false",
      explanation: "Reads as 01 from right to left. Therefore, it is not a palindrome."
    }
  ],
  constraints: `<li class='mt-2'>
    <code>-2<sup>31</sup> ≤ x ≤ 2<sup>31</sup> - 1</code>
  </li>`,
  handlerFunction: handlerPalindromeNumber,
  starterCode: starterCodePalindromeNumber,
  order: 9,
  starterFunctionName: "function isPalindrome("
};
