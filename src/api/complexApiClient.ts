interface IRequestProps {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: any
}

export async function complexApiClient<IResponse>({
  url,
  method = 'GET',
  body,
}: IRequestProps): Promise<IResponse> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  const response = await fetch(`http://o-complex.com:1337${url}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data ?? 'Неизвестная ошибка')
  }

  return data
}
