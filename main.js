$(document).ready(() =>{

    const $preview = $('.preview');
    
    function UpdateTextPreview(){
        const $text = $('#text');

        $text.on('keyup', (event) =>{
            $currentText = $(event.currentTarget).val();
            $preview.html($currentText);
    });
    }

    function changeFontFamily(){
        const $font = $('#font');

        $font.on('change', (event) =>{
            const $fontFamily = $(event.currentTarget).val();
            $preview.css({
            fontFamily: $fontFamily
            });
        });
    }

    function changeFontWeight(){
        const $weight = $('#weight');

        $weight.on('change', (event) =>{
            const $fontWeight = $(event.currentTarget).val();
            $preview.css({
                fontWeight: $fontWeight
            });
        });
    }

    function changeFontSize(){
        const $size = $('#size');
        $size.on('keyup', (event) =>{
            const $fontSize = $(event.currentTarget).val();

            $preview.css({
                fontSize: $fontSize + "px"
            })
        })
    }

    UpdateTextPreview();
    changeFontFamily();
    changeFontWeight();
    changeFontSize();
    
})