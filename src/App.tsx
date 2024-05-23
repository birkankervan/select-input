import { Container } from "./components/Container";
import { Hero } from "./components/Hero";
import MultiSelectInput from "./components/MultiSelect/MultiSelectInput";

function App() {
  return (
    <Container>
      <Hero />
      <div className="bg-white bg-opacity-40 backdrop-blur-md w-full md:w-1/2 mx-auto min-h-96 p-5 rounded-lg overflow-auto">
        <MultiSelectInput />
        <div className="mt-3">
          <h1 className="text-center text-2xl font-bold">
            Rick and Morty Characters
          </h1>
          <div className="p-4">
            <p className="text-gray-700 text-xs md:text-sm">
              Using the{" "}
              <kbd className="inline-block px-2 py-1 text-sm text-gray-700 bg-gray-100 rounded border border-gray-300 shadow">
                multi-select input
              </kbd>{" "}
              above, you can search for the character you want. You can navigate
              through the search results using the{" "}
              <kbd className="inline-block px-2 py-1 text-sm text-gray-700 bg-gray-100 rounded border border-gray-300 shadow">
                up
              </kbd>{" "}
              and{" "}
              <kbd className="inline-block px-2 py-1 text-sm text-gray-700 bg-gray-100 rounded border border-gray-300 shadow">
                down
              </kbd>{" "}
              arrow keys on your keyboard. You can delete selected items with
              the{" "}
              <kbd className="inline-block px-2 py-1 text-sm text-gray-700 bg-gray-100 rounded border border-gray-300 shadow">
                backspace
              </kbd>{" "}
              key and navigate between selected items with the{" "}
              <kbd className="inline-block px-2 py-1 text-sm text-gray-700 bg-gray-100 rounded border border-gray-300 shadow">
                left
              </kbd>{" "}
              and{" "}
              <kbd className="inline-block px-2 py-1 text-sm text-gray-700 bg-gray-100 rounded border border-gray-300 shadow">
                right
              </kbd>{" "}
              arrow keys. Press{" "}
              <kbd className="inline-block px-2 py-1 text-sm text-gray-700 bg-gray-100 rounded border border-gray-300 shadow">
                enter
              </kbd>{" "}
              on a selected item to remove it from the list.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
