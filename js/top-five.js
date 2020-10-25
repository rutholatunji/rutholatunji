const portfolioProject = {
  title: "Project 1 - My portfolio",
  description:
    "This is where you are now. I created a portfolio during the Introduction to Web development course provided by CFG. As you can see I learnt how to use Bootstrap, CSS and Javascript to customize my site!",
  image_url:
    "https://rutholatunji.github.io/rutholatunji/images/newportfolio.jpg"
};

console.log(portfolioProject);

const podcastNewsite = {
  title: "Project 2 - Newsbite",
  description:
    "This is my second project. I created a webpage dedicated to podcasting news with my group members from the CFG course. See it live",
  image_url:
    "https://rutholatunji.github.io/rutholatunji/images/project2.jpg"
};

console.log(podcastNewsite);

const project3 = {
  title: "Project 3",
  description: "I hope to make a webpage for the phone cases I sell on Etsy",
  image_url:
    "https://rutholatunji.github.io/rutholatunji/images/white%20flower.jpg"
};

console.log(project3);

// ARRAY OF OBJECTS

const projects = [
  portfolioProject,
  {
    title: "Project 1 - My portfolio",
    description:
      "This is where you are now. I created a portfolio during the Introduction to Web development course provided by CFG. As you can see I learnt how to use Bootstrap, CSS and Javascript to customize my site!",
    image_url:
      "https://uploads.codesandbox.io/uploads/user/b34d8067-4012-4554-95e0-7a6d2919422c/aeoW-profile3.png"
  },
  {
    title: "Project 2 - Newsbite",
    description:
      "This is my second project. I created a webpage dedicated to podcasting news with my group members from the CFG course.",
    image_url:
      "https://uploads.codesandbox.io/uploads/user/b34d8067-4012-4554-95e0-7a6d2919422c/hv_h-spotify+lgo.png"
  },
  {
    title: "Project 3",
    description: "I hope to make a webpage for the phone cases I sell on Etsy",
    image_url:
      "https://rutholatunji.github.io/rutholatunji/images/white%20flower.jpg"
  }
];

console.log(projects);

//Purposefully remove the link key & values from your first object in the array.
//Now add a conditional that checks to see if there’s a link in your  first object. If there isn’t a link then use console.log to display a message e.g “Link not provided”. Else, use a console.log to display the link text.

if (portfolioProject.link) {
  console.log(portfolioProject.link.text);
} else {
  console.log("Link not provided");
}

//Exercise 5.6.1
//Create a for loop that cycles through each object in your array, and prints the project title and description using console.log.

//Exercise 5.6.2
//Move your conditional from Exercise 5 into your for loop and do the same check on each object, rather than just the first.
//Exercise 5.6.3
//Experiment with how you print each value to the console. Try adding titles to each value and line breaks after each object.

for (let i = 0; i < projects.length; i++) {
  console.log(projects[i].title);
  console.log(projects[i].description);

  if (projects[i].link) {
    console.log(projects[i].link.text);
  } else {
    console.log("Link is not provided.");
  }
}
