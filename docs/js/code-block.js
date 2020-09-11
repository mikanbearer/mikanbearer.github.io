




var code_list = document.body.getElementsByTagName('code')

for (i=0; i <= code_list.length-1; i++) {
  var codeParent = code_list[i].closest('pre')
  if (!codeParent.closest('div.highlight')) {
    if (/^language-:+/.test(code_list[i].className)) {
      var div = document.createElement('div')
      div.classList.add('highlight')
      var pre = codeParent.cloneNode(true)
      div.appendChild(pre)
      codeParent.replaceWith(div)
    }
  }
}


var list = document.body.getElementsByClassName('highlight')

for(i=0; i <= list.length-1; i++){
  var table = list[i].firstElementChild.firstElementChild
  if (table.nodeName == 'TABLE') {
    var code = table.firstElementChild.firstElementChild.childNodes[2].firstElementChild.firstElementChild
    var codeName =  code ? code.className.split(':')[1] : null
    if(codeName) {
      var div = document.createElement('div')
      div.textContent = codeName
      div.classList.add('code-name')
      table.parentNode.insertBefore(div, table)
    }
  }else {
    var code = table
    var codeName =  code ? code.className.split(':')[1] : null

    if(codeName) {
      var div = document.createElement('div')
      var br = document.createElement('br')
      div.textContent = codeName
      div.classList.add('code-name')
      code.parentNode.insertBefore(div, code)
      code.parentNode.insertBefore(br, code)
    }
  }
}
