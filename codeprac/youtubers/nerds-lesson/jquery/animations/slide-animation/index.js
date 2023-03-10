$('#slide-up-box').click(() => {
  $('#box').slideUp('slow')
})

$('#slide-down-box').click(()=> {
  $('#box').slideDown('fast')
})

$('#slide-toggle-box').click(()=> {
  $('#box').slideToggle('fast')
})
