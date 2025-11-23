    $(document).ready(function(){
        /*permet de voter avec les flèches*/
        $(document).on('keydown', function(e){  
            if ((e.key)==="ArrowLeft"){         /*verifie si la touche est la gauche*/
                $('.gauche').addClass("appuyer");   /*la touche est enfoncéen, on aggrandit comme le active*/
                $(document).on('keyup', function(e){    
                    if (e.key==="ArrowLeft"){       /* la touche est relachée, on peut enlever l'effet pour matérialiser la confirmation du vote*/
                        $('.gauche').click();
                    $('.gauche').removeClass('appuyer')}});;
            }
            else if (e.key==="ArrowRight"){  /*même chose à droite*/
                $('.droite').addClass("appuyer");
                $(document).on('keyup', function(e){
                    if (e.key==="ArrowRight"){
                        $('.droite').click();
                        $('.droite').removeClass('appuyer')}});
            }
    })});