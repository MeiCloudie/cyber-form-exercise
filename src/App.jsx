import React from "react"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import { message } from "antd"

export const NotificationContext = React.createContext()
function App() {
  const [messageApi, contextHolder] = message.useMessage()

  const handleNotification = (status, content) => {
    messageApi.open({
      type: status,
      content,
    })
  }

  return (
    <div className="flex flex-col h-screen justify-between font-montserrat">
      <NotificationContext.Provider value={{ abc: "mei", handleNotification }}>
        {contextHolder}
        <MainContent />
      </NotificationContext.Provider>
      <Footer />
    </div>
  )
}

export default App
