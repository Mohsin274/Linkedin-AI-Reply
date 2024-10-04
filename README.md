# LinkedIn Reply Assistant Browser Extension

This browser extension enhances your LinkedIn messaging experience by providing AI-assisted reply suggestions. It's a demo extension that showcases the UI and interaction flow without making actual API calls for generating responses.

## Features

- Displays an AI icon when focusing on LinkedIn message input fields
- Opens a modal for entering commands and generating replies
- Inserts generated replies into the LinkedIn message input field

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- WXT Framework

## Installation

1. Clone this repository:

   ```
   git clone https://github.com/Mohsin274/Linkedin-AI-Reply.git
   ```

2. Navigate to the project directory:

   ```
   cd linkedin-AI-reply
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Build the extension:

   ```
   npm run zip
   ```

   For Firefox, use `npm run zip:firefox` instead.

5. Unzip the extension:

   - Navigate to `.output` directory within the root of the project directory
   - Unzip the file with a name similar to `linkedin-ai-reply-0.0.0-chrome`

6. Load the extension
   In Chrome:

   - Open Chrome and go to `chrome://extensions`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked" and select the unzipped file from the project directory

   In Firefox:

   - Open Firefox and go to `about:debugging`
   - Click "This Firefox" and select "Load Temporary Add-on"
   - Select the unzipped file from the project directory

## Usage

1. Navigate to LinkedIn and open a messaging conversation
2. Click on the message input field to focus it
3. Click on the AI icon that appears
4. Enter a command in the modal and click "Generate"
5. Click "Insert" to add the generated reply to the message input field

## Development

To run the project in development mode:

```
npm run dev
```

For Firefox, use `npm run dev:firefox` instead.

## Video Demo

Here's a demonstration of the LinkedIn Reply Assistant Browser Extension in action:

[![Demo Video](demo/LinkedIn-AI-Reply-Demo.mp4)](https://github.com/user-attachments/assets/ca3edf47-3b02-4f64-a957-ebe9fd7419a2)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
