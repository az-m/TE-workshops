const output = document.getElementById("output");
let a = [];
let p = "";

async function getRepoNames() {
  const response = await fetch("https://api.github.com/users/az-m/repos");
  const data = await response.json();
  return data;
}

async function getRepoData(data) {
  Object.entries(data).forEach(async function (entry) {
    const repoName = entry[1].name;
    const response = await fetch(
      "https://api.github.com/repos/az-m/" + repoName
    );
    const data = await response.json();
    p = `<p>Name: ${data.name}  Stargazers count: ${data.stargazers_count}</p>`;
    output.innerHTML += p;
  });
}

async function getNamesAndData() {
  const repoData = await getRepoNames();
  getRepoData(repoData);
}

getNamesAndData();
