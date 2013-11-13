var debug = (function(){
    var active = true; // false to disable all debbug calls

    function log(){
        if(active){
            try{
                console.log(arguments.callee.caller.arguments.callee.caller.name + "() called " + arguments.callee.caller.name + "() called debug.log()");
            }catch(e){

            }
    
            var items = [];
            var date = new Date().toString().split(" ");
                date.length = 5;
                date = date.toString().split(",").join(" ");


            for (var i=0; i < arguments.length; i++) {
                items.push(arguments[i]);
            }

            console.log(date, items);


            console.log('\n');
        }
    };

    var public = {
        log:log
    }

    return public;
})();