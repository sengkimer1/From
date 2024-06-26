document.addEventListener("DOMContentLoaded", function () {
  document.forms[0].addEventListener("submit", submitForm);
  function submitForm(event) {
    event.preventDefault();
    clearErrors();
    let hasError = false;
    let fullname = document.getElementById("fullname");
    let email = document.getElementById("email");
    let gradeLevel = document.querySelector('input[name="gradeLevel"]:checked');
    let learningPlace = document.querySelector(
      'input[name="learningPlace"]:checked'
    );
    let interestLevel = document.querySelector(
      'input[name="interestLevel"]:checked'
    );
    let previousExperience = document.querySelector(
      'input[name="previousExperience"]:checked'
    );
    let experience = document.getElementById("experience");
    let skill = [];
    let checkboxes = document.querySelectorAll('input[name="skill"]:checked');
    for (let i = 0; i < checkboxes.length; i++) {
      skill.push(checkboxes[i].value);
    }
    let activePedagogy = document.querySelector(
      'input[name="activePedagogy"]:checked'
    );
    let text = document.getElementById("text");
    let text1 = document.getElementById("text1");
    let flexRadioDefault = document.querySelector(
      'input[name="flexRadioDefault"]:checked'
    );
    let text2 = document.getElementById("text2");
    let skill1 = [];
    let checkboxes1 = document.querySelectorAll('input[name="skill1"]:checked');
    for (let i = 0; i < checkboxes1.length; i++) {
      skill1.push(checkboxes1[i].value);
    }
    let learningEnvironment = document.querySelector(
      'input[name="learningEnvironment"]:checked'
    );
    let peerInteraction = document.querySelector(
      'input[name="peerInteraction"]:checked'
    );
    let feedbackSupport = document.querySelector(
      'input[name="feedbackSupport"]:checked'
    );
    let skill2 = [];
    let checkboxes2 = document.querySelectorAll('input[name="skill2"]:checked');
    for (let i = 0; i < checkboxes2.length; i++) {
      skill2.push(checkboxes2[i].value);
    }
    let text3 = document.getElementById("text3");
    let text4 = document.getElementById("text4");
    let text5 = document.getElementById("text5");
    let text6 = document.getElementById("text6");
    if (!fullname.value) {
      hasError = true;
      fullname.style.border = "2px solid red";
    }
    if (!email.value) {
      hasError = true;
      email.style.border = "2px solid red";
    }
    if (!gradeLevel) {
      hasError = true;
      setErrorBorder("gradeLevelError");
    }
    if (!learningPlace) {
      hasError = true;
      setErrorBorder("learningPlaceError");
    }
    if (!interestLevel) {
      hasError = true;
      setErrorBorder("interestLevelError");
    }
    if (!previousExperience) {
      hasError = true;
      setErrorBorder("previousExperienceError");
    }
    if (!experience.value) {
      hasError = true;
      experience.style.border = "2px solid red";
    }
    if (skill.length === 0) {
      hasError = true;
      setErrorBorder("skillError");
    }
    if (!activePedagogy) {
      hasError = true;
      setErrorBorder("activePedagogyError");
    }
    if (!text.value) {
      hasError = true;
      text.style.border = "2px solid red";
    }
    if (!text1.value) {
      hasError = true;
      text1.style.border = "2px solid red";
    }
    if (!flexRadioDefault) {
      hasError = true;
      setErrorBorder("flexRadioDefaultError");
    }
    if (!text2.value) {
      hasError = true;
      text2.style.border = "2px solid red";
    }
    if (skill1.length === 0) {
      hasError = true;
      setErrorBorder("skill1Error");
    }
    if (!learningEnvironment) {
      hasError = true;
      setErrorBorder("learningEnvironmentError");
    }
    if (!peerInteraction) {
      hasError = true;
      setErrorBorder("peerInteractionError");
    }
    if (!feedbackSupport) {
      hasError = true;
      setErrorBorder("feedbackSupportError");
    }
    if (skill2.length === 0) {
      hasError = true;
      setErrorBorder("skill2Error");
    }
    if (!text3.value) {
      hasError = true;
      text3.style.border = "2px solid red";
    }
    if (!text4.value) {
      hasError = true;
      text4.style.border = "2px solid red";
    }
    if (!text5.value) {
      hasError = true;
      text5.style.border = "2px solid red";
    }
    if (!text6.value) {
      hasError = true;
      text6.style.border = "2px solid red";
    }

    if (hasError) {
      return;
    }
    console.log(fullname.value);
    console.log(email.value);
    console.log(gradeLevel.value);
    console.log(learningPlace.value);
    console.log(interestLevel.value);
    console.log(previousExperience.value);
    console.log(experience.value);
    console.log(skill);
    console.log(activePedagogy.value);
    console.log(text.value);
    console.log(text1.value);
    console.log(flexRadioDefault.value);
    console.log(text2.value);
    console.log(skill1);
    console.log(learningEnvironment.value);
    console.log(peerInteraction.value);
    console.log(feedbackSupport.value);
    console.log(skill2);
    console.log(text3.value);
    console.log(text4.value);
    console.log(text5.value);
    console.log(text6.value);

    const data = {
      answers: [
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 1,
          answer: [
            fullname.value
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 2,
          answer: [
            email.value
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 3,
          answer: [
            gradeLevel.value
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 4,
          answer: [
            activePedagogy.value
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 5,
          answer: [
            interestLevel.value
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 6,
          answer: [
            previousExperience.value
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 7,
          answer: [
            experience.value
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 8,
          answer: [
            skill
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 9,
          answer: [
            activePedagogy.value
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 10,
          answer: [
            text.value
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 11,
          answer: [
            text1.value
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 12,
          answer: [
            flexRadioDefault.value
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 13,
          answer: [
            text2.value
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 14,
          answer: [
            skill1
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 15,
          answer: [
            learningEnvironment.value
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 16,
          answer: [
            peerInteraction.value
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 17,
          answer: [
            feedbackSupport.value
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 18,
          answer: [
            skill2
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 19,
          answer: [
            text3.value
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 20,
          answer: [
            text4.value
          ],
          created_by: "Group9-Kimer"
        },
        {
          email: email.value,
          fullname: fullname.value,
          question_id: 21,
          answer: [
            text5.value
          ],
          created_by: "Group9-Kimer"
        },
        
      ]
    }
    saveFormAnswers(data);
  }
  function clearErrors() {
    let elements = document.querySelectorAll("input, textarea");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.border = "";
    }
    let errorGroups = document.querySelectorAll(".error-group");
    for (let i = 0; i < errorGroups.length; i++) {
      errorGroups[i].style.border = "";
    }
  }
  function setErrorBorder(groupId) {
    document.getElementById(groupId).style.border = "2px solid red";
  }
});

function saveFormAnswers(data) {
  fetch('https://wmad-survey-backend.vercel.app/api/form-answers/submit', {
    method: 'POST',
    headers: {
      'x-secret-key': '3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
}

