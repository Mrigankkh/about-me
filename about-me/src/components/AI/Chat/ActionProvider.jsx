import React from "react";

async function getOllamaResponse(input) {
  try {
    var response = await fetch("http://localhost:11434/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3.1", // Replace with the model you're using
        prompt: input, // The input prompt to the model
      }),
    });

    var data = await response.json() // Parse the response as JSON
    console.log("Response from Ollama:", data);
    return data; // Return the parsed data for further use
  } catch (error) {
    console.error("Error:", error);
  }
}

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleResponse = (input) => {
    getOllamaResponse(input).then((response) => {
      const botMessage = createChatBotMessage(response);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    });
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {handleResponse},
        });
      })}
    </div>
  );
};

export default ActionProvider;
