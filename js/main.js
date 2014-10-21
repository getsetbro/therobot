  var frm = $('#form');
  var inpt = frm.find('input');
  var sbmt = frm.find('button');
  var speech = new SpeechSynthesisUtterance();
  var body = $(document.body);
  function speak() {
    txt = inpt[0].value;
    speech.text = txt;
    speechSynthesis.speak(speech);
    body.append( '<br/>' + inpt.val() );
    inpt.val('').focus();
  }

  sbmt.click(function(e){
    speak();
  });
  frm.submit(function(e){
    e.preventDefault();
  });
