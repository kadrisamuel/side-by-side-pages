import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pb-4">
      <iframe
        src="https://www.pricerunner.com"
        title="Pricerunner"
        width="50%"
        height="1000">
          
          <a href="https://www.pricerunner.com">View Content</a>
      </iframe>
      <iframe
        src="https://www.prisjakt.nu"
        title="Prisjakt"
        width="50%"
        height="1000"
      />
    </main>
  );
}
