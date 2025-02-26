import bcrypt from 'bcrypt';

export async function comparePassword(
    password: string,
    hashed: string
): Promise<boolean> {
    return await bcrypt.compare(password, hashed);
}
