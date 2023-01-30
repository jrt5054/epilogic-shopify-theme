const textWithSuperscript = document.querySelector(".tm-superscript");

const text = textWithSuperscript.innerHTML.replace("TM",'<sup>TM</sup>')

textWithSuperscript.innerHTML = text;