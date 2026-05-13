/** Encode a form for Netlify Forms (SPA POST to `/`). */
export async function submitNetlifyForm(form: HTMLFormElement): Promise<void> {
  const body = new URLSearchParams(new FormData(form) as never).toString()
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`)
  }
}
