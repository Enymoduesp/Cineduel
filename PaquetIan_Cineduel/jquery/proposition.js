 $(document).ready(function(){
    function update(){
        const value = $('input[type="range"]').val(); /*récupère dans value la valeur de la note*/
        $('#valeurnote').html(value);  /*inscrit la note dans le span*/
        if(value > 6) {     /*change la couleur selon la valeur (>6 = vert, >3 rouge, sinon orange*/   
            $('#valeurnote').css('color', 'green');
        } else if(value >= 3 && value <=6) {
            $('#valeurnote').css('color', 'orange');
        } else {
            $('#valeurnote').css('color', 'red');
        }		
    }

    update();

    $('input[type="range"]').on('input', function(){
        update();}); /*met à jour en temps réel*/

    $('fieldset+fieldset').hide(); /*Cache la deuxieme partie du formulaire au départ*/
             
    $('input[list="top"]').change(function(){       /*cache la deuxième partie tant qu'aucun nom de film n'est rentré*/
    if ($('input[list="top"]').val().trim().length > 0){ 
/*si le champ n'est pas vide (trim() permet de supprimer les espaces, tabulations etc... et .length de récupérer la longueur*/
        $('fieldset+fieldset').show();
    }
    else{
        $('fieldset+fieldset').hide();
    }
    })  
    

    $('label[for="compte"], #compte').hide(); /*cache le champ du compte letterboxd au départ*/

    $('input[name="avoircompte"]').change(function(){
    if($(this).val() === 'oui'){
        $('label[for="compte"], #compte').show(); /*Affiche si "Oui" est sélectionné*/
    } else {
        $('label[for="compte"], #compte').hide(); /*reste cacher sinon*/
    }
    });


    function titrevalide(){
    if ($('#titre').val().trim()===''){ /*si le titre est vide, bordure rouge, sinon verte*/
        ($('#titre').css('border-color', 'red'));
    }
    else{
        ($('#titre').css('border-color', 'limegreen'));
    }};

    titrevalide();

    $('#titre').blur(function(){      /*met à jour quand on quitte le champ*/
        titrevalide();
    });

    $('#titre').focus(function(){
        ($('#titre').css('border-color', ' rgb(255, 230, 160)'));  
    });
    
    function nomvalide(){
    if (/^[A-Z]+$/.test($('#Nom').val().trim())) { /*regex pour verif majuscules uniquement*/
        $('#Nom').css('border-color', 'limegreen');
    } else {
        $('#Nom').css('border-color', 'red');
    }
}
    nomvalide();

    $('#Nom').blur(function(){
        nomvalide();
    });

    $('#Nom').focus(function(){
        ($('#Nom').css('border-color', ' rgb(255, 230, 160)'));  
    });


    function prenomvalide(){
    if ($('#prenom').val().trim()===''){
        ($('#prenom').css('border-color', 'red'));
    }
    else{
        ($('#prenom').css('border-color', 'limegreen'));
    }};

    prenomvalide();

    $('#prenom').blur(function(){
        prenomvalide();
    });

    $('#prenom').focus(function(){
        ($('#prenom').css('border-color', ' rgb(255, 230, 160)'));  
    });

    function agevalide(){
    if ($('#age').val().trim()===''|| $('#age').val().trim()<18 
    || $('#age').val().trim()>120 || !(/^[0-9]{1,3}$/.test($('#age').val())))
    /*verifie age pas vide, age entre 18 et 120 et bien un nombre avec entre 1 et 3 chiffres*/
    { 
        ($('#age').css('border-color', 'red'));
    }
    else{
        ($('#age').css('border-color', 'limegreen'));
    }};

    agevalide();

        $('#age').blur(function(){
        agevalide();
    });

    $('#age').focus(function(){
        ($('#age').css('border-color', ' rgb(255, 230, 160)'));  
    });

    function emailvalide(){
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($('#email').val().trim())) { /*regex pour verif email*/
        $('#email').css('border-color', 'limegreen');
    } else {
        $('#email').css('border-color', 'red');
    }
}
    emailvalide();

    $('#email').blur(function(){
        emailvalide();
    });

    $('#email').focus(function(){
        ($('#email').css('border-color', ' rgb(255, 230, 160)'));  
    });

    $('form').on('submit', function(e){ /*quand formulaire bon et soumis, message*/
        alert('Votre proposition a été enregistrée et votre film apparaitra dans un prochain tournoi si il est séléctionné!');
})});

