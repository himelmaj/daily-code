export default function limitText(text: string, limit: number): string {
    if (text.length <= limit) return text;
  
    let trimmed = text.slice(0, limit);
    return trimmed.slice(0, trimmed.lastIndexOf(" ")) + "...";
  }