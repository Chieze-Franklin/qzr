const { AttemptModel } = require("./utils/mocks/mongoose");
const { mockRequest, mockResponse, mockNext } = require("./utils/mocks/express");
const attemptController = require("./Attempt");

describe("Attempt Controller", () => {
    describe("find", () => {
        it('expects AttemptModel.find to be called with 1 filter if there is no req.params.id', async () => {
            const req = mockRequest();
            req.params.id = null;
            const res = mockResponse();
            const next = mockNext();
    
            await attemptController.find(req, res, next);
        
            expect(AttemptModel.find).toHaveBeenCalledWith({ user_id: req.user._id }, { questions: 0 });
            expect(res.json).toHaveBeenCalled();
        });
    
        it('expects AttemptModel.find to be called with 2 filters if there is a req.params.id', async () => {
            const req = mockRequest();
            req.params.id = "61ef542bdfb8b1a566b2b5ce";
            const res = mockResponse();
            const next = mockNext();
    
            await attemptController.find(req, res, next);
        
            expect(AttemptModel.find).toHaveBeenCalledWith({ user_id: req.user._id, quiz_id: req.params.id }, { questions: 0 });
            expect(res.json).toHaveBeenCalled();
        });
    });
});
