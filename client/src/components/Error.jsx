import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto p-6">
          <h2 className="text-6xl font-bold mb-4">404</h2>
          <h4 className="text-2xl font-semibold mb-2">Sorry! Page not found</h4>
          <p className="text-base text-gray-700 mb-4">
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue, feel free to report it, and we'll
            look into it.
          </p>
          <div className="space-x-4">
            <NavLink to="/" className="btn btn-primary">return home</NavLink>
            <NavLink to="/contact" className="btn btn-secondary">report problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
