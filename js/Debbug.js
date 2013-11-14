var console = (function(){
    var active = true; // false to disable all debbug calls
    var native = window.console;

    function getStackTrace(date){
      var obj = {};
      Error.captureStackTrace(obj, getStackTrace);
      return obj.stack.toString().replace('Error',date);
    };

    function log(){
        if(active){
            var date = new Date().toString().split(' ');
                date.length = 5;
                date = '\n'+date.toString().split(',').join(' ');

            native.log(getStackTrace(date));

            var items = [];

            for (var i=0; i < arguments.length; i++) {
                items.push(arguments[i]);
            }

            native.log('\n log:',items,'\n\n');
        }
    };

    function stack(){
         native.log(getStackTrace());
    };

    var public = {
        log:log,
        stack:stack,
        disable:function(){
            active = false;
        },
        enable:function(){
            active = true;
        }
    }

    return public;
})();