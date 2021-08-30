import bcryptjs from 'bcryptjs'


export class Password {
    static async hash(password: string) {
        let hash = await bcryptjs.hash(password, 8);
        return hash;
    }

    static async compare(requestPassword: string, dbPassword: string) {
        return await bcryptjs.compare(requestPassword, dbPassword);
    }
}