import { render, screen } from "@testing-library/react";
import Courses from "../pages/Courses";

test("renders course list", () => {
  render(<Courses />);
  expect(screen.getByText(/React Basics/i)).toBeInTheDocument();
});
