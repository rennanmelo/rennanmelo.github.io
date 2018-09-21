$(function(){
    $('.navbar ul li:nth-child(3)').css('background-color','rgba(180,102,90, 0.8)');

    $('.navbar ul li').click(function(){
        $('.navbar ul li').css('background-color','rgba(102,102,102,0)');
        $(this).css('background-color','rgba(180,102,90, 0.8)');    
    });

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox();
    });

})