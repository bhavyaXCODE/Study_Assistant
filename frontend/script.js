async function summarize() {
  const text = document.getElementById("inputText").value;

  const res = await fetch("http://localhost:5000/api/summarize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  const data = await res.json();

  document.getElementById("output").innerText = data.result;
}
async function ask() {
  const question = document.getElementById("inputText").value;

  const res = await fetch("http://localhost:5000/api/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ question })
  });

  const data = await res.json();
  document.getElementById("output").innerText = data.result;
}
async function quiz() {
  const text = document.getElementById("inputText").value;

  const res = await fetch("http://localhost:5000/api/quiz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  const data = await res.json();
  document.getElementById("output").innerText = data.result;
}