import assert from "assert";

export const createHandler = (testCases: Array<{ input: any[]; output: any }>) => {
	return (fn: any) => {
		try {
			for (let i = 0; i < testCases.length; i++) {
				const result = fn(...testCases[i].input);
				assert.deepStrictEqual(result, testCases[i].output);
			}
			return true;
		} catch (error: any) {
			console.log("Handler function error");
			throw new Error(error);
		}
	};
};
