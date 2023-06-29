export default class FirebaseError extends Error {
    constructor(code) {
        super(code);
        if (code == "auth/user-not-found") {
            this.name = "UserNotFound";
            this.message = "Usuário não encontrado!";
        } else if (code == "emailNotVerified") {
            this.name = "EmailNotVerified";
            this.message = "Por favor, verifique seu email antes de fazer login!";
        } else if (code == "auth/too-many-requests") {
            this.name = "TooManyRequests";
            this.message = "Muitas tentativas! Tente novamente mais tarde.";
        } else if (code == "auth/internal-error") {
            this.name = "InternalError";
            this.message = "Erro interno! Tente novamente mais tarde.";
        } else if (code == "verifyEmail") {
            this.name = "VerifyEmail";
            this.message = "Por favor, verifique seu email!";
        } else if (code == "auth/email-already-in-use") {
            this.name = "EmailAlreadyInUse";
            this.message = "Email já em uso!";
        } else {
            this.name = code;
            this.message = "Erro desconhecido! Tente novamente mais tarde.";
        }
    }
};