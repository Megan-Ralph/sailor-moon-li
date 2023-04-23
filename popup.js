const generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click", () => {
  chrome.tabs.executeScript({
    code: `
      const loremIpsum = \`
        In the name of the moon, 
        I will punish you!
  
        Moon Prism Power, Make up!
  
        I am Sailor Moon, champion of justic!
        On behalf of the moon, I will right wrongs and triumph over evil, and that means you!
    \`;

    const inputFields = document.querySelectorAll('input[type="text], input[type="password"], input[type="email"], textarea');
    inputFields.forEach((field) => {
      const cursorPosition = field.selectionStart;
      field.value = field.value.slice(0, cursorPosition) + loremIpsum.repeat(5) + field.value.slice(cursorPosition);
    });
  `
  });
});
