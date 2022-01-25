const { AttemptModel } = require("./utils/mocks/mongoose");
const { mockRequest, mockResponse, mockNext } = require("./utils/mocks/express");
const statsController = require("./Stats");

describe("Stats Controller", () => {
    it('expects AttemptModel.find to be called with 1 filter if there is no req.params.id', async () => {
        const req = mockRequest();
        req.params.id = null;
        const res = mockResponse();
        const next = mockNext();

        await statsController.find(req, res, next);
    
        expect(AttemptModel.find).toHaveBeenCalledWith({ user_id: req.user._id }); // (expect.anything());
        expect(res.json).toHaveBeenCalled();
    });

    it('expects AttemptModel.find to be called with 2 filters if there is a req.params.id', async () => {
        const req = mockRequest();
        req.params.id = "61ef542bdfb8b1a566b2b5ce";
        const res = mockResponse();
        const next = mockNext();

        await statsController.find(req, res, next);
    
        expect(AttemptModel.find).toHaveBeenCalledWith({ user_id: req.user._id, quiz_id: req.params.id });
        expect(res.json).toHaveBeenCalled();
    });
});
