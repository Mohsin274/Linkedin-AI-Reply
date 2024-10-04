import { createRoot } from "react-dom/client";
import App from "./App";
import "~/assets/tailwind.css";

//insert AI icon to message input
const insertAiIcon = () => {
  const messageInput = document.querySelector(".msg-form__contenteditable");

  if (messageInput && !messageInput.querySelector(".ai-icon-container")) {
    const iconContainer = document.createElement("div");
    iconContainer.className =
      "ai-icon-container absolute right-2 bottom-2 transition-opacity duration-300 opacity-100";

    messageInput.setAttribute("focused", "true");
    messageInput.appendChild(iconContainer);

    const root = createRoot(iconContainer);
    root.render(<App />);
  }
};

//remove AI icon from message input
const removeAiIcon = () => {
  const messageInput = document.querySelector(".msg-form__contenteditable");
  if (messageInput) {
    messageInput.removeAttribute("focused");

    const iconContainer = messageInput.querySelector(".ai-icon-container");
    if (iconContainer) {
      iconContainer.classList.remove("opacity-100");
      iconContainer.classList.add("opacity-0");
    }
  }
};

// restore AI icon
const restoreAiIcon = () => {
  const messageInput = document.querySelector(".msg-form__contenteditable");
  if (messageInput) {
    const iconContainer = messageInput.querySelector(".ai-icon-container");
    if (iconContainer) {
      iconContainer.classList.remove("opacity-0");
      iconContainer.classList.add("opacity-100");
    }
  }
};

export default {
  matches: ["*://*.linkedin.com/*"],
  main() {
    const messageInput = document.querySelector(".msg-form__contenteditable");

    if (messageInput) {
      messageInput.addEventListener("focus", () => {
        insertAiIcon();
        restoreAiIcon(); // to ensure it appears when focused
      });
      messageInput.addEventListener("blur", removeAiIcon);
    }

    // to watch for dynamically added message inputs
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "childList") {
          const newMessageInput = document.querySelector(
            ".msg-form__contenteditable"
          );
          if (newMessageInput) {
            newMessageInput.addEventListener("focus", () => {
              insertAiIcon();
              restoreAiIcon(); // to ensure it appears when focused
            });
            newMessageInput.addEventListener("blur", removeAiIcon);
          }
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (messageInput) {
        messageInput.removeEventListener("focus", () => {
          insertAiIcon();
          restoreAiIcon();
        });
        messageInput.removeEventListener("blur", removeAiIcon);
      }
      observer.disconnect();
    };
  },
};
