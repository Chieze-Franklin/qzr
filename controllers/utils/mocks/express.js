const mockRequest = () => {
    const req = {}
    req.body = jest.fn().mockReturnValue(req);
    req.params = jest.fn().mockReturnValue(req);
    req.user = { _id: "61ef362757482f142fb3825b" };
    return req
};

const mockResponse = () => {
    const res = {}
    res.send = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res
};

const mockNext = () => jest.fn()

module.exports = {
    mockRequest,
    mockResponse,
    mockNext,
};
