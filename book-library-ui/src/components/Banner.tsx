import { AddBookModal } from "./AddBookModal"

const Banner = () => {
  return (
    <div className="flex py-4">
      <div className="flex flex-col items-center bg-gray-200 mx-auto md:w-4/5 py-10 px-8 rounded-2xl">
        <h2 className="mb-3 font-bold text-4xl">Build Your Library</h2>
        <h3 className="text-gray-800">Buy two selected books and get <br /> one for free</h3>

        <AddBookModal />
      </div>


    </div>
  )
}

export default Banner