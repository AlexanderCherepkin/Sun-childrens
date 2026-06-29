export function sanitizeHtml(input: string): string {
  const tagAllowList = new Set([
    "p",
    "br",
    "strong",
    "b",
    "em",
    "i",
    "u",
    "s",
    "strike",
    "a",
    "ul",
    "ol",
    "li",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "blockquote",
  ]);

  const attrAllowList: Record<string, Set<string>> = {
    a: new Set(["href", "title", "target", "rel"]),
  };

  return input
    .replace(/<\/?([a-z0-9]+)([^>]*)>/gi, (match, tag, attrs) => {
      const lowerTag = tag.toLowerCase();
      if (!tagAllowList.has(lowerTag)) return "";

      if (lowerTag === "a") {
        const allowedAttrs = attrAllowList.a;
        const cleaned = (attrs as string)
          .match(/[a-z\-]+=(?:(?:"[^"]*")|(?:'[^']*'))/gi)
          ?.filter((attr) => {
            const name = attr.split("=")[0].toLowerCase();
            return allowedAttrs.has(name);
          })
          .map((attr) => {
            const [name, raw] = attr.split("=");
            const value = raw.slice(1, -1);
            if (name.toLowerCase() === "href") {
              const safe = value.startsWith("http://") || value.startsWith("https://") || value.startsWith("mailto:");
              return safe ? attr : "";
            }
            return attr;
          })
          .filter(Boolean)
          .join(" ") ?? "";
        return `<${lowerTag}${cleaned ? " " + cleaned : ""}>`;
      }

      return match.toLowerCase();
    })
    .replace(/<script[^>]*>.*?<\/script>/gi, "")
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, "");
}
