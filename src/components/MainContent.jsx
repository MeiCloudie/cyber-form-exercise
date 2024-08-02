import DemoFormReact from "./DemoFormReact/DemoFormReact"

const MainContent = () => {
  return (
    <div className="container mx-auto my-6">
      {/* Title */}
      <h1 className="text-center text-5xl font-bold mb-8">
        React Form Exercise
      </h1>

      {/* Main Form */}
      <div className="my-4">
        <DemoFormReact />
      </div>
    </div>
  )
}

export default MainContent
