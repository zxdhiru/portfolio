export async function submitQuery(
  name: string,
  email: string,
  phone: number,
  message: string
) {
  const response = await fetch("http://localhost:5001/api/v1/queries/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message, phone }),
  });
  if (!response.ok) {
    throw new Error("Failed to submit query");
  }
  return { success: true, message: "Query submitted successfully" };
}
