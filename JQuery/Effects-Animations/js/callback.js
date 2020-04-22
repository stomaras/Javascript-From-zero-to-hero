$(function() {
    $(".red-box").fadeTo(1000, 0, function() {
        $(".green-box").fadeTo(1000, 0, function() {
            $(".blue-box").fadeTo(1000, 0);
        })
    });
});
