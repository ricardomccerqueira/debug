Debug
=====

Small extra power to javascript debugging.

example:

	function simpleMath(a,b){
		return {result:a + b,a:a,b:b};
	}

	function simpleMath2(a,b){
		return  a * b;
	}

	function exampleLog(){
		console.log(simpleMath(1,2), simpleMath2(2,2));
	}

	function exampleDebug(){
		debug.log(simpleMath(1,2), simpleMath2(2,2));
	}
	
	function callExampleLog(){
		exampleLog();
	}
	
	function callExampleDebug(){
		exampleDebug();
	}


	exampleLog(); 
		//outputs: Object {result: 3, a: 1, b: 2} 4
	
	
	exampleDebug(); 
		//outputs: Wed Nov 13 2013 01:00:40 [Object, 4]
 
	
			
	callExampleLog(); 
		//outputs: Object {result: 3, a: 1, b: 2} 4
	
	callExampleDebug();
		//outputs: 	callExampleDebug() called exampleDebug() called debug.log()
					Wed Nov 13 2013 01:13:50 [Object, 4]


	
			
			
BROWSER ISSUES
=====

**debug** is still on early development, 
so far it's tested on the latest chrome, 
and it's known that older browsers won't give the information about the caller function

