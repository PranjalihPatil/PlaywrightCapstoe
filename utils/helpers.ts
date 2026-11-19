export function generateRandomEmail(): string {
  const timestamp = Date.now();
  return `testuser_${timestamp}@test.com`;
}
