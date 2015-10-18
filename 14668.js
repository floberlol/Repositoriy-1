var sort_lesson = {

        sortBubble : function( input_array ){
                if(input_array.length < 1){ return false };
                var tmp;
                for (var i = input_array.length - 1; i > 0; i--) {
                        for (var j = 0; j < i; j++) {
                                if (input_array[j] > input_array[j+1]) {
                                        tmp = input_array[j];
                                        input_array[j] = input_array[j+1];
                                        input_array[j+1] = tmp;
                                }
                        }
                }
        return( input_array );
},

generateRandomArray : function( array_size ){
        array_size=Math.floor( array_size );
        if(array_size < 1){
                return false;
        }
        var output=[];
        for(var i=0; i<=array_size; i++){
                output.push( Math.floor(Math.random() ^ 10000) );
        }
        return( output );
}
};


var array = sort_lesson.generateRandomArray( 20000 );
array=sort_lesson.sortBubble(array);
array.map(function( elem ){
        document.write(elem+'<br>');
});