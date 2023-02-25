import { Button } from "@chimera-ui/components";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>

      <div className="flex flex-wrap gap-4">
        <Button>Primary</Button>

        <Button variant="subtle">Subtle</Button>

        <Button variant="outline">Outline</Button>

        <Button variant="secondary">Secondary</Button>

        <Button variant="secondary-subtle">Secondary Subtle</Button>

        <Button variant="secondary-outline">Secondary Outline</Button>

        <Button variant="gradient">Gradient</Button>

        <Button variant="destructive">Destructive</Button>

        <Button variant="success">Success</Button>

        <Button variant="info">Info</Button>

        <Button variant="warning">Warning</Button>
      </div>
    </div>
  );
}
