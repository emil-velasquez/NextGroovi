import bcrypt from "bcryptjs";

/**
 * encodes a string with bcrypt with constant salt
 * @param message string to encoded with bcrypt
 * @returns the encoded string
 */
export async function encryptMessage(message: string) {
    const encodedMessage = bcrypt.hashSync(message, process.env.ENCRYPTION_SALT)
    return encodedMessage
}