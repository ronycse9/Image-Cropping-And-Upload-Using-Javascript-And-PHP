// Check coordinates
function checkCoords(){
    if(parseInt($('#w').val())) return true;
    alert('Please select a crop region then press upload.');
    return false;
}

// Set image coordinates
function updateCoords(im,obj){
    var img = document.getElementById("imagePreview");
    var orgHeight = img.naturalHeight;
    var orgWidth = img.naturalWidth;
    
    var porcX = orgWidth/im.width;
    var porcY = orgHeight/im.height;
    
    $('input#x').val(Math.round(obj.x1 * porcX));
    $('input#y').val(Math.round(obj.y1 * porcY));
    $('input#w').val(Math.round(obj.width * porcX));
    $('input#h').val(Math.round(obj.height * porcY));
}

$(document).ready(function(){
    // Prepare instant image preview
        var p = $("#imagePreview");
        $("#fileInput").change(function(){
            //fadeOut or hide preview
        p.fadeOut();
        
        //prepare HTML5 FileReader
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("fileInput").files[0]);
        
        oFReader.onload = function(oFREvent){
            p.attr('src', oFREvent.target.result).fadeIn();
        };
    });

    // Implement imgAreaSelect plugin
    $('#imagePreview').imgAreaSelect({
        onSelectEnd: updateCoords
    });
});