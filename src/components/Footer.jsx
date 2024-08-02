const Footer = () => {
  return (
    <div className="bg-gray-800 text-white font-bold text-center p-4">
      <p>
        Copyright © {new Date().getFullYear()} React Form Exercise -
        Truong Thuc Van (
        <a
          href="https://github.com/MeiCloudie"
          target="_blank"
          className="hover:text-blue-400"
        >
          MeiCloudie
        </a>
        )
      </p>
    </div>
  )
}

export default Footer
