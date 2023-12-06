import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

// This component will render on errors.
export default function Error() {
  // We can learn more about what happened with the `useRouteError` hook.
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-red-500 mb-2">Yikes!</h1>
      <p className="text-sm text-gray-600 mb-2">Something went wrong.</p>
      <p className="text-lg font-bold mb-4">
        <code>{error.status}: {error.statusText}</code>
      </p>
      {/* Using Link lets us render `/` without requesting anything from the server. */}
      <Link to="/" className="text-blue-500 hover:underline">🔙 Take me home</Link>
      {/* Since <Error> isn't a child of <Root>, we'll have to render our <footer> again. */}
      <footer className="mt-8 text-xs text-gray-500">&copy; 2023 Snehal Abhale</footer>
    </div>
  );
}
