const apiKey = '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'; // Replace with your OpenAI API key

// Show input form
function showInputForm() {
  document.getElementById('inputForm').style.display = 'block';
  document.getElementById('resultSection').style.display = 'none';
}

// Summarize text using OpenAI API
async function summarizeText() {
  const textInput = document.getElementById('textInput').value;
  if (!textInput.trim()) {
    alert("Please provide some text to summarize.");
    return;
  }

  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: `Summarize the following text:\n\n${textInput}`,
        max_tokens: 200
      })
    });

    const data = await response.json();
    const summary = data.choices[0].text.trim();

    // Display the results
    document.getElementById('originalText').textContent = textInput;
    document.getElementById('summaryText').textContent = summary;
    document.getElementById('inputForm').style.display = 'none';
    document.getElementById('resultSection').style.display = 'block';
  } catch (error) {
    console.error("Error summarizing text:", error);
    alert("An error occurred while trying to the text. Please try again.");
  }
}

