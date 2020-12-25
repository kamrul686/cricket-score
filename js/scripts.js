
        $("#item_two").click(function () {
            $("#one").css({
                'display':'none'
            });
            $("#two").css({
                'display':'block'
            });
            $("#item_two").css({
                'background-color':'#1E1E1E',
                'color'           : 'white'
            });
            $("#item_one").css({
                'background-color':'white',
                'color'            :'black'
            });
        });

        $("#item_one").click(function () {
            $("#two").css({
                'display':'none'
            });
            $("#one").css({
                'display':'block'
            });
            $("#item_two").css({
                'background-color':'white',
                'color'            :'black'
            });
            $("#item_one").css({
                'background-color':'#1E1E1E',
                'color'           : 'white'
            });

        });
