import Link from "next/link";
import Services from "../components/Services";
import Welcome from "../components/Welcome";

export default function IndexPage() {
  return (
    <div>
      <Welcome />
      <Services />
    </div>
  );
}
