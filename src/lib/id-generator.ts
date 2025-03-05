export async function generateNanoid(): Promise<string> {
    const { nanoid } = await import('nanoid');
    return nanoid();
}

export function generateNumberId(): number {
    return Math.floor(Math.random() * 1000);
}