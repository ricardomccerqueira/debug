Debug
=====

Small extra power to javascript debugging.

It will simply rewrite console to provide a stacktrace and a timestamp to every log.
It also has the ability to remove all logs at once, but use this with caution, as calling an empty function is still calling a function, and uses memory to do so.


	
			
			
BROWSER ISSUES
=====

**debug** is still on early development, 
so far it's tested on the latest chrome, 
and it's a known issue that older browsers won't give the stack trace output

