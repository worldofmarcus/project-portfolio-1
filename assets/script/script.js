// With help from 'Online Tutorials' on Youtube - https://www.youtube.com/watch?v=7Vr1bngah-k (Add Remove Active Class On Click - Html CSS and Javascript)

$(document).on('click', 'ul li', function () {
    $(this).addClass('active').siblings().removeClass('active')
})