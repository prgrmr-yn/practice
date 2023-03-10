$('#hidebox').click(()=>{
  $('#box').hide(500);
})

$('#showbox').click(()=>{
  $('#box').show(500)
})

$('#togglebox').click(()=>{
  $('#box').toggle(1000, ()=>{
    alert('done')
  })
})
