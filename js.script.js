function clearDisplay() {
                document.getElementById('result').value = '';
            }
    
            // Function to append a number or operator to the display
            function appendNumber(value) {
                document.getElementById('result').value += value;
            }
    
            // Function to calculate the result
            function calculate() {
                try {
                    const expression = document.getElementById('result').value;
                    const result = eval(expression); // Using eval to perform the calculation (not recommended for production code)
                    document.getElementById('result').value = result;
                } catch (error) {
                    document.getElementById('result').value = 'Error';
                }
            }