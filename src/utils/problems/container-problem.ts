import assert from "assert";
import type { Problem } from "../types/problems";

const starterCodeContainerWithMostWater = `
function maxArea(height) {
  // Write your code here
};
`;

const handlerContainerWithMostWater = (fn: (height: number[]) => number) => {
  try {
    const heights = [
      [1, 8, 6, 2, 5, 4, 8, 3, 7],
      [1, 1],
    ];
    const answers = [49, 1];

    for (let i = 0; i < heights.length; i++) {
      const result = fn(heights[i]);
      assert.strictEqual(result, answers[i]);
    }
    return true;
  } catch (error: unknown) {
    console.log("Container With Most Water handler function error");
    throw new Error((error as Error).message);
  }
};

export const containerWithMostWater: Problem = {
  id: "container-with-most-water",
  title: "11. Container With Most Water",
  problemStatement: `
    <p class='mt-3'>
      You are given an integer array <code>height</code> of length <code>n</code>. 
      There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i</code>th line are 
      at <code>(i, 0)</code> and <code>(i, height[i])</code>.
    </p>
    <p class='mt-3'>
      Find two lines that together with the x-axis form a container, such that the container contains the most water.
    </p>
    <p class='mt-3'>
      Return the maximum amount of water a container can store.
    </p>
    <p class='mt-3'>
      <strong>Note:</strong> You may not slant the container.
    </p>
  `,
  examples: [
    {
      id: 1,
      input: "height = [1,8,6,2,5,4,8,3,7]",
      output: "49",
      explanation: "The vertical lines at indices 1 and 8 form the container with the most water, storing 49 units of water.",
    },
    {
      id: 2,
      input: "height = [1,1]",
      output: "1",
      explanation: "The only possible container is formed by the two lines, storing 1 unit of water.",
    },
  ],
  constraints: `
    <li class='mt-2'>
      <code>2 ≤ height.length ≤ 10<sup>5</sup></code>
    </li> 
    <li class='mt-2'>
      <code>0 ≤ height[i] ≤ 10<sup>4</sup></code>
    </li>
  `,
  handlerFunction: handlerContainerWithMostWater,
  starterCode: starterCodeContainerWithMostWater,
  order: 11,
  starterFunctionName: "function maxArea(",
  name: "Container With Most Water",
};
