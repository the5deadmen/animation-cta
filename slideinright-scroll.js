<script type="text/javascript">
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $(".nav-link").addClass(".in-right");
    } else {
        $(".nav-link").removeClass(".in-right");
    }
});
</script>
