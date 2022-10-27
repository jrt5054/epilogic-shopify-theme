// Get all elements

const subject_1_select = document.getElementById('subject-1-select');
const subject_2_select = document.getElementById('subject-2-select');
const subject_3_select = document.getElementById('subject-3-select');

const subject_1_info = document.getElementById('subject-1-info');
const subject_2_info = document.getElementById('subject-2-info');
const subject_3_info = document.getElementById('subject-3-info');

// Apply onclick event
subject_1_select.onclick = showCaseStudy;
subject_2_select.onclick = showCaseStudy;
subject_3_select.onclick = showCaseStudy;

// connect select and info divs together in JSON object

const subject_1 = {
  select: subject_1_select,
  info: subject_1_info
}

const subject_2 = {
  select: subject_2_select,
  info: subject_2_info
}

const subject_3 = {
  select: subject_3_select,
  info: subject_3_info
}

const elementArray = [subject_1, subject_2, subject_3]

function hideAll() {
  elementArray.forEach((element) => {
    element.info.classList.add("hide-case-study");
  });
}

function showCaseStudy() {
  hideAll();
  // get element clicked
  const elementClickedId = this.id;
  // alert(elementClicked);
  elementArray.forEach((element) => {
    if (elementClickedId == element.select.id) {
      element.info.classList.remove("hide-case-study");
    }
  });
}

/* 

When i click this thing -> go find that thing -> unhide it -> hide everything else

*/