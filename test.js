const thing = {
  "projects": [{
      "id": "0",
      "project_name": "A Random Quote Generator",
      "description": "A page that will display a random quote to the user.",
      "technologies": ["HTML", "Javscript", "CSS"],
      "live_link": "https://dantasyisland.github.io/random-quote-generator/",
      "github_link": "https://github.com/dantasyisland/random-quote-generator",
      "image_urls": ["/static/images/random-quote-generator-1.png", "/static/images/random-quote-generator-2.png"]
    },
    {
      "id": "1",
      "project_name": "Data Pagination and Filtering",
      "description": "",
      "technologies": ["HTML", "Javscript", "CSS"],
      "live_link": "https://dantasyisland.github.io/data-pagination/",
      "github_link": "https://github.com/dantasyisland/data-pagination",
      "image_urls": ["/static/images/data-pagination-1.png", "/static/images/data-pagination-2.png"]
    },
    {
      "id": "2",
      "project_name": "Interactive Form",
      "description": "some thing",
      "technologies": ["HTML", "Javscript", "CSS"],
      "live_link": "https://dantasyisland.github.io/interactive-form/",
      "github_link": "https://github.com/dantasyisland/interactive-form",
      "image_urls": ["/static/images/interactive-form-1.png", "../static/images/1.png", "../static/images/interactive-form-2.png"]
    },
    {
      "id": "3",
      "project_name": "OOP Gameshow App",
      "description": "some thing",
      "technologies": ["HTML", "Object Oriented Javscript", "CSS"],
      "live_link": "https://dantasyisland.github.io/interactive-oop-game/",
      "github_link": "https://github.com/dantasyisland/interactive-oop-game",
      "image_urls": ["/static/images/interactive-oop-game-1.png", "/static/images/interactive-oop-game-2.png"]
    },
    {
      "id": "4",
      "project_name": "Public API Request",
      "description": "some thing",
      "technologies": ["HTML", "Javscript", "CSS", "APIs"],
      "live_link": "https://github.com/dantasyisland/public-api-requests",
      "github_link": "https://dantasyisland.github.io/public-api-requests/",
      "image_urls": ["/static/images/public-api-requests-1.png", "/static/images/public-api-requests-2.png", "/static/images/public-api-requests-3.png", "/static/images/public-api-requests-4.png"]
    }
  ]
}

const { projects } = thing;
const data = projects[1];
console.dir(data)
const {
  project_name,
  description,
  technologies,
  live_link,
  github_link,
  image_urls
} = data;