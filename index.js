const token = getToken()
// const userName = 'Lokja'
const userName = ''
const base_url = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`


function getIssues() {
  fetch(`${base_url}repos/${fork}/issues`)
  .then(res => res.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  var template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  var postData = { title: document.getElementById("title").value, body: document.getElementById("body").value }
  fetch(`${base_url}repos/${fork}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(json => getIssues())
}

function showResults(json) {
  var template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = `learn-co-curriculum/javascript-fetch-lab`
  fetch(`${base_url}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json))
}

function getToken() {
  // return '998cf7ce8d3f4f5bc8fd9f4a6da04845dd7df11b'
  return ''
}
