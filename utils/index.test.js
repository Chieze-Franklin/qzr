const { jwt, security } = require("./index");

describe("Utils", () => {
    it('expects the hash of 2 identical strings to be the same', () => {
        const text = "abcd";
        const hash1 = security.hash(text);
        const hash2 = security.hash(text);
    
        expect(hash1).toEqual(hash2);
    });
    
    it('expects the hash of 2 different strings to not be the same', () => {
        const text1 = "abcd";
        const text2 = "ABCD";
        const hash1 = security.hash(text1);
        const hash2 = security.hash(text2);
        
        expect(hash1).not.toEqual(hash2);
    });
    
    it('expects a JWT encrypted token to be decrypted back to the original payload', () => {
        const payload = "abcd";
        const encryptedToken = jwt.encrypt(payload);
        const decryptedPayload = jwt.decrypt(encryptedToken);
        
        expect(payload).not.toEqual(encryptedToken);
        expect(decryptedPayload).not.toEqual(encryptedToken);
        expect(decryptedPayload).toEqual(payload);
    });
});
