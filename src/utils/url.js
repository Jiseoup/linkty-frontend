// Returns full shorten URL.
export function getFullShortenUrl(shortenUrl) {
  return `${process.env.REACT_APP_BASE_URL}/${shortenUrl}`;
}

// Copy URL to the clipboard.
export async function copyUrl(url) {
  if (!url) return false;

  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch (error) {
    return false;
  }
}

// Open URL in new tab.
export function openUrl(url) {
  if (!url) return;
  window.open(url, '_blank', 'noopener noreferrer');
}
