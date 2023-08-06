import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";

window.chatbaseConfig = {
  init: function() {
    Chatbot.init({
      chatflowid: "c16ad8f8-b6b8-4053-ad4d-4012a4425991",
      apiHost: "https://botcongfigs0et4123sdjhjsdg6525267576gh36bh37.up.railway.app",
      chatflowConfig: {
        // topK: 2
      },
      theme: {
        button: {
          backgroundColor: "#3B81F6",
          right: 20,
          bottom: 20,
          size: "medium",
          iconColor: "white",
          customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
        },
        chatWindow: {
          welcomeMessage: "Hello! This is custom welcome message",
          backgroundColor: "#ffffff",
          height: 700,
          width: 400,
          fontSize: 16,
          poweredByTextColor: "#303235",
          botMessage: {
            backgroundColor: "#f7f8ff",
            textColor: "#303235",
            showAvatar: true,
            avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
          },
          userMessage: {
            backgroundColor: "#3B81F6",
            textColor: "#ffffff",
            showAvatar: true,
            avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
          },
          textInput: {
            placeholder: "Type your question",
            backgroundColor: "#ffffff",
            textColor: "#303235",
            sendButtonColor: "#3B81F6",
          }
        }
      }
    });
  }
};

// Call the init function to initialize the configuration
window.chatbaseConfig.init();