$(document).ready(function() 
{
    $ ('.b-food .btn').ready(function()
    {
        $('.b-food .btn').addClass('bright');
    });
    $ ('.b-food .btn').mouseenter(function()
    {
        $('.b-food .btn').removeClass('bright');
        $('.b-food .btn').addClass('dark');
    });
    $ ('.b-food .btn').mouseleave(function()
    {
        $('.b-food .btn').removeClass('dark');
        $('.b-food .btn').addClass('bright');
    });

    $ ('.b-room .btn').mouseenter(function()
    {
        $('.b-room .btn').addClass('dark');
    });
    $ ('.b-room .btn').mouseleave(function()
    {
        $('.b-room .btn').removeClass('dark');
    });

    $ ('.b-trans .btn').mouseenter(function()
    {
        $('.b-trans .btn').addClass('dark');
    });
    $ ('.b-trans .btn').mouseleave(function()
    {
        $('.b-trans .btn').removeClass('dark');
    });

    $ ('.header .btn').ready(function()
    {
        $('.header .btn').addClass('bright_head');
    });
    $ ('.header .btn').mouseenter(function()
    {
        $('.header .btn').removeClass('bright_head');
        $('.header .btn').addClass('dark_head');
    });
    $ ('.header .btn').mouseleave(function()
    {
        $('.header .btn').removeClass('dark_head');
        $('.header .btn').addClass('bright_head');
    });

    $ ('.btn-social .btn').ready(function()
    {
        $('.btn-social .btn').addClass('bright_head');
    });
    $ ('.btn-social .btn').mouseenter(function()
    {
        $('.btn-social .btn').removeClass('bright_head');
        $('.btn-social .btn').addClass('dark_head');
    });
    $ ('.btn-social .btn').mouseleave(function()
    {
        $('.btn-social .btn').removeClass('dark_head');
        $('.btn-social .btn').addClass('bright_head');
    });


});


