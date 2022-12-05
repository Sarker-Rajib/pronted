const studentContent = document.getElementById("student-content");
const studentBenefits = document.getElementById("student-benefits");
const teacherContent = document.getElementById("techer-content");
const teacherBenefits = document.getElementById("techer-benefits");

// console.log(studentContent, studentBenefits, teacherContent, teacherBenefits);

studentContent.addEventListener(
    "mouseover",
    function handleMouseOver() {
        studentContent.style.width = "70%";
        teacherContent.style.width = "30%";
        teacherBenefits.style.display = "none";
        studentBenefits.style.display = "block";
    }
    );
    studentContent.addEventListener(
        "mouseout",
        function handleMouseOver() {
            studentBenefits.style.display = "none";
            teacherContent.style.width = "70%";
            studentContent.style.width = "30%";
            teacherBenefits.style.display = "block";
    }
  );