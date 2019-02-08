"use strict"


/*  As a rule, only the simplest scripts are put into HTML. More complex ones reside in separate files.
The benefit of a separate file is that the browser will download it and store it in its cache.
Other pages that reference the same script will take it from the cache instead of downloading it, so the file is actually downloaded only once.
That reduces traffic and makes pages faster.   */

/*  We recommend putting semicolons between statements even if they are separated by newlines.  */

/*  In most editors, a line of code can be commented out by pressing the Ctrl+/ hotkey for a single-line comment and 
  something like Ctrl+Shift+/ – for multiline comments (select a piece of code and press the hotkey). For Mac, try Cmd instead of Ctrl.*/

/*  Please make sure that "use strict" is at the top of your scripts, otherwise strict mode may not be enabled.  */

/*  There is no directive like "no use strict" that reverts the engine to old behavior.
Once we enter strict mode, there’s no return.*/

/*  The var keyword is almost the same as let. It also declares a variable, but in a slightly different, “old-school” way.  */

/*  What’s interesting – the dollar sign '$' and the underscore '_' can also be used in names. They are regular symbols, just like letters, without any special meaning. */

/*  Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using let. 
 This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.*/

/*  An extra variable is good, not evil.
Modern JavaScript minifiers and browsers optimize code well enough, so it won’t create performance issues. 
Using different variables for different values can even help the engine optimize your code.*/

/*  Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.
The script will never stop with a fatal error (“die”). At worst, we’ll get NaN as the result.*/

/*  In some languages, there is a special “character” type for a single character. For example, in the C language and in Java it is char.
In JavaScript, there is no such type. There’s only one type: string. A string may consist of only one character or many of them.*/

/* Type Conversions  
 * String conversion happens when we need the string form of a value.
 * Numeric conversion happens in mathematical functions and expressions automatically.
 * It happens in logical operations (later we’ll meet condition tests and other similar things) but can also be performed explicitly with a call to Boolean(value).*/

/* Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.  */

/*   We covered 3 browser-specific functions to interact with visitors:
	alert
shows a message.
	prompt
shows a message asking the user to input text. It returns the text or, if CANCEL or Esc is clicked, null.
	confirm
shows a message and waits for the user to press “OK” or “CANCEL”. It returns true for OK and false for CANCEL/Esc.*/

/*	A function should do exactly what is suggested by its name, no more.
Two independent actions usually deserve two functions, even if they are usually called together */

/*  In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter. */

/*  Function declaration & function expression
 * You might wonder, why does Function Expression have a semicolon ; at the end, but Function Declaration does not:*/

/*	Regular values like strings or numbers represent the data.
A function can be perceived as an action.
We can pass it between variables and run when we want.*/

/**/

/**/

/**/

/**/

/**/

