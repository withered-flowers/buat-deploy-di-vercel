import CustomFooter from "./components/CustomFooter";
import CustomHeader from "./components/CustomHeader";

function App() {
  return (
    <>
      <section className="flex min-h-[100dvh] w-full flex-col items-center justify-center gap-4 p-4">
        <CustomHeader />
        <CustomFooter />
      </section>
    </>
  );
}

export default App;
