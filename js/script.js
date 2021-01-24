// QUESTION 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

// Answer: "Meow!"

// QUESTION 2

heading = document.querySelector("h3");

heading.innerHTML = "Updated Subheading";

// Answer: "Updated Subheading" on h3.

// Question 3

heading.style.fontSize = "2em";

// Answer: FontSize changed to "2em"

// Question 4

heading.classList.add("Subheading");

// Question 5

// Answer: Class "subheading" added to h3.

paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Answer: Selected all P tags, looped through and changed color to red.

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>";
resultsContainer.style.background = "yellow";

// Answer = Added new paragraph changed background to yellow

// Question 7

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function printList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

printList(cats);

// Answer: "Blob, "Harold", "Blurt"

// Question 8

let catPrint = "";

function createCats(cats) {
  for (let i = 0; i < cats.length; i++) {
    catPrint += "<h5>" + cats[i].name + "</h5>";

    let catAge = "Age uknown";

    if (cats[i].age) {
      catAge = cats[i].age;
    }

    catPrint += "<p>" + catAge + "</p>";
  }
  return catPrint;
}

const finalHtml = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = finalHtml;

// Answer: Blob 10, Harold Age uknown, Blurt 21
